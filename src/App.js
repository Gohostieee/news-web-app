import logo from './img/logo.svg';
import waves from './img/waves-1.svg';
import wavesBody from './img/waves-body-2.svg';
import KUTE from 'kute.js'
import boostrap from "bootstrap"
import blob1 from './img/blob-1.svg'
import $ from 'jquery'
import './style/App.css';
import Error from './js-temp/error-screen'
import ReactDOM from 'react-dom';


import React, {useState,useEffect} from "react";
function App() {
    function logCheck() {
        let username = $("#usrInp").val();
        let password = $("#passInp").val();

        console.log(username, password,"kekw")
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({username, password}),


        }).then(async r => {
            let response = await r.json();
            console.log(response,'kekw')
            if (response['response'] == 'authorized') {

            } else {
                switch (response['error']) {
                    case 'empty':
                        $('.modal').css('display', 'block');
                        console.log("unfair")
                        $('#error-text').html("input is empty");
                        break;
                }
            }
        })
    }
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
          <Error/>
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
            <button type='submit' onClick={logCheck} className={'submit'}>submit</button>

        </div>
        <div className="circle" id="lowerleft">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        </body>
      </div>


  );

}



export default App;
