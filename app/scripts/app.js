'use strict';

/**
 * @ngdoc overview
 * @name kidsBankApp
 * @description
 * # kidsBankApp
 *
 * Main module of the application.
 */
angular
  .module('kidsBankApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/createAccount', {
        templateUrl: 'views/edit-account.html',
        controller: 'AccountCtrl',
        controllerAs: 'accountCtrl'
      })
      .when('/editAccount/:id', {
        templateUrl: 'views/edit-account.html',
        controller: 'AccountCtrl',
        controllerAs: 'accountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });