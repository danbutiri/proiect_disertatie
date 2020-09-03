import React from 'react';
import './Tests.scss';
import TestItem from './TestItem';

let teste = [
  {
    id: '1233',
    name: 'Test 1 POO',
    available_at: '25-01-2020',
    expires_at: '25-01-2020',
    group: '333CB',
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
    group: '333CB',
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
    group: '333CB',
    enunt: 'ceva',
    prof: {
      firstname: 'X',
      lastname: 'Zulescu'
    }

  }
];



function Tests(props) {

  return (
    <div className="Tests">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Testele mele yeeey
      </div>

      <br/><br/>

      {teste.map( element => 
      <>
        <TestItem test={element}/>
        <br/>
      </>
      )}


    </div>
  );
  
}

export default Tests;
