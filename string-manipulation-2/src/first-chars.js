'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let str = '';
  for (let i = 0; i < length && i < string.length; i++) {
    str += string[i];
  }
  return str;
}
