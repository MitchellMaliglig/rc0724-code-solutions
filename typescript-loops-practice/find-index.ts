/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
