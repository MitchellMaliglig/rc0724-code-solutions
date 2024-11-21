console.log('hello world');

const $h1 = document.querySelector('h1');
console.log('$h1: ', $h1);
console.dir($h1);

const $id = document.querySelector('#explanation');
console.log('$id: ', $id);
console.dir($id);

const $class = document.querySelector('.hint');
console.log('$class: ', $class);
console.dir($class);

const $p = document.querySelectorAll('p');
console.log('$p: ', $p);

const $classList = document.querySelectorAll('.example-link');
console.log('$classList: ', $classList);
