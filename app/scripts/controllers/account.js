'use strict';

/**
 * @ngdoc function
 * @name kidsBankApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the kidsBankApp
 */
angular.module('kidsBankApp')
  .controller('AccountCtrl', function ($scope, $log, accountService) {
    this.account = {};
    
    this.save = function () {
      accountService.save(this.account);
      $log.debug('Account saved!');
    }
  });
