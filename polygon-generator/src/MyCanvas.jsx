import React, { Component } from "react";

class MyCanvas extends Component {
  state = {
    points: [],
    lines: []
  };

  onCanvasClick = event => {
    console.log("item clicked at coord " + event.clientX + " " + event.clientY);
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
    console.log("item clicked at coord " + newPoint[0] + " " + newPoint[1]);
    console.log(" state ", this.state.points)
    const points = [...this.state.points, newPoint];
    this.setState({ points })
  };

  render() {
      return (<div id="canvas" onClick={this.onCanvasClick}></div>);
  }
}

export default MyCanvas;
