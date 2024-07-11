'use strict';
/* exported getKeys */
function getKeys(object) {
  let arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
