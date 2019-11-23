import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyCanvas from "./MyCanvas";

function App() {
  return (
    <div className="App" >
      <div id="canvasCont" className="container">
        <MyCanvas></MyCanvas>
      </div>
    </div>
  );
}

export default App;
