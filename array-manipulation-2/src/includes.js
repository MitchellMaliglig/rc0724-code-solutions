'use strict';
/* exported includes */
function includes(array, value) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
