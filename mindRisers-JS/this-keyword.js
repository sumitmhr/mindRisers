
const person = {
  firstName: 'ram',
  lastName: 'sharma',
  age: 90,
  height: 100.9,
  address: 'new road',
  habits: ['sing', 'car'],

//   // this will be global object
// fullFunc: () => {
//   console.log(this);
// }

// 'this' will be same object
fullFunc: function() {
  console.log(this.firstName);
  console.log(this.lastName);
}};

person.fullFunc();
// console.log(`${person.firstName} ${person.lastName}`);