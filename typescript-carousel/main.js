'use strict';
let $images = document.querySelectorAll('#images>img');
if (!$images) throw new Error('$images missing');
let $circles = document.querySelectorAll('#circles>i');
if (!$circles) throw new Error('$circles missing');
let $circlesBox = document.querySelector('div#circles');
let $left = document.querySelector('i.fa-arrow-left');
if (!$left) throw new Error('$left missing');
let $right = document.querySelector('i.fa-arrow-right');
if (!$right) throw new Error('$right missing');
let index = 0;
let img = $images[0];
let circle = $circles[0];
let time = 3000;
let direction = {
  left: 'left',
  right: 'right',
  current: 'right',
};
function hideImageEmptyCircle() {
  img.className = 'hidden';
  circle.className = 'fa-sharp fa-regular fa-circle';
}
function showImageFillCircle() {
  img = $images[index];
  circle = $circles[index];
  img.className = 'show';
  circle.className = 'fa-sharp fa-solid fa-circle';
}
function indexLeft() {
  if (index > 0) {
    index--;
  } else {
    index = $images.length - 1;
  }
}
function indexRight() {
  if (index < $images.length - 1) {
    index++;
  } else {
    index = 0;
  }
}
function goDirection() {
  if (direction.current === direction.left) {
    goLeft();
  } else if (direction.current === direction.right) {
    goRight();
  }
}
function goLeft() {
  hideImageEmptyCircle();
  indexLeft();
  showImageFillCircle();
  clearInterval(rotate);
  direction.current = direction.left;
  rotate = setInterval(goLeft, time);
}
function goRight() {
  hideImageEmptyCircle();
  indexRight();
  showImageFillCircle();
  clearInterval(rotate);
  direction.current = direction.right;
  rotate = setInterval(goRight, time);
}
let rotate = setInterval(goRight, time);
$left.addEventListener('click', goLeft);
$right.addEventListener('click', goRight);
$circlesBox.addEventListener('click', function (event) {
  let $eventTarget = event.target;
  if ($eventTarget.tagName !== 'DIV') {
    hideImageEmptyCircle();
    index = Number($eventTarget.id[$eventTarget.id.length - 1]);
    showImageFillCircle();
    clearInterval(rotate);
    rotate = setInterval(goDirection, time);
  }
});
