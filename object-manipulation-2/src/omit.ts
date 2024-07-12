/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  const set: Set<string> = new Set();
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
