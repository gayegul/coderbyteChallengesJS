'use strict';

//search for all the numbers in the string, add them together, 
//then return that final number. For example: if str is 
//"88Hello 3World!" the output should be 91.

function NumberAddition(str) { 
  var splittedStr = str.split(/\D+/); 
  var result = 0;
  for (var i = 0; i < splittedStr.length; i++) {
	result += Number(splittedStr[i]);
  }
  return result;        
}