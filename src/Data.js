import React, { Component } from "react";

//拿資料及移除的範例
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGetData: false,
      delayData: ""
    };
    this.ajaxSimulator = this.ajaxSimulator.bind(this);
  }



  //此data元件被呼叫就會做了
  componentDidMount() {
    this.ajaxSimulator();
    document
      .getElementById("textArea")
      .append("[id:textArea]我是在Mount時新增出現在APP裡的區塊!");
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water list");
    node.appendChild(textnode);
    document.getElementById("textArea").appendChild(node);
  }
  //此data元件被移除就會做了
  componentWillUnmount() {
    document.getElementById("textArea").innerHTML = "";
  }


  ajaxSimulator() {
    setTimeout(() => {
      this.setState({ isGetData: true, delayData: "3秒後拿到的資料" });
    }, 3000);
  }


  render() {
    //判斷是否拿到資料前後的表現
    if (this.state.isGetData === false)
      return (
        <div className="content-bady" id="msg">
          讀取中...
        </div>
      );
    else
      return (
        <div className="content-bady" id="msg">
          讀取完了 資料是{this.state.delayData}
        </div>
      );
  }
}
export default Data;
