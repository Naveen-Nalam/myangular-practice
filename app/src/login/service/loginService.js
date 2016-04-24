angular.module('loginService',[]).factory("loginService",['$http','$log', function($http,$log) {
		return {
				
				doLogin: function(userName, password, callback) {
						console.log("Login loginService "+ userName+" password "+ password);
						var bankAccounts="";
						if(userName==password) {
							console.log("Sucess in service layer");
						
						var config= {
							headers: {
								'Accept':'application/json',
								'Content-type':'applciation/json'
							}
						};

						$http({
							method:'GET',
							url:'http://localhost:1111/accounts',
						}).then(function (response) {
							$log.info(response.data);
							bankAccounts=response.data;
							callback(response.data);
							return "SUCCESS";
						}, function(reason) {
							bankAccounts=reason.data;
							callback(reason.data);
							return "FAIL";
						});
					}
					
				}
		};

}]);