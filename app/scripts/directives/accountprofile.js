'use strict';

/**
 * @ngdoc directive
 * @name kidsBankApp.directive:accountProfile
 * @description
 * # accountProfile
 */
angular.module('kidsBankApp')
  .directive('accountProfile', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the accountProfile directive');
      }
    };
  });
