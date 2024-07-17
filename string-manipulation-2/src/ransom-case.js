'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 0) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
