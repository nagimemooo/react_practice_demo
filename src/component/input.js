import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
import {createData} from './helper'

import Suggest from "./Suggest";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  button: {
    margin: theme.spacing(1),
    width: "100px"
  }
}));



export default function BasicTextFields(props) {
  const classes = useStyles();
  const [task, inputTask] = useState("");
  const [isOK, setIsok] = useState(true);
  const handleTaskChange = (event) => {
    inputTask(event.target.value);

    setIsok(true)
    if (event.target.value.length >=10) {
      setIsok(false)
    }


  };
  const handleSubmit = (event) => {
   
    //https://stackoverflow.com/questions/57918784/javascript-react-push-to-an-array-in-usestate
   // props.data.push( createData(task, 305, 3.7, 67, 4.3))
   // props.changefunc(props.data)
    // 用push進去 不知道為什麼無法觸發data update的 useEffect 所以也不會render conponent
    //改成下列的串接寫法就可以
    props.changefunc([...props.data,createData(task, 305, 3.7, 67, 4.3)])
    
    event.preventDefault();
  };
  
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >

      {isOK?(
      <TextField
        id="standard-basic"
        label="Task"
        value={task}
        onChange={handleTaskChange}
      />):(

      <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          value={task} //不給移開會被吃掉重疊＠＠
          helperText="text length too long."
          onChange={handleTaskChange}
        />
      )}
    
    <Suggest  options={['esd','feff','fsf','fdsg','ghg']}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddIcon>send</AddIcon>}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
}
