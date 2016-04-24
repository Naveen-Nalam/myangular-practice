angular.module('functions1',[
	'functions1Controller',
	'functions1Service',
	'ngRoute'
	],
	['$routeProvider', function($routeProvider){
		$routeProvider.when('/functions1',
			{templateUrl: "/src/functions1/html/functions1.html", controller: "functions1Controller"})
			.otherwise({redirectTo:'/login'});
		}
	]
);
