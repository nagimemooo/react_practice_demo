import React from "react";
import ReactDOM from "react-dom";
 import TaskMain from "./component/TaskMain";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TaskMain/>
  </React.StrictMode>,
  rootElement
);
