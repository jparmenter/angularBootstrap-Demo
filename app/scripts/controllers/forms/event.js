'use strict';

angular.module('angularBootstrap2App')
  .controller('EventCtrl', function ($scope) {
    var _date = new Date();
    $scope.event = {name: '', description: '', date: _date};
    $scope.Events = [];
    $scope.submit = function (obj) {
      $scope.Events.push(obj);
    };
  });