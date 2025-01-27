
// Write a function sumOfArray that takes an array of numbers and returns their sum using the reduce method.

const sumOfArray = (arr) => {
  return arr.reduce((sum, number) => sum + number, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5])); 