const $images = document.querySelectorAll(
  '#images>img'
) as NodeListOf<HTMLImageElement>;
if (!$images) throw new Error('$images missing');

const $circles = document.querySelectorAll(
  '#circles>i'
) as NodeListOf<HTMLElement>;
if (!$circles) throw new Error('$circles missing');

const $circlesBox = document.querySelector('div#circles') as HTMLDivElement;

const $left = document.querySelector('i.fa-arrow-left') as HTMLElement;
if (!$left) throw new Error('$left missing');

const $right = document.querySelector('i.fa-arrow-right') as HTMLElement;
if (!$right) throw new Error('$right missing');

let index = 0;
let img = $images[0];
let circle = $circles[0];
const time = 3000;
const direction = {
  left: 'left' as string,
  right: 'right' as string,
  current: 'right' as string,
};

function hideImageEmptyCircle(): void {
  img.className = 'hidden';
  circle.className = 'fa-sharp fa-regular fa-circle';
}

function showImageFillCircle(): void {
  img = $images[index];
  circle = $circles[index];

  img.className = 'show';
  circle.className = 'fa-sharp fa-solid fa-circle';
}

function indexLeft(): void {
  if (index > 0) {
    index--;
  } else {
    index = $images.length - 1;
  }
}

function indexRight(): void {
  if (index < $images.length - 1) {
    index++;
  } else {
    index = 0;
  }
}

function goDirection(): void {
  if (direction.current === direction.left) {
    goLeft();
  } else if (direction.current === direction.right) {
    goRight();
  }
}

function goLeft(): void {
  hideImageEmptyCircle();
  indexLeft();
  showImageFillCircle();
  clearInterval(rotate);
  direction.current = direction.left;
  rotate = setInterval(goLeft, time);
}

function goRight(): void {
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

$circlesBox.addEventListener('click', function (event: Event) {
  const $eventTarget = event.target as HTMLElement;

  if ($eventTarget.tagName !== 'DIV') {
    hideImageEmptyCircle();
    index = Number($eventTarget.id[$eventTarget.id.length - 1]);
    showImageFillCircle();
    clearInterval(rotate);
    rotate = setInterval(goDirection, time);
  }
});
