/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const arr: unknown[] = [];
  if (array.length > 0) {
    for (let i: number = 0; i < count; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
