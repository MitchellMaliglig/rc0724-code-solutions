'use strict';
let $h1 = document.querySelector('h1');
setTimeout(function () {
  $h1.textContent = 'Hello there!';
}, 2000);
setTimeout(function () {
  $h1.textContent = 'General Kenobi!';
}, 4000);
