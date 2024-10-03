"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
// App middlewares
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.get("*", function (req, res, next) {
    console.log(req.method, req.url, res.statusCode);
    next();
});
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + "/views/index.html");
    // res.send('<a href="/auth/google">Login with Google</a><a href="/logout">Log Out</a>')
});
//API endpoints
// const googleAuthRoute = require("./api/google-auth").router;
// app.use("/", googleAuthRoute);
// Error page matching
app.get('*', function (req, res, next) {
    res.status(400).send('No match found - error page!');
    // res.redirect("/");
});
// Set up server
var server = app.listen(process.env.PORT || 3000, function () {
    // console.log('Your app is listening on port 3000 ' + listener.address().port)
});
