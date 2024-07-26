interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;
if (!$contactForm) {
  throw new Error('$contactForm not found');
}

$contactForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const o = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(o);
  $contactForm.reset();
});
