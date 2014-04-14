'use strict';

angular.module('angularBootstrap2App')
  .controller('FormCtrl', function ($scope) {
    //Disable = false;
    $scope.user = {firstName: '', lastName: '', acceptTerms: false};
    $scope.fail = false;
    $scope.pass = false;
    $scope.isValidUser = function() {
      return $scope.user.lastName !== null && $scope.user.lastName !== '' && $scope.user.firstName !== null && $scope.user.firstName !== '' && $scope.user.acceptTerms === true;
    };

    $scope.submit = function () {
      $scope.fail = false;
      $scope.pass = false;
      if ($scope.isValidUser()) {
        $scope.pass = true;
      }
      else {
        $scope.fail = true;
      }

    };
  });