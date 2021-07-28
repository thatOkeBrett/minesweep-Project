import React, { Component } from "react";
import Map from "./containers/map";
import "./App.css";

class App extends Component {
  render() {
    const widthStyle = {
      width: "800px"
    };
    return (
      <div style={widthStyle}>
        <h1>Minesweeper game</h1>
        <div className="App">
          <br />
          <Map className="map" />
        </div>
      
      </div>
    );
  }
}

export default App;
