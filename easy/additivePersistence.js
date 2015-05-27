/* For this challenge you will be determining
the additive persistence for a given number.
29 -> 2+9=11, 11 -> 1+1=2, answer = 2 times. */

function AdditivePersistence(num) {
  if(num < 10) {
    return 0;
  }
  var counter = 0;
  while(num >= 10) {
  	num = addTogether(num);
    counter++;
  }
  return counter;
}

function addTogether(num) {
  var arr = num.toString().split("");
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }
  return total;
}
