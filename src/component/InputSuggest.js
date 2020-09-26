import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { myStyle } from './Style/InputSuggest_Style';
/** @jsx jsx */ import { css, jsx } from '@emotion/core';

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 6px 10px 6px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const Suggest = (props) => {
  const classes = useStyles(); // const handleClick = () => {
  //   inputRef.current.focus(); //滑鼠會跳到input的欄位
  // };
  const [LabelCss, setLabelCss] = useState(myStyle.Lable);
  const handleChangeValue = (event) => {
    console.log(inputRef.current.value);

    const len = inputRef.current.value.length;
    if (len === 0) {
      console.log('0');
      setLabelCss(myStyle.Lable);
    }
    props.func(inputRef.current.value);
  };
  const handleFoucus = () => {
    setLabelCss(myStyle.LableMove);
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
      />
      <label htmlFor="TaskName" css={LabelCss}>
        Type
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
