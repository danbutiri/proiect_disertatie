import React from 'react';
import './Grades.scss';
import GradeItem from './GradeItem';

let grades = [{
  nota: 9,
  test_id: {
    id: '1233',
    name: 'Test 1 POO'
  },
  user_id: '1',
  raspuns: [0,3,2,1],
  created_at: '12-07-2020'
},
{
  nota: 7,
  test_id: {
    id: '1232',
    name: 'Test 2 POO'
  },
  user_id: '1',
  raspuns: [0,0,2,1,5],
  created_at: '12-07-2020'
}];


function MyGrades(props) {

  return (
    <div className="Grades">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Notele mele yeeey
      </div>

      <br/><br/>

      {grades.map( element => 
      <>
        <GradeItem grade={element}/>
        <br/>
      </>
      )}


    </div>
  );
  
}

export default MyGrades;
