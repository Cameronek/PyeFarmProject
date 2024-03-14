import React, { Component} from "react";
import PlantPage from "./PlantPage";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";
import CameraViewPage from "./CameraViewPage";
import GraphPage from "./GraphPage";

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
                    {/*<Route exact path='/graph' element={<GraphPage/>}></Route>*/}
                    {/*<Route exact path='/graph/' element={<GraphPage/>}></Route>*/}
                    <Route exact path='/plant' element={<PlantPage/>}></Route>
                    <Route exact path='/plant/cameraview' element={<CameraViewPage/>}></Route>
                </Routes>
            </Router>
    );
    }
}