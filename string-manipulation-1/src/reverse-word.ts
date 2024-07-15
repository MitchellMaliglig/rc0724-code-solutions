/* exported reverseWord */
function reverseWord(word: string): string {
  let str: string = '';
  for (let i: number = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}
