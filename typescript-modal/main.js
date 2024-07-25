'use strict';
let $openModal = document.querySelector('.open-modal');
if (!$openModal) {
  throw new Error('$openModal does not exist');
}
let $dismissModal = document.querySelector('.dismiss-modal');
if (!$dismissModal) {
  throw new Error('$dismissModal does not exist');
}
let $dialog = document.querySelector('dialog');
if (!$dialog) {
  throw new Error('$dialog does not exist');
}
$openModal.addEventListener('click', function () {
  $dialog?.showModal();
});
$dismissModal.addEventListener('click', function () {
  $dialog?.close();
});
