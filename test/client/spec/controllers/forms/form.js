'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('angularBootstrapApp'));

  var FormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormCtrl = $controller('FormCtrl', {
      $scope: scope
    });
  }));

  it('should attach an initialized user', function () {
    expect(scope.user).not.toBe(null);
  });
});
