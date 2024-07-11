/* exported getValue */
function getValue(object: { [x: string]: any }, key: string | number): any {
  return object[key];
}
