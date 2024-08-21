'use strict';
/* exported defaults */
function defaults(target, source) {
  let set = new Set();
  for (const k in target) {
    set.add(k);
  }
  for (const k in source) {
    if (!set.has(k)) {
      target[k] = source[k];
    }
  }
}
