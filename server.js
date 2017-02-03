var express = require('express');
var app     = express();
var port    = 3001 || process.env.PORT;


app.use(express.static('public'));


app.listen(3001, function(){
  console.log("Acquired frontend is running on port: ", port);
});
