import React from "react";
import "./styles.css";
import { BG as ASBG, TextRed as ASTextRed } from "./AppStyle";

/** @jsx jsx */ import { css, jsx } from "@emotion/core"; //不知道為什麼一定要加前述

//練習用css-in-js庫emotion 更改樣式

export default function App() {
  const TextRed = css`
    color: red;
  `;

  const BG = css`
    background-color: #3f51b5;
  `;
  //https://stackoverflow.com/questions/61741076/css-emotion-library-getting-css-props-error-when-using-css-prop

  const Classes = css`
    color: purple;
    span {
      color: black;
    }
    & .childClassName {
      color: green;
    }
  `;
  return (
    <div className="App">
      {/*１．套用 styles.css檔樣式*/}
      <h1>Hello CodeSandbox</h1>
      <h2 className={["BG", "TextRed"].join(" ")}>外部CSS樣式表</h2>
      {/*多重套用className https://github.com/rtsao/csjs/wiki/How-to-apply-multiple-classnames-to-an-element */}

      {/*２．套用 .Inline-style 檔樣式*/}
      <h2 style={{ color: "red", backgroundColor: "#3f51b5" }}>JS寫法</h2>

      {/*3．套用 css-in-js 樣式*/}
      <h2 css={TextRed}>emotion css 寫法</h2>
      <h2 css={[TextRed, BG]}>emotion css 多重設定兩個樣式 [TextRed, BG]</h2>
      {/* <h2 className={Classes}> https://stackoverflow.com/questions/50840641/how-to-pass-multiple-classnames-to-inner-children-with-emotion-js*/}
      <h2 css={Classes}>
        emotion css ! 親樣式
        <div className="childClassName ">child 設定子樣式</div>
        <div className="otherChildClassName">child</div>
      </h2>
      <h2 css={[ASBG, ASTextRed]}>樣式寫在另一檔案再引入</h2>
    </div>
  );
}
