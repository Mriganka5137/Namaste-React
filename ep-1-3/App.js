import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS engine) -- by PARCEL --> by BABEL tbh

// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    I'm an React Element
  </h1>
);

// React Components
// 1. Class Based Components -- OLD

// 2. Functional  Components -- NEW
const Title = () => (
  <h1 className="title" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

// Component Composition
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      {heading}
      <h1 className="heading">Namaste React Functional Component ⚛</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
