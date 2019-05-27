import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar }from './components/layout/Navbar'
import { SignedInLinks } from "./components/layout/SignedInLinks";

import {BrowserRouter} from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <div>
                <Navbar/>

            </div>
        </BrowserRouter>
    );
}

export default App;
