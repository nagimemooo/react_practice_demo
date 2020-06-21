//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
//用來改變資料內容的範例
const ChangeData = props => {
  const [Data, setData] = useState("初始資料");
  const [isRightData, setRightData] = useState(true);
  // class ChangeData extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isRightData: true,
  //       Data: "初始資料"
  //     };
  //     this.handleClick = this.handleClick.bind(this);
  //   }
  const handleClick = () => {
    //handleClick() {
    //this.setState({ isRightData: !this.state.isRightData });
    setRightData(!isRightData);
  };
  // //判斷props或state是否被更動
  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //   //如果不加if條件的話react limits the number of nested updates to prevent infinite loops
  //     if (this.props.detail === "B" && prevProps.detail !== this.props.detail) {
  //       this.setState({ Data: "B" });
  //     }
  //     if (prevState.isRightData !== this.state.isRightData) {
  //       this.setState({ Data: "isRightData被更改" });
  //     }
  //   }
  useEffect(() => {
    /*  componentDidMount和componentDidUpdate */
    if (props.detail === "B") setData("B");
  }, [props.detail]);

  useEffect(() => {
    /*  componentDidMount和componentDidUpdate */
    setData("isRightData被更改");
  }, [isRightData]);
  //render() {
  return (
    // 資料可以被改變的內容區塊:{this.state.Data}
    // {this.state.isRightData === true
    //   ? "點我更改state(isRightData)"
    //   : "重新出現"}
    <div className="c-chgData" id="msg">
      資料可以被改變的內容區塊:{Data}
      <div>
        <p>在元件內設一個按鈕也可以更變State，也可以觸發</p>
        <button onClick={handleClick}>
          {isRightData === true ? "點我更改state(isRightData)" : "沒設定什麼"}
        </button>
      </div>
    </div>
  );
  // }
};
export default ChangeData;
