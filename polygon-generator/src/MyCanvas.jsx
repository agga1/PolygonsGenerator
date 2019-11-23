import React, { Component } from "react";

class MyCanvas extends Component {
  state = {
    points: [],
    prevPoints: [],
    lines: [
      [
        [150, 100],
        [20, 30]
      ]
    ],
    allLines: [],
    polygons: [],
    mode: "points"
  };

  onCanvasClick = event => {
    const point = [event.clientX, event.clientY];
    var element = document.getElementById("canvas");
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
    const newPoint = [point[0] - x, point[1] - y];
    console.log(
      this.state.mode + " clicked at coord " + newPoint[0] + " " + newPoint[1]
    );
    switch (this.state.mode) {
      case "points":
        const points = [...this.state.points, newPoint];
        this.setState({ points });
        break;
      case "lines":
        if (this.state.prevPoints.length < 1) {
          const prevPoints = [newPoint];
          this.setState({ prevPoints });
        } else {
          const newLine = [this.state.prevPoints[0], newPoint];
          const lines = [...this.state.lines, newLine];
          this.setState({ lines });
          const prevPoints = [];
          this.setState({ prevPoints });
        }
        break;
      case "polygons":
        if (this.state.prevPoints.length < 1) {
          const prevPoints = [newPoint];
          this.setState({ prevPoints });
        } else {
          let polygonEnded = false;
          const newLine = [this.state.prevPoints[0], newPoint];
          let lines = [this.state.prevPoints[0], newPoint];
          const allLines = [...this.state.lines, newLine];
          let prevPoints = [];
          for (let i = 0; i < this.state.prevPoints; i++) {
            if (
              newPoint[0] == this.state.prevPoints[i][0] &&
              newPoint[1] == this.state.prevPoints[i][1]
            ) {
              const polygon = [...this.state.lines, newLine];
              const polygons = [...this.state.polygons, polygon];
              this.setState({ polygons });
              lines = [];

              polygonEnded = true;
            }
          }
          if (!polygonEnded) {
            prevPoints = [...this.state.prevPoints, newPoint];
          }

          this.setState({ lines });
          this.setState({ prevPoints });
          this.setState({ allLines });
        }

        break;
    }
    console.log(this.state.points);
    console.log(this.state.lines);
    console.log(this.state.polygon);
  };
  onChangeMode = mode => {
    console.log("new mode " + mode);
    this.setState({ mode });
  };
  render() {
    return (
      <div>
        <div id="canvas" onClick={this.onCanvasClick}>
          <svg width="100%" height="100%">
            {this.state.points.map((point, ind) => {
              return (
                <circle
                  key={ind}
                  cx={point[0]}
                  cy={point[1]}
                  r="2"
                  fill="yellow"
                />
              );
            })}
            {this.state.lines.map((line, ind) => {
              return (
                <line
                  x1={line[0][0]}
                  y1={line[0][1]}
                  x2={line[1][0]}
                  y2={line[1][1]}
                  style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
                />
              );
            })}
            {this.state.allLines.map((line, ind) => {
              return (
                <line
                  x1={line[0][0]}
                  y1={line[0][1]}
                  x2={line[1][0]}
                  y2={line[1][1]}
                  style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
                />
              );
            })}
          </svg>
        </div>
        <button id="enter-points" onClick={() => this.onChangeMode("points")}>
          Enter points
        </button>
        <button id="enter-lines" onClick={() => this.onChangeMode("lines")}>
          Enter lines
        </button>
        <button
          id="enter-polygons"
          onClick={() => this.onChangeMode("polygons")}
        >
          Enter polygons
        </button>
      </div>
    );
  }
}

export default MyCanvas;
