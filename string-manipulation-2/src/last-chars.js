'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let strArr = [];
  let str = '';
  for (let i = string.length - 1; i >= 0 && i >= string.length - length; i--) {
    strArr.unshift(string[i]);
  }
  for (let i = 0; i < strArr.length; i++) {
    str += strArr[i];
  }
  return str;
}
