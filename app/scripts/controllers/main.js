'use strict';

angular.module('eaApp')
  .controller('MainCtrl', function ($scope, myService) {

  $scope.getData = function (city) {
    myService.getWeather(city).then(function (data) {
      $scope.weatherData = JSON.parse(JSON.stringify(data));
    })
  }

});
