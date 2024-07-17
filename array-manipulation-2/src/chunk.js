'use strict';
/* exported chunk */
function chunk(array, size) {
  let arr = [];
  let a;
  for (let i = 0; i < array.length; i += size) {
    a = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      a.push(array[j]);
    }
    arr.push(a);
  }
  return arr;
}
