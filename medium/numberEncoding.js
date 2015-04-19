'use strict';

/* take the str parameter and encode the message according
to the following rule: encode every letter into its
corresponding numbered position in the alphabet. Symbols
and spaces will also be used in the input. For example:
if str is "af5c a#!" then your program should return 1653 1#!
*/

var alp = "abcdefghijklmnopqrstuvwxyz";

function NumberEncoding(str) {
  var result = "";
  for(var i = 0; i < str.length; i++) {
    var index = alp.indexOf(str[i]);
    result += index !== -1 ? index + 1 : str[i];
  }
  return result;
}
