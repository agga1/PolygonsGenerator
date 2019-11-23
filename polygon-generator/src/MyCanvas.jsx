import React, { Component } from "react";

class MyCanvas extends Component {
  state = {
    points: [],
    lines: [],
    prevPoints: [],
    mode: "points"
  };

  onCanvasClick = event => {
    const style = getComputedStyle(document.querySelector("#canvasCont"));
    const point = [event.clientX, event.clientY];
    const changes = [
      parseInt(
        style.left
          .split("")
          .slice(0, -2)
          .join("")
      ),
      parseInt(
        style.top
          .split("")
          .slice(0, -2)
          .join("")
      )
    ];
    const newPoint = [point[0] - changes[0], point[1] - changes[1]];
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
  };
  render() {
    return (
      <>
        <div id="canvas" onClick={this.onCanvasClick}></div>
        <button id="enter-points" onClick={() => this.onChangeMode("points")}>
          Enter points
        </button>
        <button id="enter-lines" onClick={() => this.onChangeMode("lines")}>
          Enter lines
        </button>
      </>
    );
  }
}

export default MyCanvas;
