import logo from './logo.svg';
import waves from './waves-1.svg';
import wavesBody from './waves-body-2.svg';
import KUTE from 'kute.js'
import blob1 from './blob-1.svg'
import $ from 'jquery'
import './App.css';
import React, {useState,useEffect} from "react";
function App() {
    useEffect(()=> {
        let keypress= $('input').keypress(function (e){
            if (e.key==" "){
                e.preventDefault()
                if ($(this).val()["length"]<13) {
                    let value = $(this).val()

                    $(this).val(value + "_")
                    console.log($(this).val()["length"])
                }
            }
        });
    })


    return (

      <div className="App">
          <img src={waves} className='flip wave' alt="logo" />

          <header className="App-header">
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              name idk
          </a>
        </header>
        <body>
        <img src={wavesBody} className='background-image' alt="logo" />
        <div className="blob" alt="logo" >
            <img src={blob1} id='blob1'/>
            <p className='pyGrad' id='userName'>UserName</p>
            <input maxLength={12} id='usrInp' className='inp pyGrad'/>
            <p className='pyGrad' id='passWord'>PassWord</p>
            <input maxLength={12} id='passInp' className={'inp pyGrad'}/>
            <button className={'submit'}>submit</button>

        </div>
        <div className="circle" id="lowerleft">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        </body>
      </div>


  );

}



export default App;
