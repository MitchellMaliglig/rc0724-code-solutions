/* exported getPropertyValue */
function getPropertyValue(
  object: { [x: string]: unknown },
  key: string
): unknown {
  return object[key];
}
