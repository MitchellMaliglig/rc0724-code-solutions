/* exported capitalize */
function capitalize(word: string): string {
  let str: string = word[0].toUpperCase();
  for (let i: number = 1; i < word.length; i++) {
    str += word[i].toLowerCase();
  }
  return str;
}
