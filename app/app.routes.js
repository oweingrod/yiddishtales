'use strict';

angular.module('app.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'About'
  });

  $routeProvider.when('/flour', {
  	templateUrl: 'flour/flour.html'
  });

  


}])

