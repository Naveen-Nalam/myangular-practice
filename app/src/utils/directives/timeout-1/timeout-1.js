var timeoutApp = angular.module('timeout-1',[]);
timeout.controller('timeout-1Controller',['$timeout','$log', function($timeout, $log){

	var vm = this;
	var timeoutPromise= null;
	vm.message="No timeout scheduled";
	vm.delay="2000";

	vm.startTimeout = function(){
		vm.message = '';
		vm.cancelTimeOut();
		vm.message+ ="Started Timeout";

		timeoutPromise = $timeout(function(data){
			vm.message= 'Timeout completed';
			timeoutPromise = null;
		},vm.delay,true,{data:'testing123'});

	};

	vm.cancelTimeOut = function(){
		if(timeoutPromise) {
			$timeout.cancel(timeoutPromise);
			timeoutPromise = null;
			vm.message = "Previous timeout complated";
		}
	};
}]);