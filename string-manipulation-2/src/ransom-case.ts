/* exported ransomCase */
function ransomCase(string: string): string {
  let str: string = '';
  for (let i: number = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
