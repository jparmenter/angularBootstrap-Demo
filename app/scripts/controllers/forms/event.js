'use strict';

angular.module('angularBootstrap2App')
  .controller('DateCtrl', function ($scope) {
    $scope.event = {name: '', description: '', date: ''};
  });