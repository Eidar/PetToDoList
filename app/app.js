(function () {
  'use strict';

  // Declare app level module which depends on views, and core components
  angular.module('app', [
      'ngRoute',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'app.version',
      'app.core',
      'app.directives',
      'app.services',
      'app.components'
  ]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        controller: 'homeController',
        templateUrl: 'components/home/home.template.html'
      })      
      .otherwise({redirectTo: '/'});

  }]);

  angular.module('app.core', []);
  angular.module('app.directives', []);
  angular.module('app.services', []);
  angular.module('app.components', []);

  
}());
