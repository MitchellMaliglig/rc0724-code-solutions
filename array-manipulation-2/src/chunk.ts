/* exported chunk */
function chunk(array: unknown[], size: number): unknown[][] {
  const arr: unknown[][] = [];
  let a: unknown[];
  for (let i: number = 0; i < array.length; i += size) {
    a = [];
    for (let j: number = i; j < i + size && j < array.length; j++) {
      a.push(array[j]);
    }
    arr.push(a);
  }
  return arr;
}
