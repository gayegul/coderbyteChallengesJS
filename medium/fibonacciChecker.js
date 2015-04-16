/*
Return the string yes if the number given is part of the
Fibonacci sequence. This sequence is defined by:
Fn = Fn-1 + Fn-2, which means to find Fn you add
the previous two numbers up. The first two numbers
are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not
in the Fibonacci sequence, return the string no.
*/

function FibonacciChecker(num) {
fibNumbers = [0,1];
for (var i = 0; i <= num; i++) {
  var nextFib = fibNumbers[i] + fibNumbers[i+1];
  fibNumbers.push(nextFib);
  if(fibNumbers.indexOf(num) !== -1) {
    return "yes";
  }
}
return "no";
}
