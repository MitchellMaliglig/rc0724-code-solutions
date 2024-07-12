'use strict';
/* exported omit */
function omit(source, keys) {
  let o = {};
  let set = new Set();
  for (const k in source) {
    set.add(k);
  }
  for (const k in keys) {
    if (set.has(keys[k])) {
      set.delete(keys[k]);
    }
  }
  set.forEach((value) => {
    o[value] = source[value];
  });
  return o;
}
