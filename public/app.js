var app = angular.module('acquired', []);

app.controller('mainCtrl', ['$http', function($http) {
  // this.message = "controller is working"; // controller is working
  this.artworks = []; // get array of artworks json data
  this.artwork = [];
  this.users = []; //get array of user json data
  this.user = [];
  this.formcreateuser = {};
  this.formeditusers = {};
  this.deleteUsers = [];
  this.favorites = []; //get a user's array of favorited artworks
  this.deleteFavorites = [];

  var localEnv = false; //change to true if using localhost, change to false if on heroku
  if (localEnv) { var urlString = 'http://localhost:3000/'} else { var urlString = 'https://acquired-api.herokuapp.com/' }


///requesting the information from the backend, always the localhost address for the port on the backend. This is the GET request that displays the list of artworks from the Rails server.

// ////////////////   request Artworks data  - Displaying  ///////////////////
  $http({
    method: 'GET',
    //change this for heroku deployment to back end heroku URL. acquired-api.herokuapp.com from '//localhost:3000'
    url: urlString, //backend url only
    data: this.artworks,
  }).then(function(response) {
    console.log(response);
    this.artworks = response.data;
    console.log(this.artworks);
  }.bind(this)); //end artwork request


// ///-------AJAX calls to Users for create update and delete ---//

///requesting the information from the backend. This is the GET request that displays the list of users from the Rails server.

//   ///////////////////  request Users - Displaying   //////////////////
    $http({
      method: 'GET',
      url: urlString + '/users',
      data: this.users
    }).then(function(response) {
      console.log(response);
      this.users = response.data;
      console.log(this.users);
    }.bind(this)); //end request for users
//
// //     ///////////////////  Create New Users  - Displaying  //////////////////
// //
    this.processFormForUser = function() {
      console.log('processFormForUser function . . .');
      console.log('Form: ', this.formcreateuser);
//
//       //Ajax request to create a user
      $http({
        method: 'POST',
        url: urlString + '/users',
        data: this.formcreateuser
      }).then(function(result){
        console.log('data from server: ', result);
        this.user = result.data;
        this.formcreateuser = {};
        this.users.unshift(result.data);
        location.reload();
      }.bind(this)); //end user create
    } //end form create user

////////////////////////  Delete User    //////////////////
      this.deleteUsers = function(users) {
        console.log(this.users); //checking the parameters when the button is clicked

        $http({
          method: "DELETE",
          url: urlString + '/users/' + users
        }).then(function(result){
          console.log('data from server: ', result);
          this.deleteUsers = {};
          this.users.unshift(result.data);
          location.reload();
        }.bind(this));
      } //end of function to delete users

///-------AJAX calls to Favorites for create  and update ---//
/////////////////  add a favorite to a user's collection ///////////////
 this.favorites = function(artwork){
   console.log(artwork);
   console.log(this.user);

   $http({
     method: 'POST',
     url: urlString + '/favorites',
     data: this.favorites
   }).then(function(response){ //success message if artwork is favorited.
     console.log('Creating Favorite');
     console.log(response);
   },
    function(response){ //fail message if favorite is not added
      console.log('Warning: favorite was not added!');
      console.log(response);
      }
   )
 };
//
// //then a delete function for favorites
this.deleteFavorites = function(deletefav) {
  console.log(this.favorites);

  $http({
    method: "DELETE",
    url: urlString + '/users/' + users
  }).then(function(result){
    console.log('data from server: ', result);
    this.deleteFavorites = {};
    this.favorites.unshift(result.data);
    location.reload();
  }.bind(this));
} //end of function to delete favorites


}]); //end MainController



// url:'https://acquired.herokuapp.com/'
