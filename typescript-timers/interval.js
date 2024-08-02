'use strict';
let $h1_ = document.querySelector('h1');
let n = Number($h1_.textContent);
const intervalId = setInterval(function () {
  n--;
  $h1_.textContent = n.toString();
  if (n === 0) {
    $h1_.textContent = 'Pizza!';
    clearInterval(intervalId);
  }
}, 1000);
