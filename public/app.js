var app = angular.module('acquired', []);

app.controller('mainCtrl', ['$http', function($http) {
  // this.message = "controller is working"; // controller is working
  this.artworks = []; // get array of artworks json data
  this.artwork = [];
  this.users = []; //get array of user json data
  this .formcreateuser = {};
  this.deleteUsers = [];
  this.favorites = [];


/////////////  request Artworks from arst.net API /////////////
////  Added Superagent as a dependency in server.js ///////

var clientID = '5df977ee477d20875d23',
    clientSecret = 'c359841e6f964922a22c47efcea3639e',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token'
    xappToken;

request
  .post(apiUrl)
  .send({ client_id: clientID, client_secret: clientSecret })
  .end(function(res) {
    xappToken = res.body.token;
  });

////////////////   request Artworks from API  ///////////////////
  $http({
    method: 'GET',
    url: 'https://api.artsy.net/api/artworks?sample=1', //external api url only, call is for a random image
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this)); //end artwork request

  //also with this from https://developers.artsy.net - Traverston-angular npm package installed.
  var traverson = require('traverson'),
    JsonHalAdapter = require('traverson-hal'),
    xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODcxMDg4NTQsImlhdCI6MTQ4NjUwNDA1NCwiYXVkIjoiNTg5MzkwZTY5YzE4ZGIyODc0ODU4ZjA0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjU4OWE0MDc2MTM5YjIxNTVhNWViODlhOSJ9.PElXi7HVIei9hz8X9hWLbQha0fIa4sOHjrLPq9wBzXk';

  traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);
  api = traverson.from('https://api.artsy.net/api').jsonHal();

  api.newRequest()
  .follow('artist')
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': xappToken,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
  .withTemplateParameters({ id: 'andy-warhol' })
  .getResource(function(error, andyWarhol) {
    console.log(andyWarhol.name + 'was born in ' + andyWarhol.birthday + ' in ' + andyWarhol.hometown);
  });

///requesting the information from the backend, always the localhost address for the port on the backend. This is the GET request that displays the list of artworks from the Rails server.

// ////////////////   request Artworks faker data  ///////////////////
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
