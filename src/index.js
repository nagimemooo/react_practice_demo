import React from "react";
import ReactDOM from "react-dom";
import TaskMain from "./component/TaskMain";
import InputBar from "./sample/form/InputBar";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <TaskMain />
    <InputBar />
  </React.StrictMode>,
  rootElement
);
