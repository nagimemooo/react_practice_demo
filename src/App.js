import React, { Component } from "react";
import Data from "./Data";
import ChangeData from "./ChangeData";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowData: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.genData = this.genData.bind(this);
    this.changeData = this.changeData.bind(this);
  }

  handleClick() {
    this.setState({ isShowData: !this.state.isShowData });
  }

  genData() {
    if (this.state.isShowData) {
      return <Data />;
    }
  }
  changeData() {
    if (this.state.isShowData) {
      return <ChangeData detail="A" />;
    } else {
      return <ChangeData detail="B" />;
    }
  }

  render() {
    return (
      <div className="content-app">
        <div>
          <h3>componentDidMount</h3>
          1.下面直接呼叫一個函式genBlue()
          決定是否call別的元件(Data)出來，預設是顯示
          <p>
            {" "}
            寫在(data)元件中的 componentDidMount會更改DOM by id(textArea)操作{" "}
          </p>
          及異步讀取資料
          {this.genData()}
        </div>
        <div>
          <h3>componentWillUnmount</h3>
          2.設計一個按鈕改變state.isShowData
          <button onClick={this.handleClick}>
            {this.state.isShowData === true ? "點我更改state()" : "重新出現"}
          </button>
          <p>
            因為satate被改變了觸發重新render，genData函數判斷決定拿掉元件(data)
          </p>
          <p>
            因為元件被被拿掉，觸發了
            寫在(data)元件中的componentWillUnmount內行為作動
          </p>
        </div>

        <div id="textArea" />
        <div>
          <h3>componentDidUpdate</h3>
          3.
          呼叫另一個函數call元件(ChangeData)，這次元件帶入prop(detail)，且會變化
          <p>
            按下2.satate被改變了觸發重新render，函數判斷決定更換prop(detail)
          </p>
          <p>寫在(ChangeData)元件中的componentDidUpdate內行為作動</p>
          {this.changeData()}
        </div>
      </div>
    );
  }
}
export default App;
