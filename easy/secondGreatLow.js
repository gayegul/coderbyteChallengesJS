'use strict';

//Take the array of numbers stored in arr and return the second 
//lowest and second greatest numbers, respectively, separated by space.

function SecondGreatLow(arr) {
  function sortByMagnitude(a, b) {
    if(a > b) {
      return 1;
    }
    else if (b > a) {
      return -1;
    }
    else {
      return 0;
    }
  }

  arr.sort(sortByMagnitude);
  
  var secondLowest, secondGreatest;

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
    secondLowest = arr[i+1];
    break;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if(arr[arr.length-1] !== arr[arr.length-i-1]) {
      secondGreatest = arr[arr.length-i-1];
      break;
    }
  }
  
  return secondLowest + " " + secondGreatest;
}
