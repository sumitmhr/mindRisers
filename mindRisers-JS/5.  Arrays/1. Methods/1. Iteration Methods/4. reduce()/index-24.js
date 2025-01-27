
const numbers = [11, 22, 33, 44, 55];

// 5 elements
// 2 content
// const n = numbers.reduce((a, b) => {
//   // a=11
//   // b=22

//   // a = 90;
//   // b = 33;

//   // a= 90;
//   // b= 44;

//   // a=90;
//   // b=55
//   return 90;

// });

// console.log(n);

const num = numbers.reduce((a, b) => {

  return a + b;

});

console.log(num);



// // Syntax Start ::

// const result = array.reduce((accumulator, currentValue, index, array) => {
//   // Return the new accumulator value
// }, initialValue);

// // Syntax End ::



// 1. Basic reduce() to Sum Array Elements

const aNumbers = [1, 2, 3, 4, 5];

const aSum = aNumbers.reduce((aAccumulator, aCurrentValue) => {
  return aAccumulator + aCurrentValue;
}, 1);

console.log(aSum);


// 2. reduce() Without initialValue

const bNumbers = [1, 2, 3, 4, 5];

const bSum = bNumbers.reduce((bAccumulator, bCurrentValue) => {
  return bAccumulator + bCurrentValue;
});

console.log(bSum);


// 3. reduce() to Find the Maximum Value

const cNumbers = [3, 1, 7, 5, 9, 2];

const cMax = cNumbers.reduce((cAccumulator, cCurrentValue) => {
  return cAccumulator > cCurrentValue ? cAccumulator : cCurrentValue;
}, cNumbers[0]); // Starting with the first element as the initial value

console.log(cMax);


// 4. reduce() to Count Occurrences of Items

const letters = ['a', 'b', 'a', 'c', 'a', 'b'];

const letterCount = letters.reduce((accumulator, letter) => {
  if (accumulator[letter]) {
    accumulator[letter] += 1;
  } else {
    accumulator[letter] = 1;
  }
  return accumulator;
}, {});

console.log(letterCount);



// 5. reduce() to Flatten an Array of Arrays

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened);


// 6. reduce() to Group Objects by a Property

const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 34 },
  { name: 'Charlie', age: 28 },
  { name: 'Dave', age: 34 }
];

const groupedUsers = users.reduce((accumulator, user) => {
  const key = user.age; // Group by age
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(user);
  return accumulator;
}, {});

console.log(groupedUsers);


// 7. reduce() to Average Numbers

const dNumbers = [10, 20, 30, 40, 50];

const dAverage = dNumbers.reduce((dAccumulator, dCurrentValue, dIndex, dArray) => {
  dAccumulator += dCurrentValue;
  if (dIndex === dArray.length - 1) {
    return dAccumulator / dArray.length;
  }
  return dAccumulator;
}, 0);

console.log(dAverage);










