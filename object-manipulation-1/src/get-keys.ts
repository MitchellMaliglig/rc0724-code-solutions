/* exported getKeys */
function getKeys(object: any): any {
  const arr: string[] = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
