import React from "react";
import ReactDOM from "react-dom";

import ComponentA from "./components/ComponentA";
import FormComponent from "./components/FormComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ComponentA />
    <FormComponent/>
  </React.StrictMode>,
  rootElement
);
