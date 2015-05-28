// Have the function MultipleBrackets(str) take the str parameter
// being passed and return 1 #ofBrackets if the brackets are correctly
// matched and each one is accounted for. Otherwise return 0. For example:
// if str is "(hello [world])(!)", then the output should be 1 3 because
// all the brackets are matched and there are 3 pairs of brackets, but if
// str is "((hello [world])" the the output should be 0 because the brackets
// do not correctly match up. Only "(", ")", "[", and "]" will be used as
// brackets. If str contains no brackets return 1.


function MultipleBrackets(str) {
  var counter = 0;
  var stack = [];
  var bracketTracker = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "("  || str[i] === "[") {
     stack.push(str[i]);
     counter++;
    } else {
       if(str[i] === ")") {
         if(stack.pop() !== "(") {
          return 0;
         }
       }
       else if(str[i] === "]") {
         if(stack.pop() !== "[") {
          return 0;
         }
       }
    }
  }
  if(stack.length !== 0) {
    return 0;
  } else {
  	return counter === 0 ? "1" : 1 + " " + counter;
  }
}

// Another way to solve using Switch
function MultipleBrackets(str) {
  var counter = 0;
  var stack = [];
  var bracketTracker = 0;
  for(var i = 0; i < str.length; i++) {
    var toMatch = "[";
    switch(str[i]) {
      case "(":
      case "[":
        stack.push(str[i]);
        counter++;
        break;
      case ")":
        toMatch = "(";
      case "]":
        if(stack.pop() !== toMatch) {
         return 0;
        }
    }
  }
  if(stack.length !== 0) {
    return 0;
  } else {
  	return counter === 0 ? "1" : 1 + " " + counter;
  }
}
