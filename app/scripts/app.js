'use strict';

angular.module('angularBootstrapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
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
      .when('/Forms/form', {
        templateUrl: 'partials/forms/form',
        controller: 'FormCtrl'
      })
      .when('/Forms/File', {
        templateUrl: 'partials/forms/file'
      })
      .when('/Forms/Event', {
        templateUrl: 'partials/forms/event',
        controller: 'EventCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });