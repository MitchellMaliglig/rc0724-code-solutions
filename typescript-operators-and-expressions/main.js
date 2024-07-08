'use strict';
let width = 1;
let height = 2;
let area = width * height;
console.log('area: ', area);
console.log('area type: ', typeof area);
let bill = 1;
let payment = 2;
let change = payment - bill; // no error?
console.log('change: ', change);
console.log('change type: ', typeof change);
let quizzes = 1;
let midterm = 1;
let final = 1;
let grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('grade type: ', typeof grade);
let firstName = 'Bob';
let lastName = 'Ross';
let fullName = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('fullName type: ', typeof fullName);
let ph = 1;
let isAcidic;
if (ph < 7) {
  isAcidic = true;
} else {
  isAcidic = false;
}
console.log('isAcidic: ', isAcidic);
console.log('isAcidic type: ', typeof isAcidic);
let headCount = 1;
let isSparta = headCount == 300;
console.log('isSparta: ', isSparta);
console.log('isSparta type: ', typeof isSparta);
let motto = fullName;
motto += ' is the GOAT';
console.log('motto: ', motto);
console.log('motto type: ', typeof motto);
