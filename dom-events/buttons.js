'use strict';
let $button = document.querySelector('.click-button');
if (!$button) {
  throw new Error('$button does not exist');
}
function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$button.addEventListener('click', handleClick);
let $hover = document.querySelector('.hover-button');
if (!$hover) {
  throw new Error('$hover does not exist');
}
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$hover.addEventListener('mouseover', handleMouseover);
let $double = document.querySelector('.double-click-button');
if (!$double) {
  throw new Error('$double does not exist');
}
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('target: ', event.target);
}
$double.addEventListener('dblclick', handleDoubleClick);
