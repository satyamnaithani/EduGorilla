import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 600,
   // width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export default function Navigation() {
  //const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
      
          <Grid container className={classes.paper}>
            <Grid item>
            <Typography variant="h4">Navigation</Typography>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                //value={spacing.toString()}
              //  onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
          
      
     
    
  );
}
