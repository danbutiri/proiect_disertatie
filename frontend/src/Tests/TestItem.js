import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 2000,
  },
  media: {
    height: 140,
  },
});

export default withRouter(function TestItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.test.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {props.test.prof.firstname} {" "}
            {props.test.prof.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.test.enunt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={() => {props.history.push(props.match.path + "/" + props.test.id)}}>
          Start
        </Button>
      </CardActions>
    </Card>
  );
})