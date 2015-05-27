// Have the function TripleDouble(num1,num2) take both
// parameters being passed, and return 1 if there is a
// straight triple of a number at any place in num1 and
// also a straight double of the same number in num2. For
// example: if num1 equals 451999277 and num2 equals
// 41177722899, then return 1 because in the first parameter
// you have the straight triple 999 and you have a straight
// double, 99, of the same number in the second parameter.
// If this isn't the case, return 0.

function TripleDouble(num1,num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  var tracker = num1[0];
  var counter = 0;
  var counter2 = 0;
  for(var i = 0; i < num1.length; i++) {
    tracker = num1[i];
    if(num1[i] === num1[i+1] || num1[i-1] === num1[i]) {
      counter++;
      if(counter === 3) {
        for(var j = 0; j < num2.length; j++) {
          if(num2[j] === tracker) {
            counter2++;
            if(counter2 === 2) {
              return 1;
            }
          } else {
            counter2 = 0;
          }
        }
       }
      else if(!num1[i+1] || num1[i] !== num1[i+1]) {
       counter = 0;
      }
     }
   }
  return 0;
}


// A much more elegant way to solve it inspired by another coder

function TripleDouble(num1,num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  var result = [];

  for(var i=0; i < num1.length; i++) {
    if(num1[i] === num1[i+1] && num1[i+1] === num1[i+2]) {
      result.push(num1[i]);
    }
  }
  for(var j=0; j < num2.length; j++) {
    if(num2[j] === num2[j+1] && result.indexOf(num2[j]) >= 0) {
      return 1;
    }
  }

  return 0;
}

// Regex power

function TripleDouble(num1,num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  var regex = /(\d)(\1\1)/g;
  var match = regex.exec(num1);
  while(match) {
    if(num2.indexOf(match[2]) !== -1) {
      return 1;
    }
    match = regex.exec(num1);
  }
  return 0;
}
