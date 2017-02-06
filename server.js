var express = require('express');
var app     = express();

// var mongoose = require('mongoose');
// this threw an error Cannot find module 'pg':
// var pg = require('pg')



// var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// mongoose.connect(mongoUri);

port = process.env.PORT || 3001;

app.use(express.static('public'));


app.listen(3001, function(){
  console.log("Acquired frontend is running on port: ", port);
});
