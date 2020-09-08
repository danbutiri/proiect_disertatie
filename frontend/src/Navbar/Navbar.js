import React from 'react';
import './Navbar.scss';
import axios from 'axios';
import MyMenu from './MyMenu';


import {Link} from "react-router-dom";


function Navbar(props) {

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

  const setProfileLogout = () => {
    setMyProfile(null);
  };


  return (
    <div className="Navbar">

        <nav class="navbar fixed-top scrolling-navbar navbar-expand-lg">
            <div className="container">

            
              <div className="Logo">
                Quizy
              </div>

              <div className='btnContainer'>

                {myProfile != null && myProfile.role == 'admin' ?
                  <Link to={`/activateusers`}>
                    <button type="button" class="btn btn-light btn-lg">
                      Neactivati
                    </button>
                  </Link>
                : myProfile != null && myProfile.role == 'profesor' ?
                  <Link to={`/createdtests`}>
                  <button type="button" class="btn btn-light btn-lg">
                    Teste
                  </button>
                  </Link>
                : ''
                }


                {myProfile != null && myProfile.role == 'admin' ?
                  <Link to={`/users`}>
                    <button type="button" class="btn btn-light btn-lg">
                      Useri
                    </button>
                  </Link>
                : myProfile != null && myProfile.role == 'profesor' ?
                  <Link to={`/catalog`}>
                  <button type="button" class="btn btn-light btn-lg">
                    Catalog
                  </button>
                  </Link>
                : ''
                }

                {myProfile != null ? 
                <MyMenu profile={myProfile} setProfileLogout={setProfileLogout}/>
                : 
                <Link to={`/login`}>
                  <button type="button" class="btn btn-light btn-lg">
                    Log in
                  </button>
                </Link>
                }
              </div>



            </div>
        </nav>
    </div>
    

  );
  
}

export default Navbar;
