import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import PencilIcon from '@material-ui/icons/Create';
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
          
          <Typography variant="h6"  component="p">
            Grupe: {props.test.available_to === 'all' ? process.env.REACT_APP_GRUPE : props.test.available_to}
          </Typography>

          <br/>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.test.enunt}
          </Typography>

          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
            Valabil de la: {props.test.available_at}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            Expira la: {props.test.expires_at}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" variant="contained" color="default" className={classes.button} startIcon={<PencilIcon />}
        onClick={() => {props.history.push(props.match.path + "/" + props.test.id)}}>
          Modify
        </Button>

        <Button size="small" variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </CardActions>

      <br/>
    </Card>
  );
})