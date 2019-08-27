import React, { Component } from "react";
import UserInput from "./userInput";

class Title extends Component {
  render() {
    return (
      <div className="App">
        <div className="badge badge-pill badge-dark">
          <header>
            <h1>Welcome to the traveller helper: D</h1>
          </header>

          <hr />
        </div>
        <UserInput />
      </div>
    );
  }
}

export default Title;
