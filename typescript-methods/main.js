'use strict';
let heroes = ['Bob Ross', 'Spongebob Squarepants', 'Rocky Rock', 'Bobby Hill'];
console.log(heroes);
let randomNumber = Math.random();
randomNumber *= heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log(`randomIndex: ${randomIndex}`);
let randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);
let book1 = {
  title: 'Diary of a Wimpy Kid',
  author: 'Jeff Kinney',
};
let book2 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
};
let book3 = {
  title: 'Green Eggs & Ham',
  author: 'Dr. Seuss',
};
let library = [book1, book2, book3];
console.log(library);
let lastBook = library.pop();
console.log('last book:', lastBook);
let firstBook = library.shift();
console.log('first book:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);
let fullName = 'Finn The-Human';
let firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
let firstName = firstAndLastName[0];
let sayMyName = firstName.toUpperCase();
console.log('say my name: ', sayMyName);
let employee = {
  name: 'Jake',
  age: 40,
  position: 'Best Friend',
};
let employeeKeys = Object.keys(employee);
console.log('employee keys: ', employeeKeys);
let employeeValues = Object.values(employee);
console.log('employee values: ', employeeValues);
let employeePairs = Object.entries(employee);
console.log('employee pairs: ', employeePairs);
