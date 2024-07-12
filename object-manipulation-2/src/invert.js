'use strict';
/* exported invert */
function invert(source) {
  let o = {};
  for (const k in source) {
    o[source[k]] = k;
  }
  return o;
}
