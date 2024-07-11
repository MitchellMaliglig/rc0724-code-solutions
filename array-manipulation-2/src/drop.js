'use strict';
/* exported drop */
function drop(array, count) {
  let arr = [];
  if (array.length > 0) {
    for (let i = count; i < array.length; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
