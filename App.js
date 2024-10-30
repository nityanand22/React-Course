import React from "react";
import ReactDOM from "react-dom/client";

//? React Element

let greet = <h1>Hello World Welcome to React World</h1>

const title = (
  <p id="heading" className="head" tabIndex="5">
    {greet}
    This is the heading using JSX
  </p>
);

//? React Component
//? Class Based Component - OLD
//? Functional Comoponent - NEW

//! React Functional Component

//*----Component Composition------------/

const HeadingComponent = () => (
  <div id="container">
    {title}
    <p>This Is Functional Component</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);