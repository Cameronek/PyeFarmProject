import React, { Component} from "react";
import PlantPage from "./PlantPage";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";
import CameraViewPage from "./CameraViewPage";

// *** HOMEPAGE is effectively an extension of App.js containing page routing

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router>
                <Routes>
                    {/* TODO: Modify paths such that we have individual paths for each plant */}
                    {/* TODO: Dynamic routing and page creation (may not be implemented) */}
                    <Route exact path='/' element={<SearchPage/>}></Route>
                    <Route exact path='/plant' element={<PlantPage/>}></Route>
                    <Route exact path='/cameraview' element={<CameraViewPage/>}></Route>
                </Routes>
            </Router>
    );
    }
}