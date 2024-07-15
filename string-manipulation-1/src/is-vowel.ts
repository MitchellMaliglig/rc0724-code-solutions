/* exported isVowel */
function isVowel(char: string): boolean {
  const str: string = char.toUpperCase();
  if (str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U') {
    return true;
  }
  return false;
}
