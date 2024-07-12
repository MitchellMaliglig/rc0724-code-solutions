'use strict';
/* exported numVowels */
function numVowels(string) {
  let n = 0;
  let c;
  for (let i = 0; i < string.length; i++) {
    c = string[i].toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      n++;
    }
  }
  return n;
}
