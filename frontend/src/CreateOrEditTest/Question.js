import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './RadioButtonsGroup';
import PlusIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Check';
import PencilIcon from '@material-ui/icons/Create';

import './QuestionHeader.scss';


const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    maxHeight: false
  }
});

export default function Question(props) {
  const classes = useStyles();


  const [newOption, setNewOption] = React.useState("");
  const [enteringNewQuestion, setEnteringNewQuestion] = React.useState(false);
  const [enteringEnunt, setEnteringEnunt] = React.useState(false);
  const [newEnunt, setNewEnunt] = React.useState(props.question.enunt);
  

  const handleChangeInput = (event) => {
    setNewOption(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeEnunt = (event) => {
    setNewEnunt(event.target.value);
    console.log(event.target.value);
  };

  const onCLickEditEnunt = () => {
    setEnteringEnunt(true);
  };

  const onCLickSaveEnunt = () => {
    setEnteringEnunt(false);
    props.updateQuestion({
      id: props.question.id,
      enunt: newEnunt,
      raspuns_corect: props.question.raspuns_corect,
      test_id: props.question.test_id,
      raspunsuri: props.question.raspunsuri
    });
  };

  const setRaspuns = (index) => {
    props.updateQuestion({
      id: props.question.id,
      enunt: props.question.enunt,
      raspuns_corect: index,
      test_id: props.question.test_id,
      raspunsuri: props.question.raspunsuri
    });
  };

  const onCLickNewVarianta = () => {
    setEnteringNewQuestion(true);
  };

  const onCLickSaveVarianta = () => {
    setEnteringNewQuestion(false);
    props.updateQuestion({
      id: props.question.id,
      enunt: props.question.enunt,
      raspuns_corect: props.question.raspuns_corect,
      test_id: props.question.test_id,
      raspunsuri: [...props.question.raspunsuri, newOption]
    });
    console.log(props.question.raspuns_corect);
  };

  const onCLickRemoveVarianta = (index) => {
    props.updateQuestionRemove(props.question.id, index);
  };


  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">

          <div className="QuestionHeader">
              <div className="left">
                {enteringEnunt ?
                  <>
                  <br/>
                  <FormControl fullWidth className={classes.margin}>
                    <TextField fullwidth id="standard-basic" label="Enunt" onChange={handleChangeEnunt} defaultValue={props.question.enunt}/>
                  </FormControl>
                  
                  <IconButton aria-label="save" color="primary" onClick={onCLickSaveEnunt}>
                          <SaveIcon fontSize="large"/>
                  </IconButton>
                  </>
                : props.question.enunt}

              </div>      
              <div className="right">
                <IconButton aria-label="modify" color="primary" onClick={onCLickEditEnunt}>
                      <PencilIcon fontSize="medium"/>
                </IconButton>
                <IconButton aria-label="delete" color="secondary" onClick={() => props.handleRemove(props.question.id)}>
                      <DeleteIcon fontSize="large"/>
                </IconButton>
              </div>
            </div>

          </Typography>


          <RadioButtonsGroup answers={props.question.raspunsuri} onCLickRemoveVarianta={onCLickRemoveVarianta} setRaspuns={setRaspuns}/>

          {enteringNewQuestion ? 
            <>
              <br/>
              <TextField id="standard-basic" label="Varianta de raspuns" onChange={handleChangeInput}/>

              <IconButton aria-label="delete" color="primary" onClick={onCLickSaveVarianta}>
                      <SaveIcon/>
              </IconButton>
            </> : ""}

          <br/><br/>
          <Button  size="small" variant="contained" color="default" onClick={onCLickNewVarianta} startIcon={<PlusIcon />}>
                Add varianta
          </Button>

          <br/><br/>


        </CardContent>
    </Card>
  );
}