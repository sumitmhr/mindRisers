const numbers = [11, 23, 43, 34, 45, 67, 96];

let totalSum = 0;
let evenSum = 0;
let oddSum = 0;

for (const number of numbers) {
    totalSum += number; // Add to total sum
    number % 2 === 0 ? evenSum += number  // Add to evenSum if even
                     : oddSum += number;  // Add to oddSum if odd


    // (number % 2 === 0 ? evenSum : oddSum) += number; // Ternary for even/odd

    // m = (number % 2 === 0 ? evenSum : oddSum);
    // m += number;
}

console.log("Total Sum:", totalSum);
console.log("Sum of Even Numbers:", evenSum);
console.log("Sum of Odd Numbers:", oddSum);
