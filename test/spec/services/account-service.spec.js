'use strict';

describe('AccountService tests', function () {

	var accountService, $log;
	
	beforeEach(module('kidsBankApp'));
	beforeEach(inject(function (_accountService_) {
		accountService = _accountService_;
		localStorage.removeItem('kb.accounts');
	}));

	it('gets an existing account from local storage', function() {
		var account = {
			name: 'Homer Simpson',
			dob: new Date(1955, 5, 12),
			allowance: 10.50,
			avatar: 'http://www.homersimpsonquotes.com/images/homer.gif'
		};
		accountService.save(account);
		
		var savedAccount1 = accountService.get(account.id);
		expect(savedAccount1).toBeDefined();

		var accounts = localStorage.getItem('kb.accounts');
		accounts = accounts ? JSON.parse(accounts) : accounts;
		var savedAccount2 = accounts[account.id];
		expect(savedAccount2).toBeDefined();

		if (savedAccount1 && savedAccount2) {
			expect(savedAccount1.id).toEqual(savedAccount2.id);
			expect(savedAccount1.name).toEqual(savedAccount2.name);
			expect(savedAccount1.dob).toEqual(new Date(savedAccount2.dob));
			expect(savedAccount1.avatar).toEqual(savedAccount2.avatar);
		}

	});
	
	it('saves a new account to local storage', function() {
		var account = {
			name: 'Homer Simpson',
			dob: new Date(1955, 5, 12),
			allowance: 10.50,
			avatar: 'http://www.homersimpsonquotes.com/images/homer.gif'
		};
		accountService.save(account);
		
		var savedAccount = accountService.get(account.id);
		expect(savedAccount).toBeDefined();

		if (savedAccount) {
			expect(savedAccount.id).toEqual(account.id);
			expect(savedAccount.name).toEqual(account.name);
			expect(savedAccount.dob).toEqual(account.dob);
			expect(savedAccount.avatar).toEqual(account.avatar);
		}
	});
	
	it('updates an existing account to local storage', function() {
		var account = {
			name: 'Homer Simpson',
			dob: new Date(1955, 5, 12),
			allowance: 10.50,
			avatar: 'http://www.homersimpsonquotes.com/images/homer.gif'
		};
		accountService.save(account);
		
		var savedAccount = accountService.get(account.id);
		expect(savedAccount).toBeDefined();
		
		account.name = 'Bart Simpson';
		account.dob = new Date(1985, 4, 20);
		account.allowance = 5.00;
		account.avatar = 'http://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png';
		
		accountService.save(account);
		savedAccount = accountService.get(account.id);
		expect(savedAccount).toBeDefined();
		if (savedAccount) {
			expect(savedAccount.id).toEqual(account.id);
			expect(savedAccount.name).toEqual(account.name);
			expect(savedAccount.dob).toEqual(account.dob);
			expect(savedAccount.avatar).toEqual(account.avatar);
		}
	});
});