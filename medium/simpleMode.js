'use strict';

/*
take the array of numbers stored in arr and return the number
that appears most frequently (the mode). For example: if arr
contains [10, 4, 5, 2, 4] the output should be 4. If there is
more than one mode return the one that appeared in the array
first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared
first). If there is no mode return -1.
*/

function SimpleMode(arr) {
  var numbers = {};
  var biggestNumber = 1;
  var result;
  for (var i = 0; i < arr.length; i++) {
    if(!numbers[arr[i]]) {
      numbers[arr[i]] = 1;
    } else {
      numbers[arr[i]]++;
      if(biggestNumber < numbers[arr[i]]) {
        biggestNumber = numbers[arr[i]];
        result = arr[i];
      }
    }
  }
  return biggestNumber === 1 ? -1 : result;
}
