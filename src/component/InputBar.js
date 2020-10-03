import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import { createData } from './helper';
import Input from '@material-ui/core/Input';
import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Popper,
  List,
  ListItem,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { css } from 'emotion';
import styled from '@emotion/styled';
import InputSuggest from './InputSuggest';
import { getToday } from './helper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
  },
  formDiv: {
    display: 'flex',
    alignItems: 'center', //---排列上下置中
  },
  formControl: {
    margin: '10px',
    //marginTop: theme.spacing.unit * 2,
    minWidth: 200,
    maxWidth: 300,
  },
  button: {
    margin: '10px',
    width: '130px',
  },
  Red: {
    color: 'red', //color: red 沒有加雙引號是錯誤寫法
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
  const [TaskName, setTaskName] = useState('');
  const [Type, setType] = useState('');
  const [Pri, setPri] = useState(0);
  const [TaskNamelen, setTaskNamelen] = useState(0);
  const [isValidName, setIsValidName] = useState(true);
  const [errorText, setErrorText] = useState('');

  const handleChangeValue = (e, fieldName) => {
    const { value } = e.target;
    console.log(value);
    if (fieldName === 'TaskName') {
      setTaskName(value);
      const len = [...value].length;
      if (TaskNamelen > 10) {
        setIsValidName(false);
        setErrorText('text length too long.');
      } else {
        setIsValidName(true);
        setErrorText('');
      }
      setTaskNamelen(len);
    }
  };
  const handleSubmit = (event) => {
    // TODO 判斷是否重複
    if (TaskName === '') {
    }
    console.log('type' + Type);
    console.log('Pri' + Pri);
    //https://stackoverflow.com/questions/57918784/javascript-react-push-to-an-array-in-usestate
    // props.data.push( createData(task, 305, 3.7, 67, 4.3))
    // props.changefunc(props.data)
    // 用push進去 不知道為什麼無法觸發data update的 useEffect 所以也不會render conponent
    //改成下列的串接寫法就可以
    props.changefunc([...props.data, createData(TaskName, 305, 3.7, 67, 4.3)]);
    //TODO
    event.preventDefault();
  };
  const handlePriChange = (pri) => {
    setPri(pri);
  };
  const handleTypeChange = (type) => {
    setType(type);
  };

  const inputRef = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.formDiv}>
          <FormControl className={css(classes.margin, classes.textField)}>
            <InputLabel ref={inputRef} htmlFor="TaskName">
              任務 TaskName
            </InputLabel>
            <Input
              id="standard-basic"
              error={!isValidName}
              label="TaskName"
              // helperText={isOK ? "" : "text length too long."} not
              // value={task}
              onChange={(e) => handleChangeValue(e, 'TaskName')}
              endAdornment={
                <InputAdornment position="end">{`${TaskNamelen}/10`}</InputAdornment>
              }
            />
            {/*不知道為什麼這種寫法引用沒效果 解析不出來
             <label className={classes.ErrorDiv}>{errorText}</label> */}

            <ErrorLabel>{errorText}</ErrorLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputSuggest
              defaultValue="優先度 pri."
              options={['1', '2', '3']}
              func={handlePriChange}
            />
            <ErrorLabel></ErrorLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputSuggest
              defaultValue="類型 Type"
              options={['life', 'blog', 'front-web', 'go', 'design', 'others']}
              func={handleTypeChange}
            />
            <ErrorLabel></ErrorLabel>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <TextField
              id="date"
              label="開始日 Date"
              type="date"
              defaultValue={getToday()}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ErrorLabel></ErrorLabel>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddIcon>send</AddIcon>}
            // type="submit"
            onClick={handleSubmit}
          >
            新增
          </Button>
        </div>
      </form>
    </div>
  );
}
