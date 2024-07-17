/* exported lastChars */
function lastChars(length: number, string: string): string {
  const strArr: string[] = [];
  let str: string = '';
  for (
    let i: number = string.length - 1;
    i >= 0 && i >= string.length - length;
    i--
  ) {
    strArr.unshift(string[i]);
  }
  for (let i: number = 0; i < strArr.length; i++) {
    str += strArr[i];
  }
  return str;
}
