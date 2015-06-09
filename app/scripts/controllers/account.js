'use strict';

/**
 * @ngdoc function
 * @name kidsBankApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the kidsBankApp
 */
angular.module('kidsBankApp')
  .controller('AccountCtrl', function ($scope, $log, $routeParams, accountService) {
    this.account = {};
    
    if ($routeParams.id) {
      this.editFlag = true;
      this.account = accountService.get($routeParams.id);
    }

    this.save = function () {
      accountService.save(this.account);
      $log.debug('Account saved!');
    }
  });
