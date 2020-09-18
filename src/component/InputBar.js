import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
import { createData } from "./helper";
import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Popper,
  List,
  ListItem,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { css } from "emotion";
import Suggest from "./Suggest";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 200,
    maxWidth: 300,
  },
  button: {
    margin: theme.spacing(1),
    width: "100px",
  },
  //   Field: css` //emotion套件寫法
  //   margin: 20px 0;
  // `,
  Field: {
    margin: "20px 0",
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
  const [TaskName, setTaskName] = useState("");
  const [TaskNamelen, setTaskNamelen] = useState(0);
  const [isValidName, setIsValidName] = useState(true);
  const [errorText, setErrorText] = useState("");

  const handleChangeValue = (e, fieldName) => {
    const { name } = e.target;
    const { value } = e.target;
    if (value) {
      console.log(value);

      // setDeviceInfo(addFieldValue(name, value, deviceInfo));
      if (fieldName === "TaskName") {
        setTaskName(value);
        const len = [...value].length;
        if (TaskNamelen > 10) {
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

    setIsok(true);
    if (event.target.value.length >= 10) {
      setIsok(false);
    }
  };
  const handleSubmit = (event) => {
    //https://stackoverflow.com/questions/57918784/javascript-react-push-to-an-array-in-usestate
    // props.data.push( createData(task, 305, 3.7, 67, 4.3))
    // props.changefunc(props.data)
    // 用push進去 不知道為什麼無法觸發data update的 useEffect 所以也不會render conponent
    //改成下列的串接寫法就可以
    props.changefunc([...props.data, createData(task, 305, 3.7, 67, 4.3)]);

    event.preventDefault();
  };
  const inputRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputRef.current.offsetWidth);
  }, []);
  return (
    <form className={classes.form} noValidate autoComplete="off">
      <div>
        <FormControl className={classes.formControl} variant="outlined">
          <TextField
            id="standard-basic"
            error={!isOK}
            label="Task"
            helperText={isOK ? "" : "text length too long."}
            value={task}
            onChange={handleTaskChange}
          />
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={inputRef} htmlFor="TaskName">
            TaskName
          </InputLabel>
          <OutlinedInput
            name="TaskName"
            onChange={(e) => handleChangeValue(e, "TaskName")}
            error={!isValidName}
            variant="outlined"
            //value={TaskName ? TaskName : undefined}
            helperText={isValidName ? "" : "text length too long."}
            endAdornment={
              <InputAdornment position="end">{`${TaskNamelen}/10`}</InputAdornment>
            }
            labelWidth={labelWidth} //這樣寫 莫名其妙寫好了＠＠
          />
          {/* <label className={formStyles.ErrorDiv}>{errorText}</label> */}
          <label>{errorText}</label>
        </FormControl>
      </div>
      <Suggest
        options={["life", "blog", "front-web", "go", "design", "others"]}
      />
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
