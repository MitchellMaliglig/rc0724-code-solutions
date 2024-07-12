'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    let str = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      str += word[i].toLowerCase();
    }
    return str;
  }
}
