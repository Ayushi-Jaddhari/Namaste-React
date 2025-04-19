import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => creates/gives us an object => when we renders it into DOM => becomes an HTMLElement
//using core React
// const heading = React.createElement("h1",{id:"heading"}, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

//JSX - HTML or XML-like syntax but it is not html/xml inside javascript
//Using JSX
//JSX ( it gets transpiled before it reaches the JS) -> PARCEL -> Babel
//Babel takes the JSX and transpiles/compiles the code to something which browser can understand
// Babel -> JSX code is first transpiled into ReactElement React.createElement => creates/gives us an object => when we renders it into DOM => becomes an HTMLElement
//JSX sanitizes the input for us also, to prevent cross-site scripting attack
// const heading = (
//   <h1 className="head" tabIndex="1">
//     Namaste React
//   </h1>
// );

// Class Based Components and Function Component

// React Functional Component

//Component Composition : Component inside a component

const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX!
  </h1>
);
let number = 3;
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    {bar}
    <h1> Episode : {number} </h1>
  </div>
);

const spanElem = (
  <span> This is we trying react element inside react element</span>
);

const bar = (
  <h1>
    {spanElem}
    <br></br>
    This is React Element and I am trying to put it inside REact Component
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
