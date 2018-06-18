import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

console.log("Running app.js");

const template = (
  <div>
    <h1>Welcome</h1>
  </div>
);

ReactDOM.render(
  template,
  document.getElementById("app")
);
