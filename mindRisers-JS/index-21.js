
const numbers = [11, 22, 33, 44, 55];

// const n = numbers.map((n) => {
//   return n * 2;
// })

// console.log(n);

const newN = numbers.map((num, i) => {
  if (i === 2) {
    return 100;
  } else {
    return num;
  }
});

console.log(newN);