var navigationModule=angular.module('navigation',[]);
navigationModule.directive('topNavigation',function (){
	return {
		// specifies element directive
		restrict: 'EA' ,
		templateUrl: '/src/utils/directives/navigation/navigation.html'
	}
})