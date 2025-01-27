
// forEach, map, find, filter, reduce

const numbers = [11, 22, 33, 44, 55, 66, 77];
const rating = [3,4,3,4,5,4,3,2,1,5,5,5,3,4,4,4,5];

sum = 0;

numbers.forEach((n, i) => {
  // console.log(n);
  sum += n;
  // console.log(i);
});

total = 0;

rating.forEach((r) => {
  total += r;
});

avg = total/(rating.length);

console.log(sum);

console.log(avg);

// 1. Basic forEach to Log Array Elements
const fruits = ['apple', 'banana', 'orange', 'mango'];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// 2. Using forEach to Perform Calculations

const collectionNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

collectionNumbers.forEach((number) => {
  doubledNumbers.push(number * 2); // Doubling each number and adding it to the new array
});

console.log(doubledNumbers);



// 3. forEach with Index and Array as Arguments

const colors = ['red', 'green', 'blue', 'yellow'];

colors.forEach((color, index) => {
  console.log(`The color at index ${index} is ${color}`);
});



// 4.  Modifying an External Variable

let total1 = 0;
const prices = [10, 20, 30, 40];

prices.forEach((price) => {
  total1 += price; // Adding each price to the total
});

console.log(`Total price: $${total1}`);




// 5. forEach with Objects (Array of Objects)

const users = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 34 },
  { name: 'Sam', age: 25 }
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});



// 6. forEach with Arrow Function and Multiple Arguments

const scores = [85, 92, 78, 94, 88];

scores.forEach((score, index) => {
  if (score >= 90) {
    console.log(`Student ${index + 1} has an excellent score: ${score}`);
  } else {
    console.log(`Student ${index + 1} needs improvement: ${score}`);
  }
});




// 7. Skipping Elements with forEach

const skipNumbers = [1, 2, 3, 4, 5, 6];

skipNumbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    // Skip odd numbers
    return; // this will skip the rest of the loop iteration for odd numbers
  }
});