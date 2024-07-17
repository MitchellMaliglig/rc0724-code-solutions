/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const arr: unknown[] = [];
  let index: number;
  if (array.length > 0) {
    if (array.length - count < 0) {
      index = 0;
    } else {
      index = array.length - count;
    }
    for (let i: number = array.length - 1; i >= index; i--) {
      arr.unshift(array[i]);
    }
  }
  return arr;
}
