/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let str: string = '';
  const c1: string = string[firstIndex];
  const c2: string = string[secondIndex];
  for (let i: number = 0; i < string.length; i++) {
    if (i === firstIndex) {
      str += c2;
    } else if (i === secondIndex) {
      str += c1;
    } else {
      str += string[i];
    }
  }
  return str;
}
