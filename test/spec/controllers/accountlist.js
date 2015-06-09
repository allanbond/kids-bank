'use strict';

describe('Controller: AccountlistCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsBankApp'));

  var AccountlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountlistCtrl = $controller('AccountlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
