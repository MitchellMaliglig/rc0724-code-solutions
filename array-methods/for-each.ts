const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('in order:');
values.forEach((pizza) => console.log(pizza));

console.log('reverse order:');
values.forEach((pizza, index) =>
  console.log(values[values.length - index - 1])
);
