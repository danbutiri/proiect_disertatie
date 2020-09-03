import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './RadioButtonsGroup.scss';



export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState();
  // value se va transforma intr-un index al raspunsului corect

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setRaspuns(props.answers.indexOf(event.target.value));
  };


  return (
    <FormControl component="fieldset">
      <RadioGroup value={value} onChange={handleChange}>
        {props.answers.map( Element => 
          <div className="radioContainer">
            <div className="left">
              <FormControlLabel value={Element} control={<Radio color="primary"/>} label={Element} />
            </div>


            <div className="right">
                <IconButton aria-label="delete" onClick={() => props.onCLickRemoveVarianta(props.answers.indexOf(Element))}>
                  <DeleteIcon />
                </IconButton>
            </div>

          </div>
            
        )}

      </RadioGroup>
    </FormControl>
  );
}