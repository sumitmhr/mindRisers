
// function Person() {
//   this.name = 'lios';
//   this.n = 'li';

//   this.fio = function () {
//     console.log('hello');
//   }

// }


const m = new Person();
const a = new Person();

function Person(personName, age) {
  this.name = personName;
  this.age = age;

  this.fio = function () {
    console.log('hello');
  }

}


// const m = new Person('ram', 90);
// console.log(m.name);
// console.log(m.age);

const n = new Date();

console.log(n.getFullYear());
console.log(n.getMinutes());
console.log(n.getSeconds());
console.log(n.getTime());