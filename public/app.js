//MODULE
angular.module('weTrvl', ['ngRoute', 'ngResource'])

// DIRECTIVES

.directive("weatherReport", function() {
  return {
    template: 'weatherReport',

  }
})

//CONTROLLERS
.controller('homeController', ['$scope', 'cityService', function($scope) {
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
      cityService.city = $scope.city
    });

  }]);

.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
  $scopy.city = cityService.city;
  $scope.days = $routeParams.days || '2';
  $scope.weatherAPI = $resource('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});

}]);
//ROUTES

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/pages/home.htm',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: '/pages/forecast.htm',
    controller: 'forecastController'
  })
})

//SERVICES
.service('cityService', function() {
  this.city = "Los Angeles, CA";
})