import React from "react";
import ReactDOM from "react-dom";

import FormComponent from "./components/FormComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FormComponent/>
  </React.StrictMode>,
  rootElement
);
