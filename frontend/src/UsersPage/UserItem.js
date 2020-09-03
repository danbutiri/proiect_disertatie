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


  return (
    <li class="list-group-item" key={props.user.id}>

      <div className="UserItem">

        <div className="ListColumn">
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

        <div className="ListColumn">
          <Typography variant="body1" color="textSecondary" component="p">
            {props.user.class_u}
          </Typography>

          {//+data creare cont
          }
        </div>
      </div>

    </li>
  );
}
