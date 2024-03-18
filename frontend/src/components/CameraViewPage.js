import React, { Component} from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import {Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormcontrolLabel from "@mui/material/FormControlLabel";
import HomeIcon from "@mui/icons-material/HomeRounded";
import CameraIcon from "@mui/icons-material/CameraAltRounded";

import Greenhouse from "../../static/images/greenhouse.jpg";

export default class CameraViewPage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative"}}>

            {/* Solid Rectangle at top of page*/}
            <div style={{display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>
          
            {/* Home Icon */}
            <Grid item xs={false} align ="left">
              <Link to="/">
                <IconButton roboto-label="home" style={{color:'black'}}>
                  <HomeIcon style={{fontSize:60}}/>
                </IconButton>
              </Link>
            </Grid>

            {/* CameraIcon, Plant Name, Date & Time*/}
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={false} align="center">
                <CameraIcon style={{fontSize:90, fill: 'black'}}></CameraIcon>
              </Grid>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:35}}> Last Picture Taken:  </b>
                <b style={{color:"black", font:"Oxygen", fontSize:30}}> <br/> 2024-03-14, 18:02:03</b>
              </Grid>
            </Grid>

            {/* Page Spacing */}
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            <Grid container justifyContent="center">
              <img style= {{width:"60vw", height:"60vh"}} src={Greenhouse} alt="logo" />
            </Grid>
    
            {/* Solid Rectangle at bottom of page*/}
            <div style={{position:"absolute", bottom:0, display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>


          </body>
          );
    }
}