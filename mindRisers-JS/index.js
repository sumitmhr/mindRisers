let myVariable = 10;

const myName = "Sumit Maharjan is a bad guy";

const someName = "excel      lence  ";

let mySalary = 40000;

let myAge = 29;

// console.log(myName.concat('Maharjan is a bad guy'));

console.log(myName.replaceAll('bad', 'good'));

console.log(myName.substring(0, 15));

// console.log(someName.trim().length);

console.log(someName.replace(/\s+/g, ' ').trim())

// const data = 'hello jee how the good is there the good';
// const index = data.search('good');
// console.log(index);

const personName = 'hari';

const age = 90;

const address = 'newroad, ktm';

// data = personName.concat(" ", "lives", " ", "in", " ", address, " ", "and", " ",  "his", " ", "age", " ", "is" , " ", age)

// console.log(data);

const addAll = `${personName.toUpperCase()} is ${age} years old and lives in ${address}`;

console.log(addAll);