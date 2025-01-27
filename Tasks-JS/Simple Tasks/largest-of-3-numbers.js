let num1 = 17;
let num2 = 63;
let num3 = 9;

let check2and1 = num2 > num1;
let check2and3 = num2 > num3;
let check3and1 = num3 > num1;

let largest = (check2and1) ? (check2and3 ? num2 : num3) : (check3and1 ? num3 : num1);

console.log(`${largest} is the largest number`);

// console.log(largest);
