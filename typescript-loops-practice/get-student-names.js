'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
