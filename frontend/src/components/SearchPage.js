import React, { Component} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {SelectComponent} from './SelectComponent'; 

// temporary import
import tempPlant from "../../static/images/plant.png"
import Greenhouse from "../../static/images/greenhouse.jpg";

// temporary camera page link
let cameraHref = (window.location.href).concat("/plant/cameraview");

export default class SearchPage extends Component{
    constructor(props){
        super(props);
    }
    render() {

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

        return(

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
                <b style={{color:"black", font:"Oxygen", fontSize:35}}> Greenhouse Automation System </b>
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
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}>Greenhouse Temperature</b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <Button disabled="true" style={{width:"20vw", backgroundColor: '#67AE66',  border: "3px solid black", borderRadius:"5px"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}>°C</b>
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
                    <Button disabled="true" style={{width:"20vw", backgroundColor: '#85B658',  border: "3px solid black", borderRadius:"5px"}}>
                      <b style={{width:"19vw", color:"black", font:"Oxygen", fontSize:20}}>%</b>
                    </Button>
                  </Grid>
                  <Grid item xs={false} align ="left">
                    <p style={{width:"3vw"}}>&nbsp;</p>
                  </Grid>
                </Grid>

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
                    <Link to="http://127.0.0.1:8000/plant/cameraview">
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