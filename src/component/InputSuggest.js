import React, { useRef, useState } from 'react';

import { myStyle } from './Style/InputSuggest_Style';
/** @jsx jsx */ import { css, jsx } from '@emotion/core';

const Suggest = (props) => {
  // const handleClick = () => {
  //   inputRef.current.focus(); //滑鼠會跳到input的欄位
  // };
  const [LabelCss, setLabelCss] = useState(myStyle.Lable);
  const handleChangeValue = (event) => {
    console.log(inputRef.current.value);

    props.func(inputRef.current.value);
  };
  const handleFoucus = () => {
    setLabelCss(myStyle.LableMove);
  };

  const handleBlur = () => {
    const len = inputRef.current.value.length;
    if (len === 0) {
      console.log('0');
      setLabelCss(myStyle.Lable);
    }
  };

  const inputRef = useRef(null);
  const randomid = Math.random().toString(16).substring(2);
  return (
    <div css={myStyle.FormControl}>
      <input
        list={randomid} // defaultValue={props.defaultValue}
        ref={inputRef}
        id={props.id}
        css={[myStyle.Input.base, myStyle.Input.focus]}
        onChange={handleChangeValue}
        onFocus={handleFoucus}
        onBlur={handleBlur}
      />
      <label htmlFor="TaskName" css={LabelCss}>
        類型 Type
      </label>
      <datalist id={randomid}>
        {props.options.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
    </div>
  );
};

export default Suggest;
