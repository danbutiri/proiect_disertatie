import React from 'react';
import './UsersPage.scss';
import UserItem from './UserItem';
import axios from 'axios';

let mystudents = [
  {id:'1201', username: "anaradu", password: "xxx", role: 'student',name: "Radu",surname: "Ana", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1202', username: "mariadd", password: "xxx", role: 'student',name: "Dobrescu",surname: "Maria", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1203', username: "cosminee", password: "xxx", role: 'student',name: "Ene",surname: "Cosmin-Gabriel", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1204', username: "ana.petre", password: "xxx", role: 'student',name: "Petrescu",surname: "Ana", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1205', username: "fi_ru", password: "xxx", role: 'student',name: "George",surname: "Florina", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1206', username: "cezu99", password: "xxx", role: 'student',name: "Chinta",surname: "Sebi-Cezar", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1207', username: "ana45", password: "xxx", role: 'student',name: "Preda",surname: "Dorana", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1208', username: "bb98", password: "xxx", role: 'student',name: "Bubici",surname: "Lena", class_u: '343C1',email: "ana@ceva.com"},
  {id:'1209', username: "alexandru_zvinca", password: "xxx", role: 'student',name: "Zvina",surname: "Radu-Alexandru-Ion", class_u: '343C1',email: "ana@ceva.com"},
  {id:'12010', username: "dp98elena", password: "xxx", role: 'student',name: "Cornea",surname: "Daniela-Elena", class_u: '343C1',email: "ana@ceva.com"},

];


let myprofs = [
  {id:'1234', username: "ganea_mihaieugen", password: "xxx", role: 'profesor',name: "Ganea",surname: "Mihai-Eugen", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "anadobrici", password: "xxx", role: 'profesor',name: "Dobrici-Enache",surname: "Ana", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "laura67", password: "xxx", role: 'profesor',name: "Cucu",surname: "Laura", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "ana", password: "xxx", role: 'profesor',name: "Preda",surname: "Ana", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "anav90", password: "xxx", role: 'profesor',name: "Vasile",surname: "Ana", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "ana", password: "xxx", role: 'profesor',name: "Preda",surname: "Ana", class_u: '',email: "ana@ceva.com"},
  {id:'1234', username: "ana.pop.2311", password: "xxx", role: 'profesor',name: "Pop",surname: "Ana", class_u: '',email: "ana@ceva.com"},
  ];


function UsersPage(props) {

  const [profs, setProfs] = React.useState([]);
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/users/get_users_by_role?role=student`, {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
      setStudents(response.data);
    })
    .catch(error => alert("error"));

    axios.get(`${process.env.REACT_APP_URL}/users/get_users_by_role?role=profesor`, {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
      setProfs(response.data);
    })
    .catch(error => alert("error"));

  }, []);


  return (
    <div className="UsersPage">

      <br/><br/><br/>

      <div className="UsersColumn">
        <div className='Pagetitle'>
          Studenti
        </div>
        <br/>
        <ul class="list-group">
          {students.map(Element =>
            <UserItem user={Element}/>
            )
          }
        </ul>
      </div>

      <div className="UsersColumn">
        <div className='Pagetitle'>
          Profesori
        </div>
        <br/>
        <ul class="list-group">
        {profs.map(Element =>
          <UserItem user={Element}/>
          )
        }
        </ul>
      </div>


    </div>
  );
  
}

export default UsersPage;
