//Dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose')
var port       =  3001 || process.env.PORT;



// this threw an error Cannot find module 'pg':
// pg is for heroku postgres, be sure to have this for deployment
var pg = require('pg')

app.use(express.static('public'));


app.listen(port, function(){
  console.log('Acquired frontend is listening on port: ', port);
});
