/* exported getValues */
function getValues(object: { [x: string]: string }): any {
  const arr: string[] = [];
  for (const key in object) {
    arr.push(object[key]);
  }
  return arr;
}
