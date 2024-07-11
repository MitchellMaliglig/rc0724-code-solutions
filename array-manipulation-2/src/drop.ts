/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const arr: unknown[] = [];
  if (array.length > 0) {
    for (let i: number = count; i < array.length; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
