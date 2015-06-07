'use strict';

angular.module('kidsBankApp')
	.factory('accountService', function() {
		var serviceInstance;
		serviceInstance = {
			save: function(account) {
				var accounts = localStorage.getItem('kb.accounts');
				
				// init accounts in local storage (if needed)
				if (! accounts) {
					accounts = new Array();
				}
				else {
					accounts = JSON.parse(accounts);
				}
				
				// create an id (for new accounts)
				if (! account.id) {
					var id = new Date().getTime();
					account.id = id;
					accounts.push(account);
				}

				// TODO: handle updates
				
				// save the accounts back to local storage				
				localStorage.setItem('kb.accounts', JSON.stringify(accounts));
			}
		}
		
		return serviceInstance;
	});