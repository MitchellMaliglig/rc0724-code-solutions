'use strict';
/* exported dropRight */
function dropRight(array, count) {
  let arr = [];
  if (array.length > 0 && count < array.length) {
    for (let i = 0; i < array.length - count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
