

const numbers = [11, 22, 33, 44, 55];


const n = numbers.filter((element, index, array) => {
  return element === 40;
});

// element: The current item being processed in the array.

// index (Optional): The index of the current element being processed.

// array (Optional): The original array being processed.


console.log(n);



// 1. Basic filter() Usage

const aNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = aNumbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);



// 2. Filtering with Objects

const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'Dave', age: 40 }
];

const adultUsers = users.filter((user) => user.age >= 30);

console.log(adultUsers);



// 3. Filtering with Multiple Conditions

const aUsers = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 34 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'Amanda', age: 35 }
];

const filteredUsers = aUsers.filter((aUser) => aUser.age > 30 || aUser.name.startsWith('A'));

console.log(filteredUsers);



// 4. Filtering Strings

const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

const filteredWords = words.filter((word) => /^[aeiou]/i.test(word));

console.log(filteredWords);



// 5. Filtering Unique Values

const bNumbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueNumbers = bNumbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers);



// 6. Filtering an Empty Array

const cNumbers = [1, 3, 5, 7];

const cEvenNumbers = cNumbers.filter((cNum) => cNum % 2 === 0);

console.log(cEvenNumbers); // Output: []



// 7. Filtering with index or array Argument

const dNumbers = [1, 2, 3, 4, 5];

const oddIndexedNumbers = dNumbers.filter((dNum, index) => index % 2 === 1);

console.log(oddIndexedNumbers);

