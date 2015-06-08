'use strict';

angular.module('PortfolioViewer.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
     // alert("View1.js!"); /* This is the active view.  Uncomment the alert to demo.*/
}]);