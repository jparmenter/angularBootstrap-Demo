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

  it('should attach a FormCtrl', function() {
    expect(FormCtrl).toBeDefined();
  });

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
    expect(scope.pass).toBe(false);
  });

  it('should attach an initialized users', function() {
    expect(scope.users).not.toBe(null);
  });

  it('should attach empty users', function() {
    expect(scope.users.length).toBe(0);
  });

  it('should attach a isValidUser method that initiallly would return false', function () {
    expect(scope.isValidUser()).toBe(false);
  });

  it('should set fail to try when calling submit', function() {
    scope.submit();
    expect(scope.fail).toBe(true);
  });

  it('should set pass with user that has values', function() {
    scope.user.firstName = 'foo';
    scope.user.lastName = 'bar';
    scope.user.acceptTerms = true;
    scope.submit();
    expect(scope.pass).toBe(true);
  });

  it('should add user to users after submit', function() {
    scope.user.firstName = 'foo';
    scope.user.lastName = 'bar';
    scope.user.acceptTerms = true;
    scope.submit();
    expect(scope.users.length).toBe(1);
  });
});
