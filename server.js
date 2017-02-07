//Dependencies
var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var port       =  process.env.PORT || 3001;



app.use(express.static('public'));


app.listen(port, function(){
  console.log('Acquired frontend is listening on port: ', port);
});
