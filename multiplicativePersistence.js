'use strict';

function MultiplicativePersistence(num) { 
  var counter = 0;
  var numArray;
  while(num > 9){
	var starter = 1;
    numArray = num.toString().split("");
  	for (var i = 0; i < numArray.length; i++){ 
      starter *= Number(numArray[i]);	
  	}
    counter++;
    num = starter;
  }
  return counter;
};