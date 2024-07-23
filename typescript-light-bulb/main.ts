const $circle = document.querySelector('.circle') as HTMLDivElement;
if (!$circle) {
  throw new Error('$circle does not exist');
}

const $container = document.querySelector('.container') as HTMLDivElement;
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
