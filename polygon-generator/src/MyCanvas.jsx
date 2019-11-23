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
    }
    console.log(this.state.points);
    console.log(this.state.lines);
  };
  onChangeMode = mode => {
    console.log("new mode " + mode);
    this.setState({ mode });
    this.setState({ prevPoints: [] });
  };
  exportToJson = typeOfData => {
    function download(filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
    switch (typeOfData) {
      case "points":
        download("points.json", JSON.stringify(this.state.points));
        break;
      case "lines":
        download("lines.json", JSON.stringify(this.state.lines));
        break;
      case "polygons":
        download("polygons.json", JSON.stringify(this.state.polygons));
        break;
    }
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
                  fill="rgb(100,100,100)"
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
                  style={{ stroke: "rgb(63, 123, 210)", strokeWidth: "2" }}
                />
              );
            })}
          </svg>
        </div>
        <button
          id="enter-points"
          className="btn btn-primary"
          onClick={() => this.onChangeMode("points")}
        >
          Enter points
        </button>
        <button
          id="enter-lines"
          className="btn btn-primary"
          onClick={() => this.onChangeMode("lines")}
        >
          Enter lines
        </button>
        <button
          id="export-to-json"
          className="btn btn-primary"
          onClick={() => this.exportToJson("points")}
        >
          export points to json
        </button>
        <button
          id="export-to-json"
          className="btn btn-primary"
          onClick={() => this.exportToJson("lines")}
        >
          export lines to json
        </button>
      </div>
    );
  }
}

export default MyCanvas;
