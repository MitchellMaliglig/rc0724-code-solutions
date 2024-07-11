/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber++);
  }
  return numbers;
}
console.log('calling getNumbersToTen() once:', getNumbersToTen());
console.log('calling getNumbersToTen() twice:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;
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

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';
  while (count++ <= times) {
    repeated += word;
  }
  return repeated;
}
console.log(`calling repeatWord('pizza', 2) once: ${repeatWord('pizza', 2)}`);
console.log(`calling repeatWord('pizza', 2) twice: ${repeatWord('pizza', 2)}`);

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
logEachCharacter('');
logEachCharacter('Bob Ross');
logEachCharacter('Hi, how are you?');

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }
  return doubled;
}
let arr: number[] = [1, 2, 3, 4, 5];
console.log('arr:', arr);
arr = doubleAll(arr);
console.log('doubleAll(arr) once:', arr);
arr = doubleAll(arr);
console.log('doubleAll(arr) twice:', arr);

function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const bird = {
  color: 'green',
  canFly: true,
};
const dog = {
  breed: 'lemon',
  hasHat: false,
};
const birdKeys = getKeys(bird);
const dogKeys = getKeys(dog);
console.log('birdKeys: ', birdKeys);
console.log('dogKeys: ', dogKeys);

function getValues(obj: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
const birdValues = getValues(bird);
const dogValues = getValues(dog);
console.log('birdValues: ', birdValues);
console.log('dogValues: ', dogValues);
