import React, { Component } from "react";
class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRightDad: true,
      isGetData: false,
      Mom: ""
    };
    this.ajaxSimulator = this.ajaxSimulator.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.dad === "Chang" && prevProps.dad !== this.props.dad)
      this.setState({ Mom: "A是真的!" });
  }

  //此data元件被呼叫就會做了
  componentDidMount() {
    this.ajaxSimulator();
    document
      .getElementById("textArea")
      .append("[id:textArea]我是在Mount時新增出現在APP裡的區塊!");
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("textArea").appendChild(node);
  }
  //此data元件被移除就會做了
  componentWillUnmount() {
    document.getElementById("textArea").innerHTML = "";
  }
  ajaxSimulator() {
    setTimeout(() => {
      this.setState({ isGetData: true, Mom: "3秒後拿到的資料" });
    }, 3000);
  }
  render() {
    if (this.state.isGetData === false)
      return (
        <div className="content-bady" id="msg">
          讀取中...
        </div>
      );
    else
      return (
        <div className="content-bady" id="msg">
          讀取完了 資料是{this.state.Mom}
        </div>
      );
  }
}
export default Data;
