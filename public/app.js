var app = angular.module('acquired', []);


// this will break when pushed to heroku, need to adjust after deploy
app.controller('mainController', ['$http', function($http){
  this.message = "mainController is connected"
  var controller = this;
  console.log(controller);

///requesting the information from the backend, always the localhost address for the port on the backend.
  $http({
    method: 'GET',
    //change this for heroku deployment to back end heroku URL. acquired-api.herokuapp.com from '//localhost:3000'
    url: 'acquired.herokuapp.com',
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this));

}]); //end MainController

// external api request will be updated URLs and Heroku server, as well as rack cors so that the origin matches the frontend url.

// url:'https://acquired.herokuapp.com/'
