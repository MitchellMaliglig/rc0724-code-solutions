'use strict';
let book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
let book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
let { title, author, libraryId } = book1;
console.log(`
The title of the book is ${title}, the author is ${author}, and the libraryId is ${libraryId}.`);
let { title: title_, author: author_, libraryId: libraryId_ } = book2;
console.log(
  `The title of the book is ${title_}, the author is ${author_}, and the libraryId is ${libraryId_}.`
);
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
let [book3, book4, book5] = library;
console.log('book 3:', book3);
console.log('book 4:', book4);
console.log('book 5:', book5);
let [, , , book6] = library;
console.log('book6:', book6);
