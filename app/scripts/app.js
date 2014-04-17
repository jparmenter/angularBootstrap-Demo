'use strict';

angular.module('angularBootstrap2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/About', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl'
      })
      .when('/Form', {
        templateUrl: 'partials/form'
      })
      .when('/File', {
        templateUrl: 'partials/file'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });