/* exported firstChars */
function firstChars(length: number, string: string): string {
  let str: string = '';
  for (let i: number = 0; i < length && i < string.length; i++) {
    str += string[i];
  }
  return str;
}
