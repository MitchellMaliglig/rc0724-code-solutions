'use strict';
/* exported isVowel */
function isVowel(char) {
  let str = char.toUpperCase();
  if (str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U') {
    return true;
  }
  return false;
}
