'use strict';
let $taskList = document.querySelector('.task-list');
if (!$taskList) {
  throw new Error('$tasklist does not exist');
}
$taskList.addEventListener('click', function (event) {
  let eventTarget = event.target;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    let eventTargetClosest = eventTarget.closest('.task-list-item');
    if (!eventTargetClosest) {
      throw new Error('eventTargetClosest does not exist');
    }
    console.log('eventTargetClosest:', eventTargetClosest);
    eventTargetClosest.remove();
  }
});
