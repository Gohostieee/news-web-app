//import boostrap from "bootstrap"
import $ from 'jquery'
import './style/App.css';
import Error from './js-temp/error-screen'
import Login from './js-temp/loginForm'
import Home from './js-temp/homeScreen'
//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import React, {useState,useEffect} from "react";
function App() {



    return (
    <Router>
      <div className="App container">

          <Routes>
              <Route path="/" element={<> <Login/></>}/>
              <Route path="/home" element={<Home/>}></Route>

          </Routes>
      </div>
    </Router>

  );

}



export default App;
