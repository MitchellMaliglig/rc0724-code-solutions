/* exported initial */
function initial(array: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
