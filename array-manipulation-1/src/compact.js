'use strict';
/* exported compact */
function compact(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      !Number.isNaN(array[i]) &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== ''
    ) {
      arr.push(array[i]);
    }
  }
  return arr;
}
