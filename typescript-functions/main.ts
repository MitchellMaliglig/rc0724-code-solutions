function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(`convertMinutesToSeconds(5): ${convertMinutesToSeconds(5)}`);

function greet(name: string): string {
  return 'Hey ' + name + '!';
}
console.log(`greet('Spongebob'): ${greet('Spongebob')}`);

const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log(`getArea(17, 42): ${getArea(17, 42)}`);

interface Person {
  firstName: string;
  lastName: string;
}
const person: Person = {
  firstName: 'Bob',
  lastName: 'Ross',
};
const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log(`getFirstName(person): ${getFirstName(person)}`);

const getLastElement = (array: unknown[]): unknown => {
  return array[array.length - 1];
};
const arr: string[] = ['propane', 'and', 'propane', 'accessories'];
console.log(`getLastElement(arr): ${getLastElement(arr)}`);

const callOtherFunction = (otherFunction: Function, params: unknown): any => {
  return otherFunction(params);
};
console.log(
  `callOtherFunction(convertMinutesToSeconds, 10):
  ${callOtherFunction(convertMinutesToSeconds, 10)}`
);
console.log(
  `callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']):
  ${callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])}`
);
