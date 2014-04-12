'use strict';

angular.module('angularBootstrap2App')
  .controller('FormCtrl', function ($scope) {
    //Disable = false;
    $scope.user = {firstName: '', lastName: ''};
    // $scope.isValid = function () {
    //     return false;
    //   };

    $scope.submit = function () {
      console.log($scope.user.firstName + ' ' + $scope.user.lastName);
    };
  });