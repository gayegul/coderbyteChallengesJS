'use strict';

function LetterCount(str) {
  var arr = str.split(" ");
  var counter = {};
  var maxNumber = 0;
  var result;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if(!counter.arr[i]) {
        counter.arr[i] = 1;
      } else {
        counter.arr[i]++;
      }
    }
    if(counter.arr[i] > maxNumber) {
      maxNumber = counter.arr[i];
      result = arr[i];
    }
  }
  return result;
}
   
//something is fucked up yo

function LetterCount(str) {
  var arr = str.split(" ");
  var counter = {};
  var maxNumber = 0;
  var result;
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if(!counter[arr[i]]) {
        counter[arr[i]] = 1;
      } else {
        counter[arr[i]]++;
      }
    }
    if(counter[arr[i]] > maxNumber) {
      maxNumber = counter[arr[i]];
      result = arr[i];
    }
  }
  return maxNumber === 1 ? -1 : result;
}