angular.module('login',[
	'loginController',
	'loginService',
	'ngRoute'
],
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/login", {templateUrl: "/src/login/html/login.html", controller: "loginController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/login'});
}]);