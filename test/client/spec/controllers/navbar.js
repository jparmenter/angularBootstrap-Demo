'use strict';

describe('Controller: NavbarCtrl', function() {
  beforeEach(module('angularBootstrapApp'));
  var NavbarCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach an initialized menu', function () {
    expect(scope.menu).not.toBe(null);
  });

  it('should attach a menu length of 2', function() {
    expect(scope.menu.length).toBe(2)
  });

  it('should attach an initialized forms', function() {
    expect(scope.forms).not.toBe(null);
  });

  it('should attach a forms list of length 3', function() {
    expect(scope.forms.length).toBe(3);
  });

  it('Home should be our active location', function() {
    expect(scope.isActive('/')).toBe(true);
  });

  // it('Home should not be our active location', inject(
  //   function ($controller, $locationProvider) {
  //     $locationProvider.path('/stuff');
  //     NavbarCtrl = $controller('NavbarCtrl', {
  //       $scope : scope,
  //       $location
  //     })
  //   },
  //   function() {
  //     expect(scope.isActive('/')).toBe(false);
  //   }));
});