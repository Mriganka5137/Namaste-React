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

// Create a React root with ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
//Render the React element into the React root
root.render(heading);
