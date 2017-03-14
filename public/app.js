//MODULE
angular.module('weTrvl', ['ngRoute', 'ngResource'])

//SERVICES
.service('cityService', function() {
  this.city = "Los Angeles, CA";
})

//CONTROLLERS

.controller('homeController', function($scope, cityService) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
      cityService.city = $scope.city
    })

  })

.controller('forecastController', function($scope, $resource, cityService) {
  $scope.city = cityService.city;
  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city + '&appid=c3c721bb9a168dcaa58c632606e3bef7');
  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city });

})


