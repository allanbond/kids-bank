'use strict';

xdescribe('Directive: accountChip', function () {

  // load the directive's module
  beforeEach(module('kidsBankApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    scope.account = {
      name: 'Fred'
    };
    
    element = angular.element('<div account-chip account="account"></div>');
    element = $compile(element)(scope);
    expect(element.html()).toContain('kb-account-name');
  }));
});
