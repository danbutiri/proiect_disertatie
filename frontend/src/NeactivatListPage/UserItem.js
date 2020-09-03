import React from 'react';
import './UserItem.scss'
import Typography from '@material-ui/core/Typography';
import PencilIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
  },
});



export default function UserItem(props) {
  const classes = useStyles();

  const [rol, setRol] = React.useState(props.user.role);
  const [grupa, setGrupa] = React.useState(props.user.class_u);

  let grupe = process.env.REACT_APP_GRUPE.split(" ");
  let rols = process.env.REACT_APP_ROL.split(" ");

  const handleChangeRole = (event) => {
    console.log(props.user.surname);
    setRol(event.target.value);
    props.updateUser({
      id: props.user.id,
      username: props.user.username,
      password: props.user.password,
      role: event.target.value,
      name: props.user.name,
      surname: props.user.surname,
      class_u: props.user.class_u,
      email: props.user.email
    });
  };

  const handleChangeGrupa = (event) => {
    setGrupa(event.target.value);
    props.updateUser({
      id: props.user.id,
      username: props.user.username,
      password: props.user.password,
      role:  props.user.role,
      name: props.user.name,
      surname: props.user.surname,
      class_u: event.target.value,
      email: props.user.email
    });
  };

  const onClickActivate = (id) => {

    props.removeUser(id);
    //+trimite catre server
    setRol();
    setGrupa();
  };


  return (
    <li class="list-group-item" key={props.user.id}>

      <div className="UserItem">

        <div className="ListLeft">
          <Typography variant="h6" component="h2">
            {props.user.name + " " + props.user.surname}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.user.username}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Email: {props.user.email}
          </Typography>
        </div>

        <div className="ListMiddle">
          <InputLabel id="demo-simple-select-label">Rol</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          value={rol}
          onChange={handleChangeRole}
          >
            {rols.map(Element => 
              <MenuItem value={Element}> {Element} </MenuItem>
            )}
          </Select>
        </div>

        <div className="ListMiddle">
          {rol === 'student' ?
            <>
              <InputLabel id="demo-simple-select-label">Grupa</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={grupa}
              onChange={handleChangeGrupa}
              >
                {grupe.map(Element => 
                  <MenuItem value={Element}> {Element} </MenuItem>
                )}
              </Select>
            </> : ''}
        </div>

        <div className="ListRight">
          <Button size="small" variant="contained" color="primary" className={classes.button} startIcon={<PencilIcon />} onClick={() => onClickActivate(props.user.id)}>
            Activeaza
          </Button>
        </div>
      </div>
    </li>
      


  );
}
