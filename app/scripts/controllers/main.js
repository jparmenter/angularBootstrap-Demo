'use strict';

angular.module('angularBootstrapDemoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.singleModel = 1;
    });
  });
