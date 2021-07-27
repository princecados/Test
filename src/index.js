import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navigation from "./Navigation";

ReactDOM.render(<Navigation user="Babak Arghavan"/>, document.getElementById("navigation"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
