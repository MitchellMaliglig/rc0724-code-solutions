'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(`convertMinutesToSeconds(5): ${convertMinutesToSeconds(5)}`);
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log(`greet('Spongebob'): ${greet('Spongebob')}`);
let getArea = (width, height) => {
  return width * height;
};
console.log(`getArea(17, 42): ${getArea(17, 42)}`);
let person = {
  firstName: 'Bob',
  lastName: 'Ross',
};
let getFirstName = (person) => {
  return person.firstName;
};
console.log(`getFirstName(person): ${getFirstName(person)}`);
let getLastElement = (array) => {
  return array[array.length - 1];
};
let arr = ['propane', 'and', 'propane', 'accessories'];
console.log(`getLastElement(arr): ${getLastElement(arr)}`);
let callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
console.log(`callOtherFunction(convertMinutesToSeconds, 10):
  ${callOtherFunction(convertMinutesToSeconds, 10)}`);
console.log(`callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']):
  ${callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])}`);
