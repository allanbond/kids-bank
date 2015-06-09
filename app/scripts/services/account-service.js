'use strict';

angular.module('kidsBankApp')
	.factory('accountService', function() {
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
				var accounts = localStorage.getItem('kb.accounts');
				var account = accounts ? JSON.parse(accounts)[accountId] : undefined;
				account.dob = new Date(account.dob);	// convert from string to date
				
				return account;
			}
		}
		
		return serviceInstance;
	});