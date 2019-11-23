import React, { Component } from 'react';

class MyCanvas extends Component {
    state = {
        points: [],
        lines: []
    }
    
    onCanvasClick = (event) => {
        // event.screenX =
        console.log("item clicked at coord " + event.clientX + " " + event.clientY)
    //     const points = [...this.state.points];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters })

    }

    state = {}
    render() {
        return (<div id="canvas" onClick={this.onCanvasClick}></div>);
    }
}

export default MyCanvas;

