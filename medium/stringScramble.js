'use strict';

/*
Take both parameters being passed and return the
string true if a portion of str1 characters can be
rearranged to match str2, otherwise return the
string false.
*/

function StringScramble(str1,str2) {
  var count = {};

  for(var i = 0; i < str1.length; i++) {
    if(count[str1[i]]) {
      count[str1[i]]++;
    } else {
      count[str1[i]] = 1;
    }
  }

  for(var j = 0; j < str2.length; j++) {
    if (!count[str2[j]]) {
      return false;
    } else {
      count[str2[j]]--;
    }
  }
  return true;
}
