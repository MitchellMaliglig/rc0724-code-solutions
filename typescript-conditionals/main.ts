/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  return number < 5;
}
console.log(`isUnderFive(4): ${isUnderFive(4)}`);
console.log(`isUnderFive(7): ${isUnderFive(7)}`);

function isEven(number: number): boolean {
  return number % 2 === 0;
}
console.log(`isEven(4): ${isEven(4)}`);
console.log(`isEven(7): ${isEven(7)}`);

function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}
console.log(`startsWithJ('Bob Ross'): ${startsWithJ('Bob Ross')}`);
console.log(`startsWithJ('Jackie Chan'): ${startsWithJ('Jackie Chan')}`);

function isOldEnoughToDrink(person: { name: string; age: number }): boolean {
  return person.age >= 21;
}
const youngLad = { name: 'Junior', age: 1 };
const olderFellow = { name: 'Eduardo', age: 50 };
console.log(`isOldEnoughToDrink(youngLad): ${isOldEnoughToDrink(youngLad)}`);
console.log(
  `isOldEnoughToDrink(olderFellow): ${isOldEnoughToDrink(olderFellow)}`
);

function isOldEnoughToDrive(person: { name: string; age: number }): boolean {
  return person.age >= 16;
}
const theDuckYesterday = { name: 'Ducky Duck', age: 15 };
console.log(
  `isOldEnoughToDrive(theDuckYesterday): ${isOldEnoughToDrive(
    theDuckYesterday
  )}`
);
const theDuckToday = {
  name: theDuckYesterday.name,
  age: theDuckYesterday.age + 1,
};
console.log(
  `isOldEnoughToDrive(theDuckToday): ${isOldEnoughToDrive(theDuckToday)}`
);

function isOldEnoughToDrinkAndDrive(person: {
  name: string;
  age: number;
}): boolean {
  if (person.name === 'abc') {
    // avoids error @typescript-eslint/no-unused-vars
    return false;
  }
  return false;
}
console.log(
  `isOldEnoughToDrinkAndDrive(theDuckYesterday): ${isOldEnoughToDrinkAndDrive(
    theDuckYesterday
  )}`
);
console.log(
  `isOldEnoughToDrinkAndDrive(theDuckToday): ${isOldEnoughToDrinkAndDrive(
    theDuckToday
  )}`
);

function categorizeAcidity(ph: number): string {
  if (ph >= 0 && ph < 7) {
    return 'acidic';
  } else if (ph === 7) {
    return 'neutral';
  } else if (ph > 7 && ph <= 14) {
    return 'basic';
  } else {
    return 'invalid ph';
  }
}
console.log(`categorizeAcidity(1): ${categorizeAcidity(1)}`);
console.log(`categorizeAcidity(7): ${categorizeAcidity(7)}`);
console.log(`categorizeAcidity(14): ${categorizeAcidity(14)}`);
console.log(`categorizeAcidity(1000): ${categorizeAcidity(1000)}`);

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner bros!";
    case 'dot':
      return "I'm cute!";
    default:
      return 'Goodnight everybody!';
  }
}
console.log(`introduceWarnerBro('yakko'): ${introduceWarnerBro('yakko')}`);
console.log(`introduceWarnerBro('wakko'): ${introduceWarnerBro('wakko')}`);
console.log(`introduceWarnerBro('dot'): ${introduceWarnerBro('dot')}`);
console.log(`introduceWarnerBro('daffy'): ${introduceWarnerBro('daffy')}`);

function recommendMovie(genre: string): string {
  let movie: string = '';
  switch (genre) {
    case 'action':
      movie = 'Die Hard';
      break;
    case 'comedy':
      movie = 'The Big Lebowski';
      break;
    case 'horror':
      movie = 'The Ring';
      break;
    case 'drama':
      movie = 'Spaceman';
      break;
    case 'musical':
      movie = 'High School Musical - The Movie';
      break;
    case 'sci-fi':
      movie = 'Alien';
      break;
    default:
      return 'Genre not recognized';
  }
  return movie;
}
console.log(`recommendMovie('horror'): ${recommendMovie('horror')}`);
console.log(`recommendMovie('YEOOOW!'): ${recommendMovie('YEOOOW!')}`);
