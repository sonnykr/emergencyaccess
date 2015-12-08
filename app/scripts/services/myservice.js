'use strict';

angular.module('eaApp')
  .service('myService', function myService($http) {

    var service = {};
    var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    var appId = "&appid=2de143494c0b295cca9337e1e96b00e0";

    service.getWeather = function (city) {
      var promise = $http.get(baseUrl + city + appId).then(function (data) {
        return data;
      });
      return promise;
    };

    return service;
});
