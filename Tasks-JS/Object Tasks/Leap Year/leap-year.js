let year = 96; // Every 25th leap year in a century year, is not a leap year.

let leapYearCheck = {
    isDivisibleBy4: year % 4 === 0,
    isDivisibleBy100: year % 100 === 0,
    isDivisibleBy400: year % 400 === 0,
};

let isLeap = leapYearCheck.isDivisibleBy4 && 
            (!leapYearCheck.isDivisibleBy100 || leapYearCheck.isDivisibleBy400);

console.log(`${year} is ${isLeap ? 'a leap year' : 'not a leap year'}.`);

// Just an example:

// let a = 20;
// let b = a % 10 === 0;
// console.log(`${a} is ${b ? 'divisible by 10' : 'not divisible by 10'}`);