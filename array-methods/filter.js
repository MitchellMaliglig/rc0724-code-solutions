'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
let even = numbers.filter((pizza) => pizza % 2 === 0);
console.log('even: ', even);
let noD = names.filter((pizza) => !pizza.includes('D') && !pizza.includes('d'));
console.log('noD:', noD);
