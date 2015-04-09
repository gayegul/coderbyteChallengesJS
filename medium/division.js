'use strict';
//return the greatest common factor of two numbers if num1= 30
//and num2=15 then result=15

function Division(num1, num2) {
  var greatestSoFar = 1;
  var min = Math.min(num1, num2);
  for(var i = 2; i <= min; i++) {
    if(num1%i === 0 && num2%i === 0) {
      greatestSoFar = i;
    }
  }
  return greatestSoFar;
}
