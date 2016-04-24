var functions1Ctrl=angular.module('functions1Controller',[]);

functions1Ctrl.controller('functions1Controller', function($scope,functions1Service,$location,$filter) {

		$scope.convertCaps = function() {

				console.log("Input text content is\t"+ $scope.input);
					var inputData = $scope.input;

					if(!inputData){
						return "Empty Naveen";
					} 
					var serviceString = functions1Service.convertCaps(inputData);
					$scope.output=$filter('uppercase')(serviceString);
		};
}

);

