import React, { Component} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"

export default class SearchPage extends Component{
    constructor(props){
        super(props);
    }
    render() {
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

            
            {/* Button to contact devs / report bugs */}
            <Grid container spacing={0}>
              <Grid item xs={false} align ="left">
                <p style={{width:"0.8vw"}}> &nbsp; </p>
              </Grid>
              <Grid item xs={false}>
                <Button style={{width:"12vw", backgroundColor: '#D9EFD5',  border: "3px solid black", borderRadius:"5px"}}>
                  <Typography sx={{ wordBreak: "break-word", width:"10vw", color:"black", font:"Oxygen", fontSize:15,}}> Contact Developers </Typography>
                </Button>
              </Grid>
            </Grid>

            {/* Project Title & Location Name*/}
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={false} align="center">
                <b style={{color:"black", font:"Oxygen", fontSize:35}}> Greenhouse Automation System </b>
                <b style={{color:"black", font:"Oxygen", fontSize:25}}> <br/> Pye Farm </b>
              </Grid>
            </Grid>
        
            {/* Empty Lines for page spacing (probably a better way to do this) */}
            <Grid>
              <span>&nbsp;</span>
            </Grid>

            <Grid item xs={false} align="center">
              <TextField id="outlined-basic" label="Find a Plant" variant="outlined"></TextField>
            </Grid>
            
          </body>

        );
    }
}