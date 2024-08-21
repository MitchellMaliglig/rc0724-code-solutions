/* exported invert */
function invert(source: Record<string, string>): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  for (const k in source) {
    o[source[k]] = k;
  }
  return o;
}
