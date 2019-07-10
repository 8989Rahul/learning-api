import React, { Component } from "react";
import ApiCall from "./components/ApiCall";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ApiCall />
      </div>
    );
  }
}
