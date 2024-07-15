'use strict';
/* exported countdown */
function countdown(num) {
  let arr = [num];
  while (arr[arr.length - 1] > 0) {
    arr.push(arr[arr.length - 1] - 1);
  }
  return arr;
}
