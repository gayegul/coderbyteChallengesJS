'use strict';

/*
Take the array of integers stored in arr and return the minimum
number of integers needed to make the contents of arr consecutive
from the lowest number to the highest number.
*/

function Consecutive(arr) {
  arr.sort(function(a, b) {
    return a-b;
  });

  var counter = 0;
  var lowest = arr[0];
  var highest = arr[arr.length-1];

  while(lowest + 1 < highest) {
    if (arr.indexOf(lowest + 1) === -1) {
      counter++;
    }
    lowest += 1;
  }

  return counter;
}
