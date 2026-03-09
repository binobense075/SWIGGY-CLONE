import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: 6 }, [
    React.createElement(
      "h1",
      { id: "header", key: "1" },
      "Rendered from react",
    ),
    React.createElement("h2", { key: 2 }, "Sibiling header"),
  ]),
  React.createElement("div", { id: "child2", key: 5 }, [
    React.createElement("h1", { id: "header", key: 3 }, "2nd child header"),
    React.createElement("h2", { key: 4 }, "2nd child subheading"),
  ]),
]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
