'use strict';
/* exported getDescriptionOfPerson */
let getDescriptionOfPerson = (person) => {
  return (
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.'
  );
};
