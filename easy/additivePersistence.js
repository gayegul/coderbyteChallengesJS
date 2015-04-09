'use strict';

//For this challenge you will be determining 
//the additive persistence for a given number.
//29 -> 2+9=11, 11 -> 1+1=2, answer = 2 times

function AdditivePersistence(num) { 
  var newArr = num.toString().split(""); 
  var counter = 0;
  while(newArr.length > 1) {
    var sum = 0;
    for (var i = 0; i < newArr.length; i++) {
      sum += Number(newArr[i]);
    }
    counter++;
    newArr = sum.toString().split("");
  }
  return counter;
}