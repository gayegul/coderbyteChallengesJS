'use strict';

/*
Take the array of integers stored in arr and return the minimum
number of integers needed to make the contents of arr consecutive
from the lowest number to the highest number.
*/

function Consecutive(arr) {
  var counter = 0;
  for(var i = 0; i < arr[arr.length-1]; i++) {
    while(arr[i] + 1 !== arr[i+1] || arr[i] - 1 !== arr[i+1]) {
      if(arr[i] + 1 < arr[i+1]) {
        counter++;
        arr[i] = arr[i] + 1;
      }
      else if (arr[i] - 1 > arr[i+1]) {
        counter++;
        arr[i] = arr[i] - 1;
      }
    }
  }
  return counter;
}
