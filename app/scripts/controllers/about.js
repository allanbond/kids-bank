'use strict';

/**
 * @ngdoc function
 * @name kidsBankApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kidsBankApp
 */
angular.module('kidsBankApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
