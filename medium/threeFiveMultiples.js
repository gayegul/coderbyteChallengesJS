/* Have the function ThreeFiveMultiples(num) return the sum
of all the multiples of 3 and 5 that are below num. For
example: if num is 10, the multiples of 3 and 5 that are
below 10 are 3, 5, 6, and 9, and adding them up you get 23,
so your program should return 23. The integer being passed
will be between 1 and 100. */

function ThreeFiveMultiples(num) {
  var result = 0;
  for(var i = 1; i < num; i++) {
   	if(i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}
