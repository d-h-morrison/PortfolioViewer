'use strict';

// Declare app level module which depends on views, and components
angular.module('PortfolioViewer', [
  'ngRoute',
  'PortfolioViewer.view1',
  'PortfolioViewer.view2',
  'PortfolioViewer.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
