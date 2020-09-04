import React from 'react';
import './NeactivatListPage.scss';
import UserItem from './UserItem';
import axios from 'axios';


let myusers = [
{
  id:'1234',
  username: "ana",
  password: "xxx",
  role: 'neactivat',
  name: "Preda",
  surname: "Ana",
  class_u: '',
  email: "ana@ceva.com"
},
{
  id:'1235',
  username: "biana",
  password: "xxx",
  role: 'neactivat',
  name: "Predescu",
  surname: "Biana",
  class_u: '',
  email: "ana@ceva.com"
},{
  id:'1236',
  username: "trana",
  password: "xxx",
  role: 'neactivat',
  name: "Predoiu",
  surname: "Trana",
  class_u: '',
  email: "ana@ceva.com"
},{
  id:'1237',
  username: "dana",
  password: "xxx",
  role: 'neactivat',
  name: "Predeanu",
  surname: "Dana",
  class_u: '',
  email: "ana@ceva.com"
},{
  id:'1238',
  username: "dana",
  password: "xxx",
  role: 'neactivat',
  name: "Predeanu",
  surname: "Dana",
  class_u: '',
  email: "ana@ceva.com"
},{
  id:'1239',
  username: "dana",
  password: "xxx",
  role: 'neactivat',
  name: "Predeanu",
  surname: "Dana",
  class_u: '',
  email: "ana@ceva.com"
}
];

function NeactivatListPage(props) {

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/users/get_users_by_role?role=neactivat`, {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => alert("error"));

  }, []);


  let updateUser=(user)=> {
    setUsers(users.map( Element => {
      return Element._id === user._id ? user : Element
    }))
  }

  let removeUser=(id)=> {

    //transmite modificarea catre backend, adica acest user devine din neactivat -> student sau prof
    let myuser = users.filter(Element => Element._id === id)[0];
    let obj = {
      role: myuser.role,
      class_u: myuser.class_u
    };
    axios.put(`${process.env.REACT_APP_URL}/users/update_admin/${myuser._id}`, obj,
    {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
    })
    .catch(error => alert("error"));


    // scoate din starea curenta (lista de afisat)
    setUsers(users.filter(Element => Element._id !== id));
  }

  return (
    <div className="NeactivatListPage">

      <br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Niste fraieri care s-au inscris sa inventeze/dea teste
      </div>

      <br/><br/>

      <ul class="list-group">
        {users.length > 0 ? users.map(Element =>
          { 
            return <UserItem user={Element} updateUser={updateUser} removeUser={removeUser}/>
          }) : ''
        }
      </ul>

    </div>
  );
  
}

export default NeactivatListPage;
