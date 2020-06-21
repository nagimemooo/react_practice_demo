//import React, { Component } from "react";
//import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
//拿資料及移除的範例
//class Data extends Component {
  const Data = props => {  
    const [isGetData, setGetData] = useState(false);
    const [delayData, setDelayData] = useState("");
// constructor(props) {
//     super(props);
//     this.state = {
//       isGetData: false,
//       delayData: ""
//     };
//     this.ajaxSimulator = this.ajaxSimulator.bind(this);
//   }



  // //此data元件被呼叫就會做了
  // componentDidMount() {
  //   this.ajaxSimulator();
  //   document
  //     .getElementById("textArea")
  //     .append("[id:textArea]我是在Mount時新增出現在APP裡的區塊!");
  //   var node = document.createElement("LI");
  //   var textnode = document.createTextNode("Water list");
  //   node.appendChild(textnode);
  //   document.getElementById("textArea").appendChild(node);
  // }
  // //此data元件被移除就會做了
  // componentWillUnmount() {
  //   document.getElementById("textArea").innerHTML = "";
  // }
  useEffect(() => {
    /* componentDidMount 區*/
    ajaxSimulator();
    document
      .getElementById("textArea")
      .append("[id:textArea]我是在Mount時新增出現在APP裡的區塊!");
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("textArea").appendChild(node);

    return () => {
      /* componentWillUnmount區 */
      document.getElementById("textArea").innerHTML = "";
    };
  }, []);


  // ajaxSimulator() {
    const ajaxSimulator = () => {
      setTimeout(() => {
        setGetData(true);
        setDelayData("3秒後拿到的資料");
  
        // this.setState({ isGetData: true, Mom: "3秒後拿到的資料" });
      }, 3000);
    };
  

  //render() {
  // if (this.state.isGetData === false)
  if (isGetData === false)
    return (
      <div className="content-bady" id="msg">
        讀取中...
      </div>
    );
  //  讀取完了 資料是{this.state.Mom}
  else
    return (
      <div className="content-bady" id="msg">
        讀取完了 資料是{delayData}
      </div>
    );
  //}
};
export default Data;
