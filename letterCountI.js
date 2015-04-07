
function maxRepetition(word) {
  var maxNumber = 0;
  var counts = {};
  for(var j = 0; j < word.length; j++) {
      if(counts[word[j]]) {
        counts[word[j]]++;
      } else {
      	counts[word[j]] = 1;
      }
      if (counts[word[j]] > maxNumber) {
      	maxNumber = counts[word[j]];
      }
    }
	return maxNumber;
}

function LetterCountI(str) {
  var words = str.split(" ");
  var maxNumberLetters = 0;
  var result;
  for(var i = 0; i < words.length; i++) {
    var reps = maxRepetition(words[i]);
	if(reps > maxNumberLetters) {
    	maxNumberLetters = reps;
        result = words[i];
    }
  }
  return maxNumberLetters === 1 ? -1 : result;
}
