
const numbers = [11, 22, 33, 44, 55];

// const n = numbers.map((n) => {
//   return n * 2;
// })

// console.log(n);

const newN = numbers.map((num, i) => {
  if (i === 2) {
    return 100;
  } else {
    return num;
  }
});

console.log(newN);



// 1. Basic map() Usage

const aNumbers = [1, 2, 3, 4, 5];

const aDoubledNumbers = aNumbers.map((num) => {
  return num * 2;
});

console.log(aDoubledNumbers);




// 2. Mapping Objects in an Array

const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 34 },
  { name: 'Charlie', age: 25 }
];

const names = users.map((user) => {
  return user.name;
});

console.log(names);



// 3. Mapping with Index and Original Array

const fruits = ['apple', 'banana', 'orange'];

const fruitDescriptions = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit}`;
});

console.log(fruitDescriptions);

// 4.  Modifying an Array of Objects

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const updatedProducts = products.map((product) => {
  return {
    ...product, // Spread the existing properties
    discountedPrice: product.price * 0.9, // Apply a 10% discount
    // difference: product.price - product.discountedPrice
    // fame: "Sumit"
  };
});

console.log(updatedProducts);



// 5. Chaining map() with Other Array Methods

const bNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// First, filter out odd numbers, then double the even numbers
const bDoubledEvenNumbers = bNumbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * 2);         // Double each even number

console.log(bDoubledEvenNumbers);



// 6. Transforming an Array to a Different Data Type

const cNumbers = [1, 2, 3, 4, 5];

const stringNumbers = cNumbers.map((num) => {
  return num.toString(); // Convert each number to a string
});

console.log(stringNumbers);


