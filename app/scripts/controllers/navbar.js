'use strict';

angular.module('angularBootstrapApp')
  .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {'title': 'About',
      'link': '/About'
    }];

    $scope.forms = [{
      'title': 'Form',
      'link': '/Forms/Form'
    },
    {'title': 'File',
      'link': '/Forms/File'
    },
    {
      'title': 'Event',
      'link': '/Forms/Event'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);