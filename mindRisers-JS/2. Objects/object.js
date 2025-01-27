
const person = {
  name: 'ram',
  age: 90,
  height: 164,
  address: 'new road',
  habits: ['sing', 'dance'],
  sleep: () => {
    return 'person is sleeping';
  }
};

// Add new properties to existing object

person.salary = 900;

// Update the value in existing object

person.age = 29;

// Delete an existing object property

delete person.address;

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2018,
//   color: "Blue",
//   isElectric: false,
// };

// const bank = {
//   name: "National Bank",
//   branch: "Uptown",
//   accounts: 1200,
//   isOpenToday: true,
// };

// const restaurant = {
//   name: "Taco Spot",
//   cuisine: "Mexican",
//   rating: 4.5,
//   isVegetarianFriendly: true,
// };

console.log(person.name);
// console.log(person['name']);
console.log(person.age);
console.log(person.height);
console.log(person.address);
console.log(person.habits);
const m = person.sleep();
console.log(m);

