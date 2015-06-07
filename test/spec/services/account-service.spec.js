'use strict';

describe('AccountService tests', function () {

	var accountService, $log;
	
	beforeEach(module('kidsBankApp'));
	beforeEach(inject(function (_accountService_) {
		accountService = _accountService_;
		localStorage.removeItem('kb.accounts');
	}));
	
	it('saves a new account to local storage', function() {
		var account = {
			name: 'Homer Simpson',
			dob: new Date(1955, 5, 12),
			allowance: 10.50,
			avatar: 'http://www.homersimpsonquotes.com/images/homer.gif'
		};
		accountService.save(account);
		
		// retrieve the saved account from local storage
		var accounts = localStorage.getItem('kb.accounts');
		accounts = accounts ? JSON.parse(accounts) : accounts;
		var savedAccount;
		for (var i = 0; i < accounts.length; i++) {
			if (accounts[i].id === account.id) {
				savedAccount = accounts[i];
				break;
			}  
		}
		
		expect(savedAccount).toBeDefined();
		if (savedAccount) {
			expect(savedAccount.id).toEqual(account.id);
			expect(savedAccount.name).toEqual(account.name);
			expect(savedAccount.dob).toEqual(account.dob.toISOString());
			expect(savedAccount.avatar).toEqual(account.avatar);
		}
	});
});