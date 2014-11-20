
define(['numeros'],function(numeros){
	'use strict';

	describe('O modulo dos numeros',function(){
		
		xdescribe('this is how to hide a complete test suite',function(){
			
			it('whatever', function(){
				
			});
			it('whatever1', function(){
				
			});
			it('whatever2', function(){
				
			});	

			it('this is how you make a pending test', function(){
				pending();
			});
			xit('this is another way how you make a pending test', function(){
				
			});

		});


		describe('metodo adicionar',function(){
			
			

			it('should accept one or more args and return the sum them', function(){
				
				//arrange
				var output,
					input1=1,
					input2=2;
				
				//act	
				output = numeros.add(input1,input2);

				//assert
				expect(output).toEqual(3);
				expect(output).not.toEqual(4);
			});
			
		});

		

	});
});
