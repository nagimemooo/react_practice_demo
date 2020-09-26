import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const classes = useStyles();

  // const handleClick = () => {
  //   inputRef.current.focus(); //滑鼠會跳到input的欄位
  // };
  const handleChangeValue = (event) => {
    console.log(inputRef.current.value);
    props.func(inputRef.current.value);
  };
  const inputRef = useRef(null);
  const randomid = Math.random().toString(16).substring(2);
  return (
    <div>
      <input
        list={randomid}
        // defaultValue={props.defaultValue}
        ref={inputRef}
        id={props.id}
        className={classes.input}
        onChange={handleChangeValue}
      />
      <datalist id={randomid}>
        {props.options.map((item, idx) => (
          <option value={item} key={idx} />
        ))}
      </datalist>
    </div>
  );
};

export default Suggest;
