'use strict';

/**
 * @ngdoc directive
 * @name kidsBankApp.directive:accountChip
 * @description
 * # accountChip
 */
angular.module('kidsBankApp')
  .directive('accountChip', function () {
    return {
      templateUrl: 'views/account-chip.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
