/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const arr: string[] = [];
  for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      arr.push('odd');
    } else {
      arr.push('even');
    }
  }
  return arr;
}
