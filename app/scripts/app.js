'use strict';

/**
 * @ngdoc overview
 * @name bleekerApp
 * @description
 * # bleekerApp
 *
 * Main module of the application.
 */
angular
  .module('bleekerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
