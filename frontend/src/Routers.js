import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Routers() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
    </Routes>
    )
}

export default Routers;