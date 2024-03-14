import React, { Component } from "react";
import PlantPage from "./PlantPage";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";
import CameraViewPage from "./CameraViewPage";
import GraphPage from "./GraphPage";
import GraphFunction from "./GraphFunction";
import Grid from "@mui/material/Grid";

// *** HOMEPAGE is effectively an extension of App.js containing page routing


export default class HomePage extends Component{
    
    constructor(props){
        super(props);
    }
    render() {
        return (


            
          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative", overflow:"scroll"}}>
           {/* Test Hello World message */}

            <Grid container justifyContent="center">
                <Grid item xs={false} align="center">
                    <h1>Air_Temperature.csv</h1>
                </Grid>
            </Grid>

            {/* Call Graph Function */}
            <Grid container justifyContent="center">
              <Grid item xs={false} align="center">
                {/* <GraphFunction></GraphFunction> */}
                {/*Graph function with test_data.csv passed as a prop */}

                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
                >
                <Grid item xs={3}>
                    <GraphFunction filename="Air_Temperature.csv" width_scale={2} height_scale={3}></GraphFunction>
                </Grid>
                </Grid>
                </Grid>

                {/* Center to center middle of page */}
                {/* <Grid item xs={false} align="center">
                    <GraphFunction filename="Air_Temperature.csv" width_scale={5} height_scale={5}></GraphFunction>
                </Grid>
              </Grid> */}
            </Grid>
            
        </body>

    );
    }
}