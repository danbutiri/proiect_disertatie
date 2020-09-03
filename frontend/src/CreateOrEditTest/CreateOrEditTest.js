import React,{useState} from 'react';
import './CreateOrEditTest.scss';
import Question from './Question';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DateInput from './DateInput';


let initialQuestions = [
  {
    id: '01233',
    enunt: 'Care sunt principiile POO',
    raspuns_corect: 3,
    test_id: '1233',
    raspunsuri: ['Ceva1', 'Ceva2', 'Ceva3', 'Ceva4'],
    isNew: false
  },
  {
    id: '01234',
    enunt: 'Care sunt principiile.....',
    raspuns_corect: 2,
    test_id: '1233',
    raspunsuri: ['Ceva122', 'Ceva22', 'Ceva32', 'Ceva42'],
    isNew: false
  },
  {
    id: '01235',
    enunt: 'Bla bla bla',
    raspuns_corect: 3,
    test_id: '1233',
    raspunsuri: ['Altceva1', 'Altceva4', 'Altceva3', 'Altceva2'],
    isNew: false
  },
  {
    id: '01236',
    enunt: 'cevaaa',
    raspuns_corect: 5,
    test_id: '1233',  
    raspunsuri: ['Ceva1', 'Altceva1', 'Ceva3', 'Altceva2'],
    isNew: false
  }

];



function CreateOrEditTest(props) {

  const [questions, setQuestions] = useState(initialQuestions);
  const [dataStart, setDataStart] = useState(new Date('2014-08-18T21:11:54'));
  const [dataEnd, setDataEnd] = useState(new Date('2014-08-18T21:11:54'));

  let handleAdd=()=> {
    let question=  {
      id: Math.random(),
      enunt: '',
      raspuns_corect: -1,
      test_id: '1233',  ///asta de modificat sa nu fie hardcodat ci al testului curent... props.test_id
      raspunsuri: [],
      isNew: true
    }
	  setQuestions([...questions, question]);
  }

  let handleRemove=(id)=> {
	  setQuestions(questions.filter(Element => Element.id !== id));
  }

  let updateQuestion=(question)=> {
    setQuestions(questions.map( Element => {
      return Element.id === question.id ? question : Element
    }))
  }

  let updateQuestionRemove=(id, index)=> {
    setQuestions(questions.map( Element => {
      if(Element.id === id){
        if(Element.raspuns_corect === index){
          Element.raspuns_corect = -1;
        } else if(Element.raspuns_corect > index){
          Element.raspuns_corect--;
        }
        Element.raspunsuri.splice(index, 1);
      }
      return Element;
    }))
  }

  return (
    <div className="CreateOrEditTest">

      <br/><br/><br/><br/><br/><br/><br/><br/>
      <div className='Pagetitle'>
        Hai sa omoram niste studenti yeey


      </div>


      <br/><br/>
      {questions.map( element => 
      <>
        <Question question={element} updateQuestion={updateQuestion} updateQuestionRemove={updateQuestionRemove} handleRemove={handleRemove}/>
        <br/>
      </>
      )}

      <br/>
      
      <Button  size="medium" variant="contained" color="default" startIcon={<PlusIcon />}
      onClick={handleAdd}>
            Add Question
      </Button>

      <br/><br/>
      <div className="DateContainter">
        <DateInput label="Data activare test" setData={setDataStart}/>
      </div>
      <div className="DateContainter">
        <DateInput label="Data dezactivare test" setData={setDataEnd}/>
      </div>

      <br/><br/><br/>
      <Button  size="large" variant="contained" color="primary" startIcon={<SaveIcon />}
      onClick={() => {}}>
            Save
      </Button>

      <br/><br/><br/><br/><br/><br/>


    </div>
  );
  
}

export default CreateOrEditTest;
