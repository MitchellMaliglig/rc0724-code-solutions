'use strict';
let student = {
  firstName: 'Bob',
  lastName: 'Ross',
  age: 1000,
};
let fullName = `${student.firstName} ${student.lastName}`;
console.log(`fullName: ${fullName}`);
student.livesInIrvine = false;
student.previousOccupation = 'Pizza Boy';
console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student: ', student);
console.log('student type: ', typeof student);
let vehicle = {
  make: 'Pizza',
  model: 'Wagon',
  year: 1950,
};
vehicle['color'] = 'rainbow';
vehicle['isConvertible'] = true;
console['log'](`color: ${vehicle['color']}`);
console['log'](`isConvertible: ${vehicle['isConvertible']}`);
console['log']('automobile: ', vehicle);
console['log']('automobile type: ', typeof vehicle);
let pet = {
  name: 'Johnny',
  kind: 'rock',
};
delete pet.name;
delete pet['kind'];
console.log('pet: ', pet);
console['log'](`pet type: ${typeof pet}`);
