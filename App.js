import React from "react";
import ReactDOM  from "react-dom/client"


/** Nested parent-child
 *
 * <div id=" parent">
 *      <div id= "child">
 *           <h1></h1>
 *      </div>
 * </div>
 *
 *
 *
 */
/**
 * SIblings
 * <h1>I am h1 tag</h1>
 * <h2> I am h2 tag</h2>
 * 
 * 
 * We will use array for writing child
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
      React.createElement("h1", { id: "h1", key: "h1" }, "I am h1 tag!"),
      React.createElement("h2", { id: "h2", key: "h2" }, "I am h2 tag!")

    ]
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
