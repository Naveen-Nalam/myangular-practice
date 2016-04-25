describe('Filters',function(){

beforeEach(module('filters'));
	describe('mycurrency', function(){

			var  mycurrency;

			beforeEach(inject(function($filter){
				mycurrency = $filter('mycurrency',{});
			}));

			it('should we add currency string', function(){
				expect(mycurrency('1234')).toBe('$USD 1234');
			});
	});

});