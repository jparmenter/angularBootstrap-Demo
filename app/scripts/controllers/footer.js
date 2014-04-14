'use strict';

angular.module('angularBootstrap2App')
  .controller('FooterCtrl', function ($scope) {
    var date = new Date();
    $scope.currentYear = date.getFullYear();
  });