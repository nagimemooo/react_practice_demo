import React from "react";
import ReactDOM from "react-dom";

import Demo from "./component/demo";
import Input from "./component/input";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Input/>
    <Demo />
  </React.StrictMode>,
  rootElement
);
