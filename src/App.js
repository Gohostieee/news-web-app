import logo from './img/logo.svg';
import waves from './img/waves-1.svg';
import wavesBody from './img/waves-body-2.svg';
import KUTE from 'kute.js'
import boostrap from "bootstrap"
import $ from 'jquery'
import './style/App.css';
import Error from './js-temp/error-screen'
import Login from './js-temp/loginForm'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import React, {useState,useEffect} from "react";
function App() {



    return (

      <div className="App container">
          <Error/>
          <Login/>
      </div>


  );

}



export default App;
