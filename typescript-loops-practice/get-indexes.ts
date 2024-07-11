/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const arr: number[] = [];
  for (let i: number = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}
