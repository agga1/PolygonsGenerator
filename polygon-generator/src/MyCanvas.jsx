import React, { Component } from 'react';

class MyCanvas extends Component {
    state = {
        points: [],
        lines: []
    }

    onCanvasClick = (event) => {
        console.log("item clicked at coord " + event.clientX + " " + event.clientY)
        console.log(" state ", this.state.points)
        const newPoint = [event.clientX, event.clientY];
        const points = [...this.state.points, newPoint];
        this.setState({ points })
    }

    render() {
        return (<div id="canvas" onClick={this.onCanvasClick}></div>);
    }
}

export default MyCanvas;

