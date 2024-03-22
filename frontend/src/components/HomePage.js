import React, { Component} from "react";
import PlantPage1 from "./PlantPage1";
import PlantPage2 from "./PlantPage2";
import PlantPage3 from "./PlantPage3";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";
import CameraViewPage from "./CameraViewPage";
import GraphPage from "./GraphPage";
import GraphPageMain from "./GraphPage";

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
                    {/* <Route exact path='/graph' element={<GraphPage/>}></Route> */}
                    <Route exact path='/graph/' component={GraphPage} element={<GraphPage/>}></Route>
                    <Route exact path='/plant1' element={<PlantPage1/>}></Route>
                    <Route exact path='/plant2' element={<PlantPage2/>}></Route>
                    <Route exact path='/plant3' element={<PlantPage3/>}></Route>
                    <Route exact path='/plant1/cameraview' element={<CameraViewPage/>}></Route>
                </Routes>
            </Router>
    );
    }
}