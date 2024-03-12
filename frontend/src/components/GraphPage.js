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

            
          <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative"}}>
           
           {/* Test Hello World message */}

            {/* <Grid container justifyContent="center">
                <Grid item xs={false} align="center">
                    <h1>Hello World</h1>
                </Grid>
            </Grid> */}

            {/* Call Graph Function */}
            <Grid container justifyContent="center">
              <Grid item xs={false} align="center">
                <GraphFunction></GraphFunction>
              </Grid>
            </Grid>
            
        </body>

    );
    }
}