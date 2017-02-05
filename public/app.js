var app = angular.module('acquired', ['ngRoute', 'appRoutes', 'MainCtrl', 'SettingsCtrl', 'SettingsService']);

app.controller('mainController', ['$http', function($http) {
  // this.message = "controller is working";
  this.artworks = [];

  $http({
    method: 'GET',
    url: 'localhost:3000/artworks',
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this));

}]);

// external api request will be updated URLs and Heroku server, as well as rack cors so that the origin matches the frontend url.
