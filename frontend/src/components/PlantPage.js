import React, { Component} from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl"
import Link from "react-router-dom";
import Radio from "@mui/material/Radio";;
import RadioGroup from "@mui/material/RadioGroup";
import FormcontrolLabel from "@mui/material/FormControlLabel";
import HouseRounded from "@mui/icons-material";

export default class PlantPage extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
              <Grid item xs={6} align ="center">
                <Typography component="h4" variant="h4">
                    Sample Text
                </Typography>
              </Grid>
              <Grid item xs={6} align ="center">
                <Button variant="contained">
                    Home
                </Button>
              </Grid>
            </Grid>
        );
    }
}