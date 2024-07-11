'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let arr = [];
  let index;
  if (array.length > 0) {
    if (array.length - count < 0) {
      index = 0;
    } else {
      index = array.length - count;
    }
    for (let i = array.length - 1; i >= index; i--) {
      arr.unshift(array[i]);
    }
  }
  return arr;
}
