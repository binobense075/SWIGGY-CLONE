import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="header" className="head" tabIndex="1">
    React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
