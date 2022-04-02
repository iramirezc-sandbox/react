import React, { Component } from "react";
import { square } from "../utils";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>
          Hello from <span>React</span>!
        </h1>
        <pre>
          <code>square(2) = {square(2)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
