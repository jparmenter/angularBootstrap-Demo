'use strict';

describe('Controller: FormCtrl', function () {

  beforeEach(module('angularBootstrapApp'));
  var FormCtrl, scope;

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
