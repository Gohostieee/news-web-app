import $ from "jquery";
import {useEffect} from "react";


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
function InitEffect() {
    useEffect(() => {
        $('form').submit((e) => {
            e.preventDefault();
            logCheck()
        })
        $('input').keypress(function (e) {
            if (e.key === " ") {
                e.preventDefault()
                if ($(this).val()["length"] < 13) {
                    let value = $(this).val()

                    $(this).val(value + "_")
                    console.log($(this).val()["length"])
                }
            }
        });
    })
}