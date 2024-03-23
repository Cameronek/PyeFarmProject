import React, { Component } from "react";
import PlantPage from "./PlantPage1";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";
import CameraViewPage from "./CameraViewPage";
import GraphFunction from "./GraphFunction";
import Grid from "@mui/material/Grid";
import PlantIcon from "@mui/icons-material/ParkRounded";
import { useLocation } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";


export default class GraphPageMain extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            filename: localStorage.getItem('filename'),
            title: localStorage.getItem('title'),
            page: localStorage.getItem('page'),
            // plot: localStorage.getItem('plot'),
            // width_scale: window.innerWidth - 50 / 800,
            // height_scale: window.innerHeight - 50 / 300,
            };
        }


    render() {

        const { filename } = this.state;
        const { title } = this.state;
        const{ page } = this.state;


        return (

            


            
            <body style={{margin: "0", padding: 0, backgroundColor:"white", height:"100vh", width:"100vw", position:"relative"}}>
            {/* Solid Rectangle at top of page*/}
            <div style={{display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>

            <div>

                {/* Test Hello World message */}

                    {/* <Grid container justifyContent="center">
                        <Grid item xs={false} align="center">
                            <h1>Air_Temperature.csv</h1>
                        </Grid>
                    </Grid> */}

                    {/* Call Graph Function */}

                    
                    <Grid container spacing={0.75}>
                    {/* <Grid item xs={1} align ="left"></Grid> */}
                    <Grid item xs={false} align ="left">
                    <Link to={page}>
                        <IconButton roboto-label="PlantPage" style={{color:'black'}}>
                            <PlantIcon style={{fontSize:60}}/>
                        </IconButton>
                        </Link>
                    </Grid>
                    </Grid>


                    <Grid container justifyContent="center">
                    <Grid item xs={false} align="center">
                        {/* <GraphFunction></GraphFunction> */}
                        {/*Graph function with test_data.csv passed as a prop */}

                        <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="top"
                        justifyContent="center"
                        sx={{ minHeight: '50vh' }}
                        >
                        {/*Shift grid up a bit*/}
                        <Grid item xs={0}  >

                            {/* <h1>Filename: {filename}</h1> */}
                            <h1>{title}</h1>
                            <GraphFunction filename={filename} width_scale={2.2} height_scale={2.6}></GraphFunction>
                            
                            
                        </Grid>
                        </Grid>
                        </Grid>

                        {/* Center to center middle of page */}
                        {/* <Grid item xs={false} align="center">
                            <GraphFunction filename="Air_Temperature.csv" width_scale={5} height_scale={5}></GraphFunction>
                        </Grid>
                    </Grid> */}
                    </Grid>
                </div>
                {/* Solid Rectangle at bottom of page*/}
            <div style={{position:"absolute", bottom:0, display: "inline-block", width:"100vw", height:"3vh", background:"#68AC67", align:"center" }}></div>

        </body>

    );
    }
}