'use strict';

angular.module('app.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/*', {
    controller: 'mainController as main'
  });

  $routeProvider.when('/', {
  	templateUrl: 'cover/cover.html'
  });

  $routeProvider.when('/about', {
    templateUrl: 'about/about.html'
  });

  $routeProvider.when('/flour', {
  	templateUrl: 'stories/flour.html'
  });

  $routeProvider.when('/a-relative', {
  	templateUrl: 'stories/a-relative.html'
  });  

  $routeProvider.when('/aunt-hadas', {
    templateUrl: 'stories/aunt-hadas.html'
  });

  $routeProvider.when('/blind-foyleh', {
    templateUrl: 'stories/blind-foyleh.html'
  });

  $routeProvider.when('/from-the-streets-of-warsaw', {
    templateUrl: 'stories/from-the-streets-of-warsaw.html'
  });  

  $routeProvider.when('/gentile-matters', {
    templateUrl: 'stories/gentile-matters.html'
  });

  $routeProvider.when('/grandmother-from-praga', {
    templateUrl: 'stories/grandmother-from-praga.html'
  });  

  $routeProvider.when('/jewish-houses', {
    templateUrl: 'stories/jewish-houses.html'
  });

  $routeProvider.when('/long-ago', {
    templateUrl: 'stories/long-ago.html'
  });

  $routeProvider.when('/man-and-wife', {
    templateUrl: 'stories/man-and-wife.html'
  });  

  $routeProvider.when('/new-furniture', {
    templateUrl: 'stories/new-furniture.html'
  });

    $routeProvider.when('/old-folks-home', {
    templateUrl: 'stories/old-folks-home.html'
  });  

  $routeProvider.when('/old-mauritz', {
    templateUrl: 'stories/old-mauritz.html'
  });

  $routeProvider.when('/rozhke', {
    templateUrl: 'stories/rozshke.html'
  });  

  $routeProvider.when('/the-bath-house', {
    templateUrl: 'stories/the-bath-house.html'
  });

  $routeProvider.when('/the-gentile-girl', {
    templateUrl: 'stories/the-gentile-girl.html'
  });

  $routeProvider.when('/the-shtroisfeder-family', {
    templateUrl: 'stories/the-shtroisfeder-family.html'
  });  

  $routeProvider.when('/the-wise-one', {
    templateUrl: 'stories/the-wise-one.html'
  });
  $routeProvider.when('/very-personal-regards', {
    templateUrl: 'stories/very-personal-regards.html'
  });  

  $routeProvider.when('/were-not-leaving-yet', {
    templateUrl: 'stories/were-not-leaving-yet'
  });





}])

