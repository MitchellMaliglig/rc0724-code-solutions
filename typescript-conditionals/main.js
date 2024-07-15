'use strict';
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
function isUnderFive(number) {
  return number < 5;
}
console.log(`isUnderFive(4): ${isUnderFive(4)}`);
console.log(`isUnderFive(7): ${isUnderFive(7)}`);
function isEven(number) {
  return number % 2 == 0;
}
console.log(`isEven(4): ${isEven(4)}`);
console.log(`isEven(7): ${isEven(7)}`);
function startsWithJ(string) {
  return string[0] == 'J';
}
console.log(`startsWithJ('Bob Ross'): ${startsWithJ('Bob Ross')}`);
console.log(`startsWithJ('Jackie Chan'): ${startsWithJ('Jackie Chan')}`);
function isOldEnoughToDrink(person) {
  return person.age >= 21;
}
let youngLad = { name: 'Junior', age: 1 };
let olderFellow = { name: 'Eduardo', age: 50 };
console.log(`isOldEnoughToDrink(youngLad): ${isOldEnoughToDrink(youngLad)}`);
console.log(
  `isOldEnoughToDrink(olderFellow): ${isOldEnoughToDrink(olderFellow)}`
);
function isOldEnoughToDrive(person) {
  return person.age >= 16;
}
let theDuckYesterday = { name: 'Ducky Duck', age: 15 };
console.log(
  `isOldEnoughToDrive(theDuckYesterday): ${isOldEnoughToDrive(
    theDuckYesterday
  )}`
);
let theDuckToday = {
  name: theDuckYesterday.name,
  age: theDuckYesterday.age + 1,
};
console.log(
  `isOldEnoughToDrive(theDuckToday): ${isOldEnoughToDrive(theDuckToday)}`
);
function isOldEnoughToDrinkAndDrive(person) {
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
function categorizeAcidity(ph) {
  if (ph >= 0 && ph < 7) {
    return 'acidic';
  } else if (ph == 7) {
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
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
  let movie = '';
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
