'use strict';

/**
 * @ngdoc function
 * @name kidsBankApp.controller:AccountlistCtrl
 * @description
 * # AccountlistCtrl
 * Controller of the kidsBankApp
 */
angular.module('kidsBankApp')
  .controller('AccountListCtrl', function ($scope, $location, $log, $timeout, accountService) {
    this.accounts = accountService.get();
    var accountService = accountService;

    $scope.$watchCollection(angular.bind(this, function(scope) {
        return this.accounts;
      }), 
      function(newValue, oldValue) {
        $log.debug(newValue, oldValue);
        // we know we are only looking for deletions
        var deletedAccounts = _.difference(_.toArray(oldValue), _.toArray(newValue));
        if (deletedAccounts[0]) {
          accountService.delete(deletedAccounts[0]);
        }
        
        $log.debug('Deleted Accounts: ' +  deletedAccounts);
    });
    
    this.selectAccount = function(account) {
      this.selectedAccount = account;
    };
    
    this.createAccount = function() {
      $location.url("/createAccount");
    };
    
    this.editAccount = function() {
      $location.url("/editAccount/" + this.selectedAccount.id);
    };
    
    this.deleteAccount = function() {
      delete this.accounts[this.selectedAccount.id];
      this.selectedAccount = null;
    };
  });