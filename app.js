'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngMaterial'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])
  .controller('IndexController', function() {
  });
