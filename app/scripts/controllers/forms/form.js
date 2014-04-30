'use strict';

angular.module('angularBootstrap2App')
  .controller('FormCtrl', function ($scope) {
    $scope.user = {firstName: '', lastName: '', acceptTerms: false};
    $scope.fail = false;
    $scope.pass = false;
    $scope.users = [];
    $scope.isValidUser = function() {
      return $scope.user.lastName !== null && $scope.user.lastName !== '' && $scope.user.firstName !== null && $scope.user.firstName !== '' && $scope.user.acceptTerms === true;
    };

    $scope.submit = function () {
      $scope.fail = false;
      $scope.pass = false;
      if ($scope.isValidUser()) {
        $scope.pass = true;
        $scope.users.push({firstName:$scope.user.firstName, lastName:$scope.user.lastName});
      }
      else {
        $scope.fail = true;
      }
    };
  });