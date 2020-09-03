import React from 'react';
import './NeactivatListPage.scss';
import UserItem from './UserItem';


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

  const [users, setUsers] = React.useState(myusers);

  let updateUser=(user)=> {
    setUsers(users.map( Element => {
      return Element.id === user.id ? user : Element
    }))
  }

  let removeUser=(id)=> {
    setUsers(users.filter(Element => Element.id !== id));
  }

  return (
    <div className="NeactivatListPage">

      <br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Niste fraieri care s-au inscris sa inventeze/dea teste
      </div>

      <br/><br/>
      <ul class="list-group">
        {users.map(Element =>
          <UserItem user={Element} updateUser={updateUser} removeUser={removeUser}/>
          )
        }
      </ul>


    </div>
  );
  
}

export default NeactivatListPage;
