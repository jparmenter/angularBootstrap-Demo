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


  it('should attach a NavbarCtrl', function() {
    expect(NavbarCtrl).toBeDefined();
  });

  it('should attach an initialized menu', function () {
    expect(scope.menu).not.toBe(null);
  });

  it('should attach a menu length of 2', function() {
    expect(scope.menu.length).toBe(2);
  });

  it('should attach a menu with first record with title Home', function() {
    var home = scope.menu[0];
    expect(home.title).toBe('Home');
  });

  it('should attach a menu with first record with link /', function() {
    var home = scope.menu[0];
    expect(home.link).toBe('/');
  });

  it('should attach a menu with second record with title About', function() {
    var about = scope.menu[1];
    expect(about.title).toBe('About');
  });

  it('should attach a menu with second record with link /about', function() {
    var about = scope.menu[1];
    expect(about.link).toBe('/About');
  });

  it('should attach an initialized forms', function() {
    expect(scope.forms).not.toBe(null);
  });

  it('should attach a forms list of length 3', function() {
    expect(scope.forms.length).toBe(3);
  });

  it('should attach a forms with first record with title form', function() {
    var form = scope.forms[0];
    expect(form.title).toBe('Form');
  });

  it('should attach a forms with first record with link /Forms/Form', function() {
    var form = scope.forms[0];
    expect(form.link).toBe('/Forms/Form');
  });

  it('should attach a forms with second record with title File', function() {
    var file = scope.forms[1];
    expect(file.title).toBe('File');
  });

  it('should attach a forms with second record with link /Forms/File', function() {
    var file = scope.forms[1];
    expect(file.link).toBe('/Forms/File');
  });

  it('should attach a forms with third record with title Event', function() {
    var eventLink = scope.forms[2];
    expect(eventLink.title).toBe('Event');
  });

  it('should attach a forms with third record with link /Forms/Event', function() {
    var eventLink = scope.forms[2];
    expect(eventLink.link).toBe('/Forms/Event');
  });

  it('Home should be our active location', function() {
    expect(scope.isActive('/')).toBe(true);
  });

  it('Home should not be our active location', inject(
    function ($location) {
      $location.path('/stuff');
    },
    function() {
      expect(scope.isActive('/')).toBe(false);
    }));
});