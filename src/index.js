import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { install } from "./installSW";
import App from "./App";

install();

ReactDOM.render(<App />, document.getElementById("root"));
