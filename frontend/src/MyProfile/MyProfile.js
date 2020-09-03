import React, {useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';
import './MyProfile.scss';

import { makeStyles } from '@material-ui/core/styles';
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





function MyProfile(props) {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    oldPassword: '',
    newPassword: '',
    showPasswordOld: false,
    showPasswordNew: false,
  });

  const [myProfile, setMyProfile] = React.useState(null);


  React.useEffect(() => {
    if(localStorage.token != null){
      axios.get(`${process.env.REACT_APP_URL}/users/get_profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(response => {
        setMyProfile(response.data);
      })
      .catch(error => alert("error"));
    }

  }, []);


  const handleChange = (prop) => (event) => {
    setMyProfile({ ...myProfile, [prop]: event.target.value });
    console.log(myProfile);
  };

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  
  const handleClickShowPassword = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  let onClickUpdate = () => {

    let obj = {
      name: myProfile.name,
      surname: myProfile.surname,
      email: myProfile.email
    } 

    axios.put(`${process.env.REACT_APP_URL}/users/update_user/${myProfile._id}`, obj,
      {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
        },
      }
    )
    .then(response => {
      console.log('Successsss!!');
      // de pus un toast de success
    })
    .catch(error => alert("error"));
  };

  
  let onClickChangePassword = () => {
    let obj = {
      username: myProfile.username,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword
    }

    axios.put(`${process.env.REACT_APP_URL}/users/update_password`, obj,
    {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
      console.log(response.data);
      if(response.data != 'failed'){
        localStorage.setItem("token", response.data);
      }
    })
    .catch(error => alert("error"));
  };



  return (
    <div className="MyProfile">

      {myProfile != null ? 
      <>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>Nume</InputLabel>
            <Input onChange={handleChange('surname')} 
            defaultValue={myProfile.surname}/>
          </FormControl>


          <br/>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>Prenume</InputLabel>
            <Input onChange={handleChange('name')} 
            defaultValue={myProfile.name}/>
          </FormControl>

          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>Email</InputLabel>
            <Input onChange={handleChange('email')} 
            defaultValue={myProfile.email}/>
          </FormControl>
        </>
      : ''}

      <br/><br/>
      <Button variant="contained" color="primary" size="large" onClick={onClickUpdate}>
        Update
      </Button>

      <br/>
      {/* parola */}
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Parola veche</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPasswordOld ? 'text' : 'password'}
          value={values.oldPassword}
          onChange={handleChangePassword('oldPassword')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword('showPasswordOld')}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPasswordOld ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Parola noua</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPasswordNew ? 'text' : 'password'}
          value={values.newPassword}
          onChange={handleChangePassword('newPassword')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword('showPasswordNew')}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPasswordNew ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <br/><br/>
      <Button variant="contained" color="primary" size="large" onClick={onClickChangePassword}>
        Change Password
      </Button>

    </div>
  );
}

export default MyProfile;
