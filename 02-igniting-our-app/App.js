import React from "react";
import ReactDOM from "react-dom/client";
// Create a React element
const heading = React.createElement(
  "h1",
  {
    // This object is passed as PROPS
    id: "heading",
  },
  "Hello World from React" // ---- This is the children
);

console.log(heading); // -----  Prints an Object on the console

/**
 * <div id="parent">
 *   <div id="child">
 *      <h1>I'm h1 Tag</h1>
 *      <h2>I'm h2 Tag</h2>
 *   </div>
 *   <div id="child">
 *      <h1>I'm h1 Tag</h1>
 *      <h2>I'm h2 Tag</h2>
 *   </div>
 * </div>
 */

// createElement(tagName, props, children)
// To Make multiple children, we need to pass an array of children
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
]);

console.log(parent); // ----> ReactElement(Object)  => HTML(Browser Understands)

// Create a React root with ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
//Render the React element into the React root
root.render(parent);

// Why React is a Library ?
/*
      Because we can use React in any part of the HTML page.  Even in the middle of the page, side of the page, etc.
  
  */
