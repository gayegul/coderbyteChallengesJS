'use strict';

//return the decimal form of the binary value. For example:
//if 101 is passed return 5, or if 1000 is passed return 8.

function BinaryConverter(str) {
  var result = 0;
  var powerOfTwo = 0;
  for(var i = str.length-1; i >= 0; i--) {
    result += str[i] === "1" ? Math.pow(2, powerOfTwo) : 0;
    powerOfTwo++;
  }
  return result;
}
