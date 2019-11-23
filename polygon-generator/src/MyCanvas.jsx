import React, { Component } from "react";

class MyCanvas extends Component {
  state = {
    points: [],
    lines: [],
    mode: "points"
  };

  onCanvasClick = event => {
    console.log(
      this.state.mode +
        " clicked at coord " +
        event.clientX +
        " " +
        event.clientY
    );
    switch (this.state.mode) {
      case "points":
        console.log(" state ", this.state.points);
        const newPoint = [event.clientX, event.clientY];
        const points = [...this.state.points, newPoint];
        this.setState({ points });
        break;
    }
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
