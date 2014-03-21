'use strict';

angular.module('angularBootstrapDemoApp')
  .controller('MainCtrl', function ($scope, Characters) {
    $scope.singleModel = 1;
    $scope.characters = {};
    $scope.characters = Characters.getCharacters.query();
  });