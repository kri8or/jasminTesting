
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
			
			var output;

			beforeEach(function(){
				this.numInput1 =1;
				this.numInput2 =2;
				this.stringInput1 ='1';
				this.stringInput2 ='ups';
			});
			

			it('should accept one or more args and return the sum them', function(){
					
				//act	
				output = numeros.add(this.numInput1,this.numInput2);

				//assert
				expect(output).toEqual(3);
				expect(output).not.toEqual(4);
			});

			it('should try to parse an integer when a string is in input', function(){
				
				//act	
				output = numeros.add(this.numInput1,this.numInput2,this.stringInput1);

				//assert
				expect(output).toEqual(4);
			});

			it('should ignore strings not parsable to integers', function(){
				
				
				//act	
				output = numeros.add(this.numInput1,this.numInput2,this.stringInput2);

				//assert
				expect(output).toEqual(3);
				
			});
			
		});

		

	});
});
