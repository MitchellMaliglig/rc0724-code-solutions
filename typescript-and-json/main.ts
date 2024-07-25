interface Book {
  isbn: string;
  title: string;
  author: string;
}

const books: Book[] = [
  {
    isbn: 'A-111',
    title: 'Title A',
    author: 'Author A',
  },
  {
    isbn: 'B-222',
    title: 'Title B',
    author: 'Author B',
  },
  {
    isbn: 'C-333',
    title: 'Title C',
    author: 'Author C',
  },
];

console.log('books: ', books);
console.log('books type: ', typeof books);

const serialized = JSON.stringify(books);
console.log('serialized: ', serialized);
console.log('serialize type: ', typeof serialized);

const studentJSON = '{"id":42,"name":"Bob Ross"}';
console.log('studentJSON: ', studentJSON);
console.log('studentJSON type: ', typeof studentJSON);

const deserialized = JSON.parse(studentJSON);
console.log('deserialized: ', deserialized);
console.log('deserialized type: ', typeof deserialized);
