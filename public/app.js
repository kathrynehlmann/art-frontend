var app = angular.module('acquired', []);

app.controller('mainCtrl', ['$http', function($http) {
  // this.message = "controller is working"; // controller is working
  this.artworks = []; // get array of artworks json data
  this.artwork = [];
  this.users = []; //get array of user json data
  this .formcreateuser = {};
  this.deleteUsers = [];


///requesting the information from the backend, always the localhost address for the port on the backend. This is the GET request that displays the list of artworks from the Rails server.

////////////////   request Artworks  ///////////////////////////
  $http({
    method: 'GET',
    //change this for heroku deployment to back end heroku URL. acquired-api.herokuapp.com from '//localhost:3000'
    url: 'https://acquired-api.herokuapp.com/', //backend url only
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this)); //end artwork request

  ///requesting the information from the backend. This is the GET request that displays the list of users from the Rails server.

  ///////////////////  request Users    //////////////////
    // $http({
    //   method: 'GET',
    //   //change this for heroku deployment to back end heroku URL. acquired-api.herokuapp.com from '//localhost:3000'
    //   url: 'https://acquired-api.herokuapp.com/', //backend url only
    // }).then(function(response) {
    //   console.log(response);
    //   this.users = response.data;
    //   console.log(this.users);
    // }.bind(this));




















}]); //end MainController

// external api request will be updated URLs and Heroku server, as well as rack cors so that the origin matches the frontend url.

// url:'https://acquired.herokuapp.com/'
