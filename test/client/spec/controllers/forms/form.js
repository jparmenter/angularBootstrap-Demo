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

  it('should attach an user with a fristName property', function () {
    expect(scope.user.firstName).toBe('');
  });

  it('should attach an user with a lastName property', function () {
    expect(scope.user.lastName).toBe('');
  });

  it('should attach an user with a acceptTerms property', function () {
    expect(scope.user.acceptTerms).toBe(false);
  });

  it('should attach fail flag as false', function () {
    expect(scope.fail).toBe(false);
  });

  it('should attach a pass flag as false', function () {
    expect(scope.fail).toBe(false);
  });

  it('should attach a isValidUser method that initiallly would return false', function () {
    expect(scope.isValidUser()).toBe(false);
  });
});
