'use strict';

/* Take the str parameter and perform a Caesar Cipher shift on
  it using the num parameter as the shifting number. Punctuation,
  spaces, and capitalization should remain intact. For example
  if the string is "Caesar Cipher" and num is 2 the output should
  be "Ecguct Ekrjgt".
*/

function CaesarCipher(str,num) {
  str = str.split("");
  var result = "";
  var alp = "abcdefghijklmnopqrstuvwxyz".split("");
  var alpUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for(var i = 0; i < str.length; i++) {
    if(alp.indexOf(str[i]) !== -1) {
      result += alp[(alp.indexOf(str[i]) + num) % 26];
    }
    else if(alpUpper.indexOf(str[i]) !== -1) {
      result += alpUpper[(alpUpper.indexOf(str[i]) + num) % 26];
    }
    else {
      result += str[i];
    }
  }
  return result;
}
