'use strict';

//For this challenge you will be manipulating
//a string using dashes (-) "1235789" -> "123-5-789"

function DashInsert(str) {
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++) {
    if(Number(arr[i])%2 !== 0 && i !== arr.length-1 && Number(arr[i+1])%2 !== 0) {
       arr[i] = arr[i] + '-';
    }
  }
  return arr.join("");
}
