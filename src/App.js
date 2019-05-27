import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar }from './components/layout/Navbar'
import { SignedInLinks } from "./components/layout/SignedInLinks";

import {BrowserRouter, Switch, Route } from "react-router-dom";
import {Dashboard} from './components/dashboard/Dashboard'
import {ProjectDetails} from "./components/project/ProjectDetails";

function App(){
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/project:id" component={ProjectDetails}/>
                    <Route path="/" component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
