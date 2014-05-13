'use strict';

describe('Controller: FooterCtrl', function () {
  beforeEach(module('angularBootstrapApp'));
  var FooterCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a currentYear with 2014', function() {
    expect(scope.currentYear).toBe(2014);
  });
})