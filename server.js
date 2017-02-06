//Dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var port       = 3001;

//===========================================
//Middleware
app.use(bodyParser.urlencoded({ extended:false })); //req.body
app.use(bodyParser.json()); // req.bodyParser and use JSON
//===========================================



//port
port = process.env.PORT || 3001;

// this threw an error Cannot find module 'pg':
// var pg = require('pg')
// var mongoose = require('mongoose');
// mongoose.connect(mongoUri);


// var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

app.use(express.static('public'));


app.listen(3001, function(){
  console.log("Acquired frontend is running on port: ", port);
});
