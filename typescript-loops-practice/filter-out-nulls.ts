/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = 0; i < values.length; i++) {
    if (values[i] != null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
