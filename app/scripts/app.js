'use strict';

/**
 * @ngdoc overview
 * @name eaApp
 * @description
 * # eaApp
 *
 * Main module of the application.
 */
angular
  .module('eaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
