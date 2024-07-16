/* exported setValue */
function setValue(
  object: { [x: string]: any },
  key: string | number,
  value: any
): any {
  object[key] = value;
}
