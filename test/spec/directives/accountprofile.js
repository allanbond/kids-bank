'use strict';

describe('Directive: accountProfile', function () {

  // load the directive's module
  beforeEach(module('kidsBankApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<account-profile></account-profile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the accountProfile directive');
  }));
});
