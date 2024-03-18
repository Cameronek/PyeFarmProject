import React, { Component} from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl"
import {Link } from "react-router-dom";
import Radio from "@mui/material/Radio";;
import RadioGroup from "@mui/material/RadioGroup";
import FormcontrolLabel from "@mui/material/FormControlLabel";
import HomeIcon from "@mui/icons-material/HomeRounded";
import CameraIcon from "@mui/icons-material/CameraAltRounded";
import PlantIcon from "@mui/icons-material/ParkRounded";
//import '../../static/css/index.css';s

// Global vars
let cameraHref = (window.location.href).concat("/cameraview");

export default class PlantPage extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative"}}>
            {/* Solid Rectangle at top of page*/}
            {/* TODO: Change to be a grid of 4 different colored rectangles*/}
            <div style={{display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>
            
            {/* MUI Home Icon and Camera Icon*/}
            {/* TODO: Add links to homepage and to camera page*/}
            <Grid container spacing={0.75}>
              {/* <Grid item xs={1} align ="left"></Grid> */}
              <Grid item xs={false} align ="left">
                <Link to="/">
                  <IconButton roboto-label="home" style={{color:'black'}}>
                    <HomeIcon style={{fontSize:60}}/>
                  </IconButton>
                </Link>
              </Grid>
              <Grid item xs={false} align ="center">
                <Link to={cameraHref}>
                  <IconButton roboto-label="home" style={{color:'black'}}>
                    <CameraIcon style={{fontSize:60}}/>
                  </IconButton>
                </Link>
              </Grid>
            </Grid>

            {/* Plant Icon and Plant Name*/}
            <Grid>
              <Grid item xs={false} align="center">
                <PlantIcon style={{fontSize:90, fill: '#68AC67'}}></PlantIcon>
              </Grid>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:40}}> Plot 1 </b>
              </Grid>
              <Grid item xs={false} align="center">
                <span>&nbsp;&nbsp;</span>
              </Grid>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:30}}> Strawberries </b>
                <Button style={{width:"10vw", height:"7vh", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <p style={{width:"15vw", color:"black", font:"Oxygen", fontSize:12}}>Change Name</p>
                </Button>
              </Grid>
            </Grid>

            {/* Empty Lines for page spacing (probably a better way to do this) */}
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            {/*Headings of each parameter*/}
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", backgroundColor: '#A3BD8B',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Temperature</b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Moisture</b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Last Watered</b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", backgroundColor: '#5F815F',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Date Planted</b>
                </Button>
              </Grid>
            </Grid>

            {/* Empty Lines for page spacing (probably a better way to do this) */}
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            {/* Data Readings to be imported from DB */}
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#A3BD8B',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}> 20.4°C <br /> <br />  <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  Celcius </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}> 31.6% <br /> <br /> <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  Percent </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}> 0, 25 <br /> <br /> <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br /> Hours, Minutes </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#5F815F',  border: "3px solid black", borderRadius:"5px"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}> 2024-03-16 <br /> <br />  <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  Date </b>
                </Button>
              </Grid>
            </Grid>
            

            {/* Empty Lines for page spacing (probably a better way to do this) */}
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>

            {/* Buttons to see variable data/graphs */}
            {/* TODO: Create Routing to these pages */}
            
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>See Data</p>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>See Data</p>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Reset</p>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Reset</p>
                </Button>
              </Grid>
            </Grid>

            <div style={{position:"absolute", bottom:0, display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>


          </body>
        );
    }
}