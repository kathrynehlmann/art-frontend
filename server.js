//Dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose')
var port       =  3001 || process.env.PORT;



// this threw an error Cannot find module 'pg':
// var pg = require('pg')
// var mongoose = require('mongoose');
// mongoose.connect(mongoUri);


// var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/acquired';

app.use(express.static('public'));


app.listen(port, function(){
  console.log('Acquired frontend is listening on port: ', port);
});
