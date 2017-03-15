//MODULE
angular.module('weTrvl', ['ngRoute', 'ngResource'])

.factory('Recents', function($http) {

  var getAll = function(link) {
    return http$({
      method: 'GET',
      url: 

    })
  }
})

//SERVICES
.service('cityService', function() {
  this.city = "Los Angeles";
})

//CONTROLLERS

.controller('homeController', function($scope, cityService) {


.controller('forecastController', function($scope, $resource, cityService) {
    $scope.city = cityService.city;

    $scope.$watch('city', function() {
    cityService.city = $scope.city
    })

    })
    $scope.city = cityService.city;
    $scope.weatherAPI = ;
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });

})

