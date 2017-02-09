var app = angular.module('acquired', []);

app.controller('mainCtrl', ['$http', function($http) {
  // this.message = "controller is working"; // controller is working
  this.artworks = []; // get array of artworks json data
  // this.artwork = [];
  // this.users = []; //get array of user json data
  // this.formcreateuser = {};
  // this.formeditusers = {};
  // this.deleteUsers = [];
  // this.favorites = []; //get a user's array of favorited artworks

  // var localEnv = true; //change to true if using localhost, change to false if on heroku
  // if (localEnv) { var urlString = 'http://localhost:3000'} else { var urlString = 'https://acquired.herokuapp.com/' }


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

///-------AJAX calls to Favorites for create  and update ---//
//
// //////////////  add a favorite to a user's collection ///////////////
//  this.favorites = function(index){
//    $http({
//      method: 'POST',
//      url: 'https://acquired-api.herokuapp.com/users/favorites',
//      data: this.favorites
//    }).then(
//      function(response){ //success message if artwork is favorited.
//      console.log('Creating Favorite');
//      console.log(response);
//    },
//     function(response){ //fail message if favorite is not added
//       console.log('Warning: favorite was not added!');
//       console.log(response);
//       }
//    )
//  };
//
// //then a delete function for favorites
//
//
// ///-------AJAX calls to Users for create update and delete ---//
//
//   ///requesting the information from the backend. This is the GET request that displays the list of users from the Rails server.
//
//   ///////////////////  request Users    //////////////////
//     $http({
//       method: 'GET',
//       //change this for heroku deployment to back end heroku URL. acquired-api.herokuapp.com from '//localhost:3000'
//       url: 'https://acquired-api.herokuapp.com/users',
//     }).then(function(response) {
//       console.log(response);
//       this.users = response.data;
//       console.log(this.users);
//     }.bind(this)); //end request for users
//
//     ///////////////////  Create New Users    //////////////////
//
//     this.processFormforUser = function() {
//       console.log('processFormforUser function . . .');
//       console.log('Form: ', this.formcreateuser);
//
//       //Ajax request to create a user
//       $http({
//         method: 'POST',
//         url: 'https://acquired-api.herokuapp.com/users',
//         data: this.formcreateuser
//       }).then(function(result){
//         console.log('data from server: ', result);
//         this.formcreateuser = {};
//         this.users.unshift(result.data);
//       }.bind(this)); //end user create
//     } //end form create user
//
//       ///////////////////  Delete User    //////////////////
//
//       // JS function to delete users
//       this.deleteUsers = function(users) {
//         for (i = 0; i < this.users.length; i++) {
//           if( this.users[i].id == users.id) {
//             this.users.splice(i,1);
//           }
//         }
//       } //end of JS function to delete users
//
//       //Delete users from database in Rails
//       this .deleteUsersFromDB = function(userId) {
//         console.log(usersId);
//
//       //Ajax requesto to delete an individual user
//       $http({
//         method: 'DELETE',
//         url: 'https://acquired-api.herokuapp.com/' + '/users' + users.id,
//       }).then(function(response) {
//         console.log(response);
//         this.deleteUsers(response.data);
//         console.log(this.deleteUsers);
//       });// end request to delete an individual user
//     } //end delete users from database function




}]); //end MainController

// external api request will be updated URLs and Heroku server, as well as rack cors so that the origin matches the frontend url.

// url:'https://acquired.herokuapp.com/'
