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
import HomeIcon from "@mui/icons-material/HomeRounded";
import CameraIcon from "@mui/icons-material/CameraAltRounded";
//import '../../static/css/index.css';

export default class PlantPage extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container spacing={0.75}>
              <Grid item xs={1} align ="center"></Grid>
              <Grid item xs={5} align ="center">
                <IconButton roboto-label="home" style={{color:'black'}}>
                  <HomeIcon style={{fontSize:60}}/>
                </IconButton>
              </Grid>
              <Grid item xs={5} align ="center">
                <IconButton roboto-label="home" style={{color:'black'}}>
                  <CameraIcon style={{fontSize:60}}/>
                </IconButton>
              </Grid>
            </Grid>
        );
    }
}