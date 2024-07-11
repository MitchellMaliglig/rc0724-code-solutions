'use strict';
/* exported getValues */
function getValues(object) {
  let arr = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
