import React from "react";
import ReactDOM from "react-dom/client";


const TitleComponent = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX!
  </h1>
);

let number = 3;
const HeadingComponent = () => (
  <div id="container">=
    <TitleComponent />
    <h1> Episode : {number} </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
