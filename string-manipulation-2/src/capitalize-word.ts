/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    let str: string = word[0].toUpperCase();
    for (let i: number = 1; i < word.length; i++) {
      str += word[i].toLowerCase();
    }
    return str;
  }
}
