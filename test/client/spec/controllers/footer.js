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


  it('should attach a FooterCtrl', function() {
    expect(FooterCtrl).toBeDefined();
  });

  it('should attach a currentYear with 2014', function() {
    var date = new Date();
    expect(scope.currentYear).toBe(date.getFullYear());
  });
})