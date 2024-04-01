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
import PlantIcon from "@mui/icons-material/ParkRounded";
import GraphFunction from "./GraphFunction";
//import '../../static/css/index.css';s

// Global vars
// let cameraHref = (window.location.href).concat("/cameraview");
let cameraHref = "/plant1/cameraview";
let plant3Href = (window.location.href).concat("/plant3");

export default class PlantPage3 extends Component{
    constructor(props){
        super(props);
    }

    render() {
	var plant3_temp;
	var plant3_moisture;
	var plant3_date_planted;
	var plant3_latest_reading;
        return (
	$(document).ready(function() {
		$.ajax({
			url:'/completeData',
			type:'GET',
			success: function(response) {
			console.log(response);
			var num_data_entries = response.length;
			console.log(num_data_entries);
			plant3_temp = response[num_data_entries - 1].soil_temp3;
			plant3_moisture = response[num_data_entries -1].soil_moisture3;
			plant3_date_planted = response[0].date;
			plant3_latest_reading = response[num_data_entries -1].time;
			console.log("current plant3 temp: " + plant3_temp);		
			console.log("current plant3 humidity: " + plant3_moisture);
			$('#plant3_temp').text(plant3_temp + " " + "°C");	
			$('#plant3_moisture').text(plant3_moisture + " " + "%");
			$('#plant3_date_planted').text(plant3_date_planted);
			$('#plant3_latest_reading').text(plant3_latest_reading);
			response_array = response;
			console.log(response_array);
				}

			});
		}),
          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative", overflow:"scroll"}}>
            {/* Solid Rectangle at top of page*/}
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
                <span>&nbsp;&nbsp;</span>
              </Grid>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:30}}> Plot 3 </b>
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
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>Last Reading</b>
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
                <Button id="plant3_temp" disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#A3BD8B',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}><br /> <br />  <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  tempVar </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button id="plant3_moisture" disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}><br /> <br /> <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  moistVar </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button id="plant3_latest_reading" disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}><br /> <br /> <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br /> waterVar </b>
                </Button>
              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                <Button id="plant3_date_planted" disabled="true" style={{width:"20vw", height:"25vh",backgroundColor: '#5F815F',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                  <b style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}> <br /> <br />  <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 0 }}></div> <br />  timeVar </b>
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

                {/* Link to graph page SOIL TEMPERATURE*/}
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>

                  <Link
                  // to = "http://127.0.0.1:8000/graph"
                  to='/graph/'
                  onClick={() => {localStorage.setItem('filename', 'Soil_Temperature3.csv')
                  localStorage.setItem('title', 'Soil Temperature for Plot 3')
                  localStorage.setItem('page', plant3Href)}}
                  style={{ textDecoration: 'none', color: 'inherit' }}

                  >
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>See Data</p>

                  </Link>
                </Button>





              </Grid>
              <Grid item xs={false} align ="left">
                <p style={{width:"4vw"}}>&nbsp;</p>
              </Grid>
              <Grid item xs={false} align ="left">
                {/* Link to graph page SOIL TEMPERATURE*/}
                <Button style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>

                  <Link
                  // to = "http://127.0.0.1:8000/graph"
                  to='/graph/'
                  onClick={() => {localStorage.setItem('filename', 'Soil_Moisture3.csv')
                  localStorage.setItem('title', 'Soil Moisture for Plot 3')
                  localStorage.setItem('page', plant3Href)}}
                  style={{ textDecoration: 'none', color: 'inherit' }}

                  >
                  <p style={{width:"20vw", color:"black", font:"Oxygen", fontSize:20}}>See Data</p>

                  </Link>
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


            {/* Empty Lines for page spacing */}
            <Grid>
            <span>&nbsp;&nbsp;</span>
            </Grid>


             {/* Solid Rectangle at bottom of page*/}
            <div style={{position:"absolute", bottom:0, display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>


          </body>
        );
    }
}