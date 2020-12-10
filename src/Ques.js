import React from 'react';

import { Typography } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

export default function Ques(props) {
    
  return <div >
      <Typography variant="p">{'Q'}{props.number}{' '}{props.question}</Typography>
      
      <RadioGroup
                name="spacing"
                aria-label="spacing"
                //value={spacing.toString()}
              //  onChange={handleChange}
                row
              >
                {props.options.map((value) => (
                    <div>
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  /></div>
                ))}
              </RadioGroup>
              
      </div>;
}
