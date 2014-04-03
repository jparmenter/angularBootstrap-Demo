'use strict';

describe('Controller: MainCtrl', function () {
  beforeEach(module('angularBootstrapDemoApp'));

  var NavbarCtrl, scope;

  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of menu items to the scope', function () {
    expect(scope.menu.length).toBe(2);
  });
});
