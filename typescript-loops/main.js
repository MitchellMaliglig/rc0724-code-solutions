'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
}
console.log('calling getNumbersToTen() once:', getNumbersToTen());
console.log('calling getNumbersToTen() twice:', getNumbersToTen());
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  evenNumbers[0] = currentNumber;
  while (currentNumber < 20) {
    evenNumbers.push((currentNumber += 2));
  }
  return evenNumbers;
}
console.log('calling getEvenNumbersToTwenty() once:', getEvenNumbersToTwenty());
console.log(
  'calling getEvenNumbersToTwenty() twice:',
  getEvenNumbersToTwenty()
);
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count++ <= times) {
    repeated += word;
  }
  return repeated;
}
console.log(`calling repeatWord('pizza', 2) once: ${repeatWord('pizza', 2)}`);
console.log(`calling repeatWord('pizza', 2) twice: ${repeatWord('pizza', 2)}`);
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('');
logEachCharacter('Bob Ross');
logEachCharacter('Hi, how are you?');
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }
  return doubled;
}
let arr = [1, 2, 3, 4, 5];
console.log('arr:', arr);
arr = doubleAll(arr);
console.log('doubleAll(arr) once:', arr);
arr = doubleAll(arr);
console.log('doubleAll(arr) twice:', arr);
function getKeys(obj) {
  let keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
let bird = {
  color: 'green',
  canFly: true,
};
let dog = {
  breed: 'lemon',
  hasHat: false,
};
let birdKeys = getKeys(bird);
let dogKeys = getKeys(dog);
console.log('birdKeys: ', birdKeys);
console.log('dogKeys: ', dogKeys);
function getValues(obj) {
  let values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
let birdValues = getValues(bird);
let dogValues = getValues(dog);
console.log('birdValues: ', birdValues);
console.log('dogValues: ', dogValues);
