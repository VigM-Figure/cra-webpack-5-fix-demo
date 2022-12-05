import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createHash } from "crypto";
import { format } from "util";
import { Writable } from "stream";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Buffer exists: {`${!!window?.Buffer}`}</div>
        <div>crypto exists: {`${!!createHash}`}</div>
        <div>stream exists: {`${!!Writable}`}</div>
        <div>util exits: {`${!!format}`}</div>
      </header>
    </div>
  );
}

export default App;
