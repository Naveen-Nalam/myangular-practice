angular.module('home',[
	'homeController',
	'ngRoute'
],
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/home", {templateUrl: "/src/home/html/home.html", controller: "homeController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/home'});
}]);