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
            if (e.key===" "){
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

      <div className="App container">
          <Error/>
          <Login/>
      </div>


  );

}



export default App;
