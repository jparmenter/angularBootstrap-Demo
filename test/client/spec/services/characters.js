'use strict';

describe('Service: characters', function () {

  // load the service's module
  beforeEach(module('angularBootstrapDemoApp'));

  // instantiate service
  var Characters,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, _Characters_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    Characters = _Characters_;
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings).toBeUndefined();
  //   $httpBackend.flush();
  //   expect(scope.awesomeThings.length).toBe(2);
  // });
});
