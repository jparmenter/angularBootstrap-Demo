'use strict';

angular.module('angularBootstrapDemoApp', ['ngCookies','ngResource','ngSanitize','ngRoute','ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
