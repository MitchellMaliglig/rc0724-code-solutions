/* exported compact */
function compact(array: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      !Number.isNaN(array[i]) &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== ''
    ) {
      arr.push(array[i]);
    }
  }
  return arr;
}
