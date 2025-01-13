
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