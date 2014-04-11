'use strict';

angular.module('angularBootstrap2App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {'title': 'About',
      'link': '/About'
    },
    {'title': 'Form',
      'link': '/Form'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
