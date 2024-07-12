/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void {
  const set: Set<string> = new Set();
  for (const k in target) {
    set.add(k);
  }
  for (const k in source) {
    if (!set.has(k)) {
      target[k] = source[k];
    }
  }
}
