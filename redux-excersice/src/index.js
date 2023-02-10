import React from "react";
import ReactDOM from "react-dom";

import ComponentA from "./components/ComponentA";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ComponentA />
  </React.StrictMode>,
  rootElement
);
