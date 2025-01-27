
const numbers = [11, 22, 33, 44, 55];


const n = numbers.find((n, i) => {
  //  11 > 50
  //  22 > 50
  //  33 > 50
  //  44 > 50
  //  55 > 50
  console.log('hello');
  return n > 40;

  if (n%2 === 0) {
    return n
  }
});


console.log(n);



// 1. Basic find() Usage

const aNumbers = [1, 2, 3, 4, 5];

const foundNumber = aNumbers.find((num) => num > 3);

console.log(foundNumber);



// 2. Using find() with Objects

const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 }
];

const user = users.find((user) => user.id === 2);

console.log(user);



// 3. Finding the First Even Number

const bNumbers = [1, 3, 5, 7, 8, 10, 11];

const firstEvenNumber = bNumbers.find((num) => num % 2 === 0);

console.log(firstEvenNumber);




// 4. If No Element Matches the Condition

const cNumbers = [1, 3, 5, 7, 9];

const cFirstEvenNumber = cNumbers.find((num) => num % 2 === 0);

console.log(cFirstEvenNumber);



// 5. Using find() with Index

const aUsers = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 }
];

const bUser = aUsers.find((cUser, index) => {
  if (cUser.age > 30) {
    console.log(`Found user at index ${index}`);
    return true; // Found the user, stop searching
  }
  return false;
});

console.log(bUser);



// 6. Finding an Object by Multiple Properties


const dUsers = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 }
];

const dUser = users.find((eUser) => eUser.name === 'Bob' && user.age === 34);

console.log(dUser);



// 7. Returning undefined with No Match

const fUsers = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 }
];

const fUser = users.find((gUser) => gUser.id === 5);

console.log(fUser); // Will output `undefined`


