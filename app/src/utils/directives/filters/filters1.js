var numberFilterApp=angular.module('filters',[]);
numberFilterApp.filter('mycurrency', function() {

	return function(input) {
		return ('$USD '+input);
	}
});

