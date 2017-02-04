var app = angular.module('acquired', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "controller is working";
  this.notices = [];

  $http({
    method: 'GET',
    url: 'http://localhost3000/users',
  }).then(function(response) {
    console.log(response);
  });

}]);
