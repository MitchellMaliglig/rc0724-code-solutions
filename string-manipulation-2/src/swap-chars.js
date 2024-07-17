'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let str = '';
  let c1 = string[firstIndex];
  let c2 = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      str += c2;
    } else if (i === secondIndex) {
      str += c1;
    } else {
      str += string[i];
    }
  }
  return str;
}
