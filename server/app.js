import {passCheck} from "./js_funcs/loginFuncs.js"
import express from "express"
import bodyParser from "body-parser";
import mysql from 'mysql'
import 'dotenv/config'
console.log(process.env.HOST)
const db = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    port     : process.env.PORT
});
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
const PORT = process.env.PORT || 8081;
app.post("/login", (req, res) => {
    console.log("Connected to React");
    console.log(req.body);
    let params=req.body
    let confirmation=passCheck(params['password'])
    console.log(confirmation)
    switch (confirmation){
        case 0:
            res.send({"response":'authorized'})
        break;
        case 1:
            res.send({"response":'unauthorized',"error":"empty"})
        break;
        case 2:
            res.send({"response":'unauthorized',"error":"number"})
        case 3:
        case 4:
            res.send({"response":'unauthorized',"error":"char"})
        break;

    }




});
app.listen(PORT, console.log(`Server started on port ${PORT}`));