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
 *   </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 Tag")
  )
);

console.log(parent); // ----> ReactElement(Object)  => HTML(Browser Understands)

// Create a React root with ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
//Render the React element into the React root
root.render(parent);
