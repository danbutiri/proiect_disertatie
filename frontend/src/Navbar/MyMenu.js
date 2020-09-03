import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";
import './MyMenu.scss';

export default function MyMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className='MyMenu'>
      <button type="button" class="btn btn-light btn-lg" onClick={handleClick}>
        <UserIcon />
        {props.profile.username}
        ({props.profile.role})
      </button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/profile`}>
            Profile
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Button variant="contained" color="secondary" onClick={handleClickLogout}>
            <LogoutIcon /> {"  "}
              Deconectare
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
