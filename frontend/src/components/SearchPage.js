import React, { Component} from "react";
import { render } from "react-dom"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {SelectComponent} from './SelectComponent'; 
import GraphFunction from "./GraphFunction";
import { useState } from "react";


// temporary import
import tempPlant from "../../static/images/plant.png"
import Greenhouse from "../../static/images/greenhouse.jpg";



// temporary camera page link
let cameraHref = (window.location.href).concat("/plant/cameraview");

//global variable for response data
var response_array;

export default class SearchPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      showTemperatureGraph: true,
      plotUrls: {
        'Plot 1': '/plant1',
        'Plot 2': '/plant2',
        'Plot 3': '/plant3',
      },
    };

    // Create a ref to store the selected plot locally
    this.selectedPlotRef = React.createRef();
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ showTemperatureGraph: !prevState.showTemperatureGraph }));
  }

  handlePlotChange = (event) => {
    this.setState({ selectedPlot: event.target.value });
  }
  

    render() {

      const { selectedPlot, plotUrls } = this.state;



      const splitScreen = {
        display: 'flex',
        height: '100vh', // Set height to full viewport height
      };
    
      const leftHalf = {
        flex: 1,
        width: '50vw',
      };
    
      const rightHalf = {
        flex: 1,
        width: '50vw',
      };
	var current_air_temp;
	var current_air_humid;

        return(
	$(document).ready(function() {
		$.ajax({
			url:'/data',
			type:'GET',
			success: function(response) {
			console.log(response);
			var num_data_entries = response.length;
			console.log(num_data_entries);
			current_air_temp = response[num_data_entries - 1].air_temp;
			current_air_humid = response[num_data_entries - 1].air_humid
			console.log("current air temp: " + current_air_temp);		
			console.log("current air humidity: " + current_air_humid);
			$('#cur_temp').text(current_air_temp + " " + "°C");	
			$('#cur_humid').text(current_air_humid + " " + "%");
			response_array = response;
			console.log(response_array)
				}

			});
		}),

          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative"}}>
            {/* Solid Rectangle at top of page*/}
            <div style={{display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>
        
            {/* Whitespace below rectangle */}
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{height:"0.5vh", fontSize:1}}>&nbsp;</p>
              </Grid>
            </Grid>
           
            {/* TODO: MAYBE ADD ABILITY TO CREATE A NEW PLOT  */}


            {/* Button to contact devs / report bugs */}
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{width:"0.8vw"}}> &nbsp; </p>
              </Grid>
              <Grid item xs={false}>
                <Link target="-blank" to="https://docs.google.com/forms/d/e/1FAIpQLSeCX9WV2xAr00RpXRROU_GwY4gwvxMH4MnRD---sqy2ExwSlA/viewform?usp=sf_link">
                <Button style={{width:"12vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <Typography sx={{ wordBreak: "break-word", width:"10vw", color:"black", font:"Oxygen", fontSize:15,}}> Contact Developers </Typography>
                </Button>
                </Link>
              </Grid>
            </Grid>

            {/* Project Title & Location Name*/}
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:35}}> Greenhouse Automation System</b>
                <b style={{color:"black", font:"Oxygen", fontSize:25}}> <br/> Pye Farm </b>
              </Grid>
            </Grid>
        
            {/* Empty Lines for page spacing */}
            <Grid>
              <span>&nbsp;</span>
            </Grid>

            {/*Rendering the plot selection component*/}
            <Grid container justifyContent="center">
              <Grid item xs={false} align="center">
                <SelectComponent ></SelectComponent>
              </Grid>

              {/* DROPDOWN MENU */}

              {/* <Grid item xs={false} align="center">
              <select value={selectedPlot} onChange={this.handlePlotChange}>
                <option value="Plot 1">Plot 1</option>
                <option value="Plot 2">Plot 2</option>
                <option value="Plot 3">Plot 3</option>
              </select>
              <Link to={plotUrls[selectedPlot]}>
                <button>Go to Plot</button>
              </Link>

              </Grid> */}

            </Grid>

            {/* Empty Lines for page spacing */}
            <Grid>
              <span>&nbsp;</span>
            </Grid>

            <Grid>
              <span>&nbsp;</span>
            </Grid>
         
         {/* Splitting the screen in two -- for greenhouse parameters & for camera view */}
            <div style={splitScreen}>

         {/* Greenhouse Parameters side */}

              <div style={leftHalf} >

                {/* Empty Lines for page spacing */}

                <Grid>
                  <span>&nbsp;</span>
                </Grid>

                <Grid>
                  <span>&nbsp;</span>
                </Grid>
                
                {/* Temperature */}
                
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <Button disabled="true" style={{width:"20vw", backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}> GREENHOUSE TEMPERATURE</b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <Button id = "cur_temp" disabled="true" style={{width:"20vw", backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}></b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                </Grid>

                {/* Empty Lines for page spacing */}
                <Grid>
                  <span>&nbsp;</span>
                </Grid>
                
                <Grid>
                  <span>&nbsp;</span>
                </Grid>

                <Grid>
                  <span>&nbsp;</span>
                </Grid>

                {/* Humidity */}    

                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <Button disabled="true" style={{width:"20vw", backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}>Greenhouse Humidity</b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <Button id = "cur_humid" disabled="true" style={{width:"20vw", backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px", color:"black"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}></b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                </Grid>


                <Grid>
                  <span>&nbsp;</span>
                </Grid>
                {/* button to swap between Temperature and Humidity graphs, use if statement to change the graph, stay on page */}
                <Grid item xs={false} align="center">
                  <Button 
                  style={{width:"20vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}
                  onClick={this.handleButtonClick}
                >
                  <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}>Swap between temperature and humidity graph</b>
                </Button>
                </Grid>

              {/* Temperature Graph */}
              {this.state.showTemperatureGraph && (
                <Grid container justifyContent="center">
                  <Grid item xs={false} align="center">
                    <h1>Air Temperature</h1>
                    <GraphFunction filename="Air_Temperature.csv" width_scale={1} height_scale={1}></GraphFunction>
                  </Grid>
                </Grid>
              )}


                {/* Humidity Graph */}
                {!this.state.showTemperatureGraph && (
                  <Grid container justifyContent="center">
                    <Grid item xs={false} align="center">
                      <h1>Air Humidity</h1>
                      <GraphFunction filename="Air_Humidity.csv" width_scale={1} height_scale={1}></GraphFunction>
                    </Grid>
                  </Grid>
                )}

              </div>


                {/* Greenhouse Photo and Button */}   
                {/* TODO: Modify formatting once we are mebedding actual greenhouse images */}    

              <div style={rightHalf}>

                <Grid>
                  <span>&nbsp;</span>
                </Grid>

                <Grid>
                  <span>&nbsp;</span>
                </Grid>


                <Grid container justifyContent="center">
                  <img style= {{width:"30vw", height:"35vh"}} src={Greenhouse} alt="logo" />
                </Grid>

                <Grid>
                  <span>&nbsp;</span>
                </Grid>

                <Grid container spacing={0} justifyContent="center">
                  <Grid item xs={false} align = "center">
                    {/* TEMPORARY: THIS NEEDS TO BE FIXED */}
                    <Link to="http://192.168.2.36:8000/plant1/cameraview">
                      <Button margin="0 auto" display="block" style={{width:"30vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                        <p style={{width:"30vw", color:"black", font:"Oxygen", fontSize:20}}>See Larger Camera View</p>
                      </Button>
                    </Link>
                  </Grid>
                </Grid>

              </div>

            </div>


            {/* Solid Rectangle at bottom of page*/}
            <div style={{position:"absolute", bottom:0, display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>


          </body>

        );

    }
}
