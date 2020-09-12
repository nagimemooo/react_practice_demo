import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
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

export default function BasicTextFields() {
  const classes = useStyles();
  const [task, inputTask] = useState("");
  const handleTaskChange = (event) => {
    inputTask(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("A name was submitted: " + task);
    event.preventDefault();
  };
  
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="standard-basic"
        label="Task"
        value={task}
        onChange={handleTaskChange}
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