'use strict';

/* Take the array of numbers stored in arr and determine
  the total number of duplicate entries. For example if
  the input is [1, 2, 2, 2, 3] then your program should
  output 2 because there are two duplicates of one of the
  elements.
*/

function DistinctList(arr) {
  var numbersSeen = {};
  var repeat = 0;
  for(var i = 0; i < arr.length; i++) {
    if(numbersSeen[arr[i]]) {
      repeat++;
    } else {
      numbersSeen[arr[i]] = 1;
    }
  }
  return repeat;
}
//runtime complexity:O(n)

function DistinctList(arr) {
  arr.sort(function sortArr(a, b) {
    return a - b;
  });
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      result++;
    }
  }
  return result;
}
//runtime complexity:O(nlogn) (no good)
