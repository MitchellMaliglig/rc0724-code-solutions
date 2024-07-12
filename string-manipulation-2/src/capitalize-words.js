'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  let arr = string.split(' ');
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += capitalizeWord(arr[i]) + ' ';
  }
  return str.trimEnd();
}
