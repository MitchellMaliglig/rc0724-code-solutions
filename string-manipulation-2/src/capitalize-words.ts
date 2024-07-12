/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const arr: string[] = string.split(' ');
  let str: string = '';
  for (let i: number = 0; i < arr.length; i++) {
    str += capitalizeWord(arr[i]) + ' ';
  }
  return str.trimEnd();
}
