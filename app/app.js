'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('app', [
    'ngRoute',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'app.version'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});

  }]);
