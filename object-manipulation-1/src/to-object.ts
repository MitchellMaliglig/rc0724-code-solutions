/* exported toObject */
function toObject(keyValuePair: any[]): any {
  let obj: any;
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
