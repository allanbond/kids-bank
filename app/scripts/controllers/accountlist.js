'use strict';

/**
 * @ngdoc function
 * @name kidsBankApp.controller:AccountlistCtrl
 * @description
 * # AccountlistCtrl
 * Controller of the kidsBankApp
 */
angular.module('kidsBankApp')
  .controller('AccountListCtrl', function ($scope, accountService) {
    this.accounts = accountService.get();
  });
