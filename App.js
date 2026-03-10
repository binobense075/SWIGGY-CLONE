import React from "react";
import ReactDOM from "react-dom/client";

//! React Element
const jsxHeading = (
  <h1 id="header" className="head" tabIndex="1">
    React using JSX
  </h1>
);

const Title = () => <h1 id="header">Welcome onBoard Crew</h1>;

//! React Component -> Component returns a react element.
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>This is a react heading component.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
