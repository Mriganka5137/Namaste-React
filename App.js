import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS engine) -- by PARCEL --> by BABEL tbh

// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    Namste React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
