const heroes = [
  'Bob Ross',
  'Spongebob Squarepants',
  'Rocky Rock',
  'Bobby Hill',
];
console.log(heroes);
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`randomIndex: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);

interface Book {
  title: string;
  author: string;
}
const book1: Book = {
  title: 'Diary of a Wimpy Kid',
  author: 'Jeff Kinney',
};
const book2: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
};
const book3: Book = {
  title: 'Green Eggs & Ham',
  author: 'Dr. Seuss',
};
const library: Book[] = [book1, book2, book3];
console.log(library);
const lastBook = library.pop();
console.log('last book:', lastBook);
const firstBook = library.shift();
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

const fullName = 'Finn The-Human';
const firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('say my name: ', sayMyName);

const employee = {
  name: 'Jake',
  age: 40,
  position: 'Best Friend',
};
const employeeKeys = Object.keys(employee);
console.log('employee keys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employee values: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employee pairs: ', employeePairs);
