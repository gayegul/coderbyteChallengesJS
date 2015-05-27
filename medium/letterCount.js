function countLetters(str) {
  var container = {};
  var maxLetterNumber = 0;
  for(var i = 0; i < str.length; i++) {
    if(!container[str[i]]) {
      container[str[i]] = 1;
    } else {
      container[str[i]]++;
    }
    if(maxLetterNumber < container[str[i]]) {
      maxLetterNumber = container[str[i]];
    }
  }
  return maxLetterNumber;
}

function LetterCount(str) {
  str = str.split(" ");
  var maxNumberOfReps = 0;
  var result;
  for (var i = 0; i < str.length; i++) {
    if(countLetters(str[i]) > maxNumberOfReps) {
      maxNumberOfReps = countLetters(str[i]);
      result = str[i];
    }
  }
  return maxNumberOfReps === 1 ? -1 : result;
}
