'use strict';

angular.module('kidsBankApp')
	.factory('accountService', function(_) {
		var serviceInstance;
		serviceInstance = {
			save: function(account) {
				var accounts = localStorage.getItem('kb.accounts');
				
				// init accounts in local storage (if needed)
				if (! accounts) {
					accounts = {};
				}
				else {
					accounts = JSON.parse(accounts);
				}

				if (! account.id) {
					// create an id (for new accounts)
					var id = new Date().getTime();
					account.id = id;
					accounts[id] = account;
				}
				else {
					accounts[account.id] = account;
				}

				// save the accounts back to local storage				
				localStorage.setItem('kb.accounts', JSON.stringify(accounts));
			},
			get: function(accountId) {
				var accounts = JSON.parse(localStorage.getItem('kb.accounts'));

				_.each(accounts, function(value) {
					value.dob = new Date(value.dob);
				});
				
				if (accountId) {
					return accounts[accountId];
				}
				else {
					return accounts;
				}
			}
		}
		
		return serviceInstance;
	});