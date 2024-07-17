'use strict';
/* exported take */
function take(array, count) {
  let arr = [];
  if (array.length > 0) {
    for (let i = 0; i < count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
