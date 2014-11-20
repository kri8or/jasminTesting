/*global define*/
define(function(){
	'use strict';

	var self = {};
	
	self.add=function add(){
		
		//operands will be an array containing the paremeters of add()
		var operands= Array.prototype.slice.call(arguments),
		total = 0;

		operands.forEach(function(value){
			total+=value;
		});

		return total;


	};

	return self;
});