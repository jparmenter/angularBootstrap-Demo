'use strict';

angular.module('angularBootstrapDemoApp')
  .controller('MainCtrl', function ($scope, Characters) {
    $scope.singleModel = 1;
    $scope.characters = Characters.data.getCharacters;
  });