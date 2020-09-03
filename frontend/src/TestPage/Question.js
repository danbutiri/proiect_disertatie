import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './RadioButtonsGroup';

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
    maxHeight: false
  }
});

export default function Question(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.question.enunt}
          </Typography>
          <br/>

          <RadioButtonsGroup answers={props.question.raspunsuri}/>

        </CardContent>
    </Card>
  );
}