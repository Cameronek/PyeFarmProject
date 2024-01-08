import React, { Component} from "react";
import PlantPage from "./PlantPage";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import SearchPage from "./SearchPage";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<SearchPage/>}></Route>
                    <Route exact path='/plant' element={<PlantPage/>}></Route>
                </Routes>
            </Router>
    );
    }
}