import React, { Component } from 'react';
import fabric from 'fabric';

class MyCanvas extends Component {
    
    onCanvasClick = (event) => {
        // event.screenX =
        console.log("item clicked at coord " + event.clientX + " " + event.clientY)

    }

    state = {}
    render() {
        return (<div id="canvas" onClick={this.onCanvasClick}></div>);
    }
}

export default MyCanvas;

