import React from 'react';
import Question from './Question';
import './TestPage.scss';
import Button from '@material-ui/core/Button';


let questions = [
  {
    id: '01233',
    enunt: 'Care sunt principiile POO',
    raspuns_corect: 3,
    test_id: '1233',
    raspunsuri: ['Ceva1', 'Ceva2', 'Ceva3', 'Ceva4']
  },
  {
    id: '01234',
    enunt: 'Care sunt principiile.....',
    raspuns_corect: 2,
    test_id: '1233',
    raspunsuri: ['Ceva122', 'Ceva22', 'Ceva32', 'Ceva42']
  },
  {
    id: '01235',
    enunt: 'Bla bla bla',
    raspuns_corect: 3,
    test_id: '1233',
    raspunsuri: ['Altceva1', 'Altceva4', 'Altceva3', 'Altceva2']
  },
  {
    id: '01236',
    enunt: 'cevaaa',
    raspuns_corect: 5,
    test_id: '1233',
    raspunsuri: ['Ceva1', 'Altceva1', 'Ceva3', 'Altceva2']
  }

];



function TestPage(props) {

  return (
    <div className="TestPage">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Titlul testului...momentan gol
      </div>

      <br/><br/>

      {questions.map( element => 
      <>
        <Question question={element}/>
        <br/>
      </>
      )}

      <Button size="large" color="primary" variant="contained">
        Finish Test
      </Button>

    <br/><br/><br/><br/><br/><br/>

    </div>
  );
  
}

export default TestPage;
