/* exported tail */
function tail(array: unknown[]): unknown[] {
  const arr: unknown[] = [];
  for (let i: number = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
