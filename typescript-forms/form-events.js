'use strict';
function handleFocus(event) {
  console.log('focus event fired');
  let eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  let eventTarget = event.target;
  console.log('eventTarget.name: ', eventTarget.name);
}
function handleInput(event) {
  let eventTarget = event.target;
  console.log('eventTarget.name: ', eventTarget.name);
  console.log('eventTarget.value: ', eventTarget.value);
}
let $form = document.querySelector('#contact-form');
if (!$form) {
  throw new Error('$form not found');
}
const formElements = $form.elements;
if (!formElements) {
  throw new Error('formElements not found');
}
let $nameInput = formElements[0];
if (!$nameInput) {
  throw new Error('$nameInput not found');
}
let $emailInput = formElements[1];
if (!$emailInput) {
  throw new Error('$emailInput not found');
}
let $messageText = formElements[2];
if (!$messageText) {
  throw new Error('$messageText not found');
}
$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);
$messageText.addEventListener('focus', handleFocus);
$messageText.addEventListener('blur', handleBlur);
$messageText.addEventListener('input', handleInput);
