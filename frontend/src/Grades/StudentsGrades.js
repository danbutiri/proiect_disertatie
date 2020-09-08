import React from 'react';
import './Grades.scss';
import GradeItem2 from './GradeItem2';

let grades = [{
  nota: 9,
  test_id: '101',
  user_id: {
    name: "Vasile",
    surname: "Blaga",
    class_u: "333CB"
  },
  raspuns: [0,3,2,1],
  created_at: '12-07-2020'
},
{
  nota: 7,
  test_id: '101',
  user_id: {
    name: "Ana",
    surname: "Enescu",
    class_u: "332CB"
  },
  raspuns: [0,0,2,1],
  created_at: '12-07-2020'
}];


function StudentsGrades(props) {
  

  return (
    <div className="Grades">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Notele fraierilor la testul X
      </div>

      <br/><br/>

      {grades.map( element => 
      <>
        <GradeItem2 grade={element}/>
        <br/>
      </>
      )}


    </div>
  );
  
}

export default StudentsGrades;
