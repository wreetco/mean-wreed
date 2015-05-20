// app.js

// app includes
var express = require("express");
var app = express();
var methodOverride = require("method-override");

// database setup
var database = "test";
var db = require("./config/db")(database);

// set the port to listen on
var port = 8787;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + "/public")); 

// routes
require("./route_handlers")(app); // include route handlers

// start our app at http://localhost:4321
app.listen(port);               

// let them know where to find the app       
console.log("[+] App can be found on port localhost:" + port);

// expose app           
exports = module.exports = app;  