/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      arr.push(values[i]);
    }
  }
  return arr;
}
