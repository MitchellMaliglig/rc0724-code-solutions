/* exported numVowels */
function numVowels(string: string): number {
  let n: number = 0;
  let c: string;
  for (let i: number = 0; i < string.length; i++) {
    c = string[i].toLowerCase();
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      n++;
    }
  }
  return n;
}
