const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
const PORT = process.env.PORT || 8080;
app.post("/login", (req, res) => {
    console.log("Connected to React");
    console.log(req.body);
    res.send('authorized')




    res.redirect("/");
});
app.listen(PORT, console.log(`Server started on port ${PORT}`));