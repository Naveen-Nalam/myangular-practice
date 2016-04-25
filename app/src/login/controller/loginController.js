var appModule= angular.module('loginController',[]);

appModule.controller('loginController', function($scope,loginService,$location,$log,$rootScope,$timeout,$interval) {
			$scope.doLogin = function() {
				console.log("Username "+ $scope.userName+" Password "+ $scope.password);

				/** Timeout function*/
				$timeout(function() {
					console.log("Naveen call timeout");
				},3000);

				/** Repeat interval function**/
				$interval(function(){
					console.log("Naveen repeat interval timeout");
				},2000);

				var loginStatus = loginService.doLogin($scope.userName,$scope.password, function(data){
					$log.info("Response data in controller"+ data);
					$rootScope.bankAccounts=data;
					$rootScope.config = {
					    itemsPerPage: 2,
					    fillLastPage: true
					  };
				$log.info("Root Scope Response data in controller"+ $rootScope.bankAccounts);
					if(data!="") {
						console.log("sucess in controller");
						$location.url("/home");
					} else {
						$log.info("Failure");
						$location.url("/login");
					}

				});
				$location.url("/home");
			};
		}

); 

