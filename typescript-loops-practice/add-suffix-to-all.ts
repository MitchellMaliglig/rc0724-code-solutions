/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const arr: string[] = [];
  for (let i: number = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
}
