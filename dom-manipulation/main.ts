let clicks: number = 0;
const $button = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$button) {
  throw new Error('$button does not exist');
}
$button.addEventListener('click', function () {
  clicks++;
  if (!$button || !$clickCount) {
    throw new Error('the $button or $clickCount query has failed');
  }
  $clickCount.textContent = `Clicks: ${clicks.toString()}`;
  if (clicks < 4) {
    $button.className = 'hot-button' + ' ' + 'cold';
  } else if (clicks < 7) {
    $button.className = 'hot-button' + ' ' + 'cool';
  } else if (clicks < 10) {
    $button.className = 'hot-button' + ' ' + 'tepid';
  } else if (clicks < 13) {
    $button.className = 'hot-button' + ' ' + 'warm';
  } else if (clicks < 16) {
    $button.className = 'hot-button' + ' ' + 'hot';
  } else {
    $button.className = 'hot-button' + ' ' + 'nuclear';
  }
});
