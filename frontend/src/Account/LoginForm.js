import React, {useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';


import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '50ch',
  },
}));





function LoginForm(props) {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  let onClickLogin = () => {

    let obj = {
      username: values.username,
      password: values.password
    } 

    axios.post(`${process.env.REACT_APP_URL}/users/login`, obj)
    .then(response => {
      localStorage.setItem("token", response.data);
      window.location.reload(false);
      
    })
    .catch(error => alert("error"));
  };



  return (
    <div className="LoginForm">

      <br/>

      <form noValidate autoComplete="off">
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
        <Input onChange={handleChange('username')}/>
        </FormControl>
      </form>


      <br/>

      {/* parola */}
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

          <br/><br/><br/>
      <Button variant="contained" color="primary" size="large" onClick={onClickLogin}>
        Login
      </Button>

      
    </div>
  );
}

export default LoginForm;
