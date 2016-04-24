angular.module('functions1Service',[]).factory('functions1Service',function() {

	return {

		convertCaps: function(input){
			console.log("value is"+input);
			var output="";

			output = input+" is append";
			return output;
		}
	};

});



