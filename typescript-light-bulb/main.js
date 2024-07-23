'use strict';
let $circle = document.querySelector('.circle');
if (!$circle) {
  throw new Error('$circle does not exist');
}
let $container = document.querySelector('.container');
if (!$container) {
  throw new Error('$container does not exist');
}
$circle.addEventListener('click', function () {
  if ($circle?.className === 'circle yellow') {
    $circle.className = 'circle grey';
    $container.className = 'container black';
  } else if ($circle?.className === 'circle grey') {
    $circle.className = 'circle yellow';
    $container.className = 'container orange';
  }
});
