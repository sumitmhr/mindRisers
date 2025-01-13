const simpleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    gender: 'male',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 25,
    gender: 'female',
  },
  {
    id: 3,
    name: 'Bob Smith',
    age: 35,
    gender: 'male',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    age: 28,
    gender: 'female',
  }
];

console.log(simpleData.filter(refObj => refObj.gender==='female'));

const totalAge = simpleData.reduce((total, refObj1) => total + refObj1.age, 0);

console.log(totalAge);