'use strict';
var charactersServices = angular.module('angularBootstrapDemoApp', ['ngResource']);

charactersServices.factory('Characters', function ($resource) {
  var api = 'http://gateway.marvel.com:80/v1/public/';
  var keys = '?apikey=8bb7d18b23478ba89c7739240cbfacf4&ts=1&hash=e28cc5642354658a649cdd5a07eb3d7d';
  var data = {};

  data.getCharacters = function (){
    return $resource(api + 'characters' + keys);
  };

  return data;
});