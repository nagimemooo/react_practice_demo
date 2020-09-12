import React from "react";
import ReactDOM from "react-dom";

// import SimpleTabs from "./component/SimpleTabs";
// import Input from "./component/input";
 import TaskMain from "./component/TaskMain";

import Suggest from "./component/Suggest";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
  <TaskMain/>
    <Suggest options={['esd','feff','fsf','fdsg','ghg']}/>
  </React.StrictMode>,
  rootElement
);
