import React, {useEffect} from "react";
import $ from "jquery";
import "bootstrap";
import '../style/App.css';
import './error-screen';
import 'bootstrap/dist/css/bootstrap.min.css'


function Login(){
    function logCheck() {
        let username = $("#email-address").val();
        let password = $("#password").val();

        console.log(username, password,"kekw")
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({username, password}),


        }).then(async r => {
            let response = await r.json();
            if (response['response'] === 'authorized') {

            } else {
                switch (response['error']) {
                    case 'empty':
                        $('.modal').css('display', 'block');
                        console.log("unfair")
                        $('#error-text').html("password must be at least 6 characters long");
                        break;
                    case 'char':
                        $('.modal').css('display', 'block');
                        console.log("unfair")
                        $('#error-text').html("password must have upper and lowercase letters");
                        break;
                    case 'number':
                        $('.modal').css('display', 'block');
                        console.log("unfair")
                        $('#error-text').html("password must have digits");
                        break;
                }
            }
        })
    }
    useEffect(()=> {
        $('form').submit((e)=>{
            e.preventDefault();
            logCheck()
        })
         $('input').keypress(function (e){
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
    return(
        <div>

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                         alt="Workflow"/>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>

                </div>
                <form>
                    <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Email address"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"/>
                </svg>
              </span>
                                Sign in
                            </button>
                            <button style={{marginTop:10}} type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"/>
                </svg>
              </span>
                                Sign in
                            </button>

                        </div>
                </form>
            </div>

        </div>
        </div>
    );
}
export default Login;
