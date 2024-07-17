/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const arr: unknown[] = [];
  if (array.length > 0 && count < array.length) {
    for (let i: number = 0; i < array.length - count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
