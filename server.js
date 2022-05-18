/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ________Shafqat Farhan______________ Student ID: __129113213____________ Date: _18.05.2022_______________
*
*  Heroku Web App URL: _ https://immense-ocean-14679.herokuapp.com/
*
*  GitHub Repository URL: https://git.heroku.com/immense-ocean-14679.git
*
********************************************************************************/ 



var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Shafqat Farhan - 129113213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

