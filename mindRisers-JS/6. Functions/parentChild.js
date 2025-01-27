
// Parent function
// const m = (func) => {
//   const n = 'hello';
//   func(n);
// }

// const a = (greet) => {
//   console.log(greet);
// }

// m(a);


// 1. Parent and Child Function with Parameters
// Child function with a parameter
const child = (message) => {
  console.log('Child function received message:', message);
};

// Parent function with a parameter, which calls the child function
const parent = (greeting) => {
  console.log('Parent function sending message...');
  child(greeting); // Passing the greeting parameter to the child
};

// Calling the parent function
parent('Hello from the parent!');

// 2. Passing Multiple Parameters to Child Function
// Child function with multiple parameters
const child1 = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

// Parent function with multiple parameters
const parent1 = (name, age) => {
  console.log('Parent function calling child...');
  child1(name, age); // Passing multiple parameters to the child
};

// Calling the parent function
parent1('Alice', 30);




// 3. Child Function Returning a Value Based on Parameters
// Child function that takes parameters and returns a value
const child2 = (a, b) => {
  return a + b;  // Adds the two parameters and returns the sum
};

// Parent function that calls the child function and uses its result
const parent2 = (x, y) => {
  console.log('Parent function calling child...');
  const result = child2(x, y);  // The result of the child function
  console.log('The sum from the child function is:', result);
};

// Calling the parent function
parent2(5, 7);



// 4. Passing Arrow Functions as Parameters


// Child function as an arrow function with parameters
const child3 = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

// Parent function that takes a function as a parameter
const parent3 = (callback) => {
  const name = 'Bob';
  const age = 25;
  console.log('Parent function is calling the callback...');
  callback(name, age);  // Passing the parameters to the callback function
};

// Passing the child function as a callback to the parent
parent3(child3);



// 5. Arrow Function Inside Parent with Parameters


// Parent function that defines an arrow function (child) with parameters
const parent4 = (name, age) => {
  console.log('Parent function executing...');
  
  // Arrow function (child) inside parent that takes parameters
  const child4 = (n, a) => {
    console.log(`${n} is ${a} years old.`);
  };
  
  child4(name, age); // Calling the child function inside the parent
};

// Calling the parent function
parent4('Charlie', 35);

