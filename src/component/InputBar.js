import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
import { createData } from "./helper";
import Input from "@material-ui/core/Input";
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
import styled from "@emotion/styled";
import SuggestXInput from "./SuggestXInput";

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
  Red: {
    color: "red", //color: red 沒有加雙引號是錯誤寫法
  },
  Field: {
    margin: "20px 0",
  },
  ErrorDiv: css`
    //不知道為什麼這種寫法引用沒效果 解析不出來
    height: 11px;
    font-size: 12px;
    color: #ea645e;
    font-weight: Regular;
    line-height: 14px;
    letter-spacing: 0.73px;
    margin-top: 8px;
  `,
}));

const ErrorLabel = styled.label`
  //換一種寫法
  height: 11px;
  font-size: 12px;
  color: #ea645e;
  font-weight: Regular;
  line-height: 14px;
  letter-spacing: 0.73px;
  margin-top: 8px;
`;

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [TaskName, setTaskName] = useState("");
  const [TaskNamelen, setTaskNamelen] = useState(0);
  const [isValidName, setIsValidName] = useState(true);
  const [errorText, setErrorText] = useState("");

  const handleChangeValue = (e, fieldName) => {
    const { value } = e.target;
    console.log(value);
    if (fieldName === "TaskName") {
      setTaskName(value);
      const len = [...value].length;
      if (TaskNamelen > 10) {
        setIsValidName(false);
        setErrorText("text length too long.");
      } else {
        setIsValidName(true);
        setErrorText("");
      }
      setTaskNamelen(len);
    }
  };

  const handleSubmit = (event) => {
    if (TaskName === "") {
    }

    //https://stackoverflow.com/questions/57918784/javascript-react-push-to-an-array-in-usestate
    // props.data.push( createData(task, 305, 3.7, 67, 4.3))
    // props.changefunc(props.data)
    // 用push進去 不知道為什麼無法觸發data update的 useEffect 所以也不會render conponent
    //改成下列的串接寫法就可以
    props.changefunc([...props.data, createData(TaskName, 305, 3.7, 67, 4.3)]);

    event.preventDefault();
  };
  const inputRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <FormControl className={css(classes.margin, classes.textField)}>
            <InputLabel ref={inputRef} htmlFor="TaskName">
              TaskName
            </InputLabel>
            <Input
              id="standard-basic"
              error={!isValidName}
              label="TaskName"
              // helperText={isOK ? "" : "text length too long."} not
              // value={task}
              onChange={(e) => handleChangeValue(e, "TaskName")}
              endAdornment={
                <InputAdornment position="end">{`${TaskNamelen}/10`}</InputAdornment>
              }
            />
            {/*不知道為什麼這種寫法引用沒效果 解析不出來
             <label className={classes.ErrorDiv}>{errorText}</label> */}

            <ErrorLabel>{errorText}</ErrorLabel>
          </FormControl>

          <FormControl className={classes.formControl} variant="outlined">
            <SuggestXInput
              options={["life", "blog", "front-web", "go", "design", "others"]}
            />
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddIcon>send</AddIcon>}
          // type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
