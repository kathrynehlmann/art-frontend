//Dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var port       =  3001 || process.env.PORT;



app.use(express.static('public'));


app.listen(port, function(){
  console.log('Acquired frontend is listening on port: ', port);
});
