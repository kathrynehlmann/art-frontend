var app = angular.module('acquired', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "controller is working"; // controller is working
  this.artworks = []; // ger array of artworks json data
  var controller = this;


// this will break when pushed to heroku, need to adjust after deploy
  $http({
    method: 'GET',
    url: 'http://localhost:3001/artworks',
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this));


  

}]); //end MainController

// external api request will be updated URLs and Heroku server, as well as rack cors so that the origin matches the frontend url.
