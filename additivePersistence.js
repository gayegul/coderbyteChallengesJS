'use strict';

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