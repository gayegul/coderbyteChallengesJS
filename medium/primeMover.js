'use strict';

//Have the function PrimeMover(num) return the numth prime number.
//9th prime number is 23

function PrimeMover(num) {
  var primes = [2];
  var isPrime = function(num) {
    for (var i = 2; i < num; i++) {
        if (num%i === 0) {
          return false;
        }
    }
    return true;
  }

  var numberOfPrimesSoFar = 1;
  var j = 3;
  do {
    if (isPrime(j)) {
      numberOfPrimesSoFar++;
      if(numberOfPrimesSoFar == num) {
        return j;
      }
    }
    j++;
  } while (true);
}
