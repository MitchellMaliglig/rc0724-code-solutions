/* exported countdown */
function countdown(num: number): number[] {
  const arr: number[] = [num];
  while (arr[arr.length - 1] > 0) {
    arr.push(arr[arr.length - 1] - 1);
  }
  return arr;
}
