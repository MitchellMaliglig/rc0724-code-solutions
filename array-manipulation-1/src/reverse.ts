/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
