
const numbers = [11, 22, 100, 33, 44, 55];

const n = numbers.reduce((a, b) => {
  //            a: b 
  // 11 > 22 ? 11: 22;

  //  a= 22 : b = 100
  //              a: b 
  //  22 > 100 ? 22: 100;
  // a = 100 : b : 33

  //  100> 33 ? 100: 33
  //  a=100   b = 44

  //  100> 44 ? 100: 44

  //  a=100 b 55

  return a < b ? a : b;
});

console.log(n);

// const numbers = [11, 22, 100, 33, 44, 55];

// const n = numbers.reduce((a, b) => a + b);


// console.log(n);