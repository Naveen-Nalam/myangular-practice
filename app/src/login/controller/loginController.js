var appModule= angular.module('loginController',[]);

appModule.controller('loginController', function($scope,loginService,$location,$log,$rootScope) {
			$scope.doLogin = function() {
				console.log("Username "+ $scope.userName+" Password "+ $scope.password);
				var loginStatus = loginService.doLogin($scope.userName,$scope.password, function(data){
					$log.info("Response data in controller"+ data);
					$rootScope.bankAccounts=data;
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