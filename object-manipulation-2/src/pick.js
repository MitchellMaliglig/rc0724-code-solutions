'use strict';
/* exported pick */
function pick(source, keys) {
  let o = {};
  for (const k1 in source) {
    for (const k2 in keys) {
      if (k1 === keys[k2] && source[k1] !== undefined) {
        o[k1] = source[keys[k2]];
      }
    }
  }
  return o;
}
