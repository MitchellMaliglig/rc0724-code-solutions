function handleFocus(event: Event): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name: ', eventTarget.name);
  console.log('eventTarget.value: ', eventTarget.value);
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;
if (!$form) {
  throw new Error('$form not found');
}

const formElements = $form.elements;
if (!formElements) {
  throw new Error('formElements not found');
}

const $nameInput = formElements[0];
if (!$nameInput) {
  throw new Error('$nameInput not found');
}

const $emailInput = formElements[1];
if (!$emailInput) {
  throw new Error('$emailInput not found');
}

const $messageText = formElements[2];
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
