interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Bob',
  lastName: 'Ross',
  age: 1000,
};
const fullName: string = `${student.firstName} ${student.lastName}`;
console.log(`fullName: ${fullName}`);
student.livesInIrvine = false;
student.previousOccupation = 'Pizza Boy';
console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student: ', student);
console.log('student type: ', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}
const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'Johnny',
  kind: 'rock',
};
delete pet.name;
delete pet['kind'];
console.log('pet: ', pet);
console['log'](`pet type: ${typeof pet}`);
