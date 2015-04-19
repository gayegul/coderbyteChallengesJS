'use strict';

/* Take the str parameter and perform a Caesar Cipher shift on
  it using the num parameter as the shifting number. Punctuation,
  spaces, and capitalization should remain intact. For example
  if the string is "Caesar Cipher" and num is 2 the output should
  be "Ecguct Ekrjgt".
*/

var alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function CaesarCipher(str, num) {
  var result = "";
  for(var i = 0; i < str.length; i++) {
    var index = alp.indexOf(str[i]);
    if(index !== -1) {
      var offset = (index >= 26) ? 26 : 0;
      result += alp[offset + ((index + num) % 26)];
    }
    else {
      result += str[i];
    }
  }
  return result;
}


/* BEFORE REFACTOR

var alp = "abcdefghijklmnopqrstuvwxyz";
var alpUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function CaesarCipher(str, num) {
  var result = "";
  for(var i = 0; i < str.length; i++) {
    var index = alp.indexOf(str[i]);
    var upperIndex = alpUpper.indexOf(str[i]);
    if(index !== -1) {
      result += alp[(index + num) % 26];
    }
    else if(upperIndex !== -1) {
      result += alpUpper[(upperIndex + num) % 26];
    }
    else {
      result += str[i];
    }
  }
  return result;
}
*/
