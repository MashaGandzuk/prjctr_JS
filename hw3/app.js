"use strict";

// 1

function recursiveOddSumTo(number) {
  if (number === 1) {
    return number;
  }
  let oddNumber = number % 2 === 0 ? number - 1 : number;
  return oddNumber + recursiveOddSumTo(oddNumber - 2);
}
console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25

// 2

function iterativeOddSumTo(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1) {
      result += i;
    }
  }
  return result;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25
