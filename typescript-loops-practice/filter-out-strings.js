'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] != 'string') {
      arr.push(values[i]);
    }
  }
  return arr;
}
