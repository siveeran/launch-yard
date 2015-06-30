// Defined module and routes configuration options
var lyportal = angular.module('LaunchYardApp', [
	'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/home', {
	 templateUrl: 'views/home.html',
	 controller: 'HomeCtrl'
  })
 .when('/brainstorm', {
	 templateUrl: 'views/brainstorm.html',
	 controller: 'BrainStormCtrl'
  })
  .when('/platform', {
	 templateUrl: 'views/platform.html',
	 controller: 'PlatformCtrl'
  })
  .when('/landing', {
	 templateUrl: 'views/landing.html',
	 controller: 'LandingCtrl'
  })
   .when('/statistics', {
	 templateUrl: 'views/statistics.html',
	 controller: 'StatisticsCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
});