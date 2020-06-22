import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./autocomplete";
import states from "./states";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className="App-component">
            <Autocomplete items={states} />
          </div>
        </div>
      </div>
    );
  }
}
