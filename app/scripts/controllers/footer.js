'use strict';

angular.module('angularBootstrapApp')
  .controller('FooterCtrl', function ($scope) {
    var date = new Date();
    $scope.currentYear = date.getFullYear();
  });