import React, { Component } from "react";
import { square } from "../utils";
import logo from "img/react-logo.png";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>
          Hello from <span>React!</span>
        </h1>
        <img src={logo} height={100} alt="React logo" />
        <pre>
          <code>square(2) = {square(2)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
