'use strict';

angular.module('angularBootstrapApp')
  .controller('FooterCtrl', ['$scope', function ($scope) {
    var date = new Date();
    $scope.currentYear = date.getFullYear();
  }]);