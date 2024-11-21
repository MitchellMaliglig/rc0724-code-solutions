'use strict';
let $contactForm = document.querySelector('#contact-form');
if (!$contactForm) {
  throw new Error('$contactForm not found');
}
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let $formElements = $contactForm.elements;
  let o = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(o);
  $contactForm.reset();
});
