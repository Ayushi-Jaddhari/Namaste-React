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
// Babal -> JSX code is first transpiled into ReactElement React.createElement => creates/gives us an object => when we renders it into DOM => becomes an HTMLElement

const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
