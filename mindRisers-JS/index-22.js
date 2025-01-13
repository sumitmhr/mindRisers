
const numbers = [11, 22, 33, 44, 55];


const n = numbers.find((n, i) => {
  //  11 > 50
  //  22 > 50
  //  33 > 50
  //  44 > 50
  //  55 > 50
  console.log('hello');
  return n > 40;

  if (n%2 === 0) {
    return n
  }
});


console.log(n);