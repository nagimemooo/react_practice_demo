import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
import {createData} from './helper'
import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Popper,
  List,
  ListItem,
} from '@material-ui/core';
import { css } from 'emotion';
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
  },
  //   Field: css` //emotion套件寫法
//   margin: 20px 0;
// `,
Field: {
  margin: '20px 0',
  },
  ErrorDiv: css`
  height: 11px;
  font-size: 12px;
  color: #ea645e;
  font-weight: Regular;
  line-height: 14px;
  letter-spacing: 0.73px;
  margin-top: 8px;
`,
}));



export default function BasicTextFields(props) {
  const classes = useStyles();
  const [task, inputTask] = useState("");
  const [isOK, setIsok] = useState(true);
  const [TaskName, setTaskName] = useState('');
  const [TaskNamelen, setTaskNamelen] = useState(0);
  const [isValidName, setIsValidName] = useState(true);
  const [errorText, setErrorText] = useState('');
  const handleChangeValue = (e, fieldName) => {
    const { name } = e.target;
    const { value } = e.target;
    if (value) {
      console.log(value)
  
     // setDeviceInfo(addFieldValue(name, value, deviceInfo));
      if (fieldName === 'TaskName') {
        setTaskName(value);
        const len = [...value].length;
        if (TaskNamelen > 30) {
          // const errorTaskName = formatMessage({
          //   id: 'errorTaskName',
          // });
          setIsValidName(false);
          // setErrorText(errorTaskName);
          setErrorText("no");
        }
        setTaskNamelen(len);
      }
    } else {
     // setDeviceInfo(removeFieldValue(name, deviceInfo));
    }
  };
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

        
      <OutlinedInput
            name="TaskName"
            onChange={e => handleChangeValue(e, 'TaskName')}
            error={ !isValidName
            }
            // value={getFieldValue('TaskName', deviceInfo)}
            // value='TaskName'
            // defaultValue="Task"
            notched
            endAdornment={
              <InputAdornment position="end">
                {`${TaskNamelen}/30`}
              </InputAdornment>
            }
          /> 
          {/* <label className={formStyles.ErrorDiv}>{errorText}</label> */}
          <label>{errorText}</label> 

    <Suggest options={['life','blog','front-web','go','design','others']}/>
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
