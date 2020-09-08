import React from 'react';
import './CreatedTests.scss';
import TestItem from './TestItem';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/Add';
import axios from 'axios';


let teste = [
  {
    id: '1233',
    name: 'Test 1 POO',
    available_at: '25-01-2020',
    expires_at: '26-01-2020',
    available_to: 'all',
    enunt: 'Cel mai greu test. O singura varianta de raspuns. Testul valoreaza 2 puncte din nota finala',
    prof: {
      firstname: 'X',
      lastname: 'Xulescu'
    }

  },
  {
    id: '1234',
    name: 'Test 2 POO',
    available_at: '25-01-2020',
    expires_at: '25-01-2020',
    available_to: '333CB',
    enunt: 'ceva',
    prof: {
      firstname: 'X',
      lastname: 'Yulescu'
    }

  },
  {
    id: '1235',
    name: 'Test 3 POO',
    available_at: '25-01-2020',
    expires_at: '25-01-2020',
    available_to: '333CB',
    enunt: 'ceva',
    prof: {
      firstname: 'X',
      lastname: 'Zulescu'
    }

  }
];



function CreatedTests(props) {

  const [myTests, setMyTests] = React.useState(teste);

  /*
    React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/users/get_users_by_role?role=student`, {
      headers: {
          Authorization: `Bearer ${localStorage.token}`,
      },
    })
    .then(response => {
      setMyTests(response.data);
    })
    .catch(error => alert("error"));
  }, []);
  */




  return (
    <div className="CreatedTests">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Hai sa omoram niste studenti yeey
      </div>

      <br/><br/>
      <Button  size="large" variant="contained" color="primary" startIcon={<PlusIcon />}
      onClick={() => {props.history.push("newtest")}}>
            New Test
      </Button>

      <br/><br/>

      {teste.map( element => 
      <>
        <TestItem test={element}/>
        <br/>
      </>
      )}

      <br/><br/><br/><br/>


    </div>
  );
  
}

export default CreatedTests;
