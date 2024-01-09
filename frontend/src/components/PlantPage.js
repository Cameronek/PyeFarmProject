import React, { Component} from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl"
import Link from "react-router-dom";
import Radio from "@mui/material/Radio";;
import RadioGroup from "@mui/material/RadioGroup";
import FormcontrolLabel from "@mui/material/FormControlLabel";
import HomeIcon from "@mui/icons-material/Home";
//import '../../static/css/index.css';

export default class PlantPage extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
              <Grid item xs={6} align ="center">
                <IconButton roboto-label="home" style={{color:'black'}}>
                  <HomeIcon/>
                </IconButton>
              </Grid>
            </Grid>
        );
    }
}