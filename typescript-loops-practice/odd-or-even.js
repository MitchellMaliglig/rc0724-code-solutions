'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      arr.push('odd');
    } else {
      arr.push('even');
    }
  }
  return arr;
}
