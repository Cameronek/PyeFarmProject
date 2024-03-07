import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid, Button, Typography} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {Link} from 'react-router-dom';

// TODO: Change these options to be taken from a database API
const options = [
{ value: 'Plot 1', route: "/plant"},
{ value: 'Plot 2', route: "/plant/cameraview"},
{ value: 'Plot 3', route: "/plant"},
{ value: 'Plot 4', route: "/plant"},
{ value: 'Plot 5', route: "/plant"},
{ value: 'Plot 6', route: "/plant"},

];

// Depending on how SQL DB is set up, routes may be separated from value
const routes = [
    {
    }
]

// Creating a theme to allow for styling color of FormControl Componene
let theme = createTheme({
  });

theme = createTheme(theme, {

palette: {
    green1: theme.palette.augmentColor({
    color: {
        main: '#68AC67',
    },
    name: 'green1',
    }),
},
});

export function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const [isOptionSelected, setIsOptionSelected] = useState(false);

  // TODO: Changed this to, onclick, navigate to appropriate page
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOptionSelected(true);
  };

  return (


    <Grid container spacing={2}>
    <Grid item xs={false} align ="center">

    <ThemeProvider theme={theme}>
    <div style={{width: "50vw"}}>
      <FormControl fullWidth="true" variant='standard'>
        <InputLabel color='green1'>Select Plant Plot</InputLabel>
          <Select color='green1' labelId="Select Plant Plot" id="Select Plant Plot" value={selectedOption} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}> {option.value}
            </MenuItem>
          ))}
         </Select>
      </FormControl>


    </div>
    </ThemeProvider>
    </Grid>

    <Grid item xs={false} align ="center">
      <Button style={{backgroundColor: '#68AC67',  border: "3px solid black", borderRadius:"5px", }}variant="contained" disabled={!isOptionSelected} component={Link} to={options.find(option => option.value === selectedOption)?.route}>
        <Typography sx={{ wordBreak: "break-word", width:"10vw", color:"black", font:"Oxygen", fontSize:15,}}> Go To Plant Plot </Typography>
      </Button>
    </Grid>

    </Grid>

  );
}

export default SelectComponent;