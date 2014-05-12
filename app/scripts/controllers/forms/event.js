'use strict';

angular.module('angularBootstrapApp')
  .controller('EventCtrl', function ($scope) {
    var _date = new Date();
    $scope.event = {name: '', description: '', date: _date};
    $scope.events = [{name:'Program',description:'write a program', date:_date}];
    $scope.submit = function () {
      $scope.events.push({name:$scope.event.name, description:$scope.event.description, date:$scope.event.date});
    };
  });