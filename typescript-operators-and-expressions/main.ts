const width: number = 1;
const height: number = 2;
const area: number = width * height;
console.log('area: ', area);
console.log('area type: ', typeof area);

const bill: number = 1;
const payment: number = 2;
const change: number = payment - bill; // no error?
console.log('change: ', change);
console.log('change type: ', typeof change);

const quizzes: number = 1;
const midterm: number = 1;
const final: number = 1;
const grade: number = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('grade type: ', typeof grade);

const firstName: string = 'Bob';
const lastName: string = 'Ross';
const fullName: string = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('fullName type: ', typeof fullName);

const ph: number = 1;
let isAcidic: boolean;
if (ph < 7) {
  isAcidic = true;
} else {
  isAcidic = false;
}
console.log('isAcidic: ', isAcidic);
console.log('isAcidic type: ', typeof isAcidic);

const headCount: number = 1;
const isSparta: boolean = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('isSparta type: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('motto: ', motto);
console.log('motto type: ', typeof motto);
