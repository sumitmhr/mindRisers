
const users = ['ram', 'shyam', 'hari', 'sita'];

// for in, for of

 for (let i in users) {
  console.log(`This is index number: ${i}`);
  // console.log(i);
 }

 console.log(`These are the values starting from index 0 in the collection:`);

 let initialIndex = 0;

 for (let n of users) {
   initialIndex += 1;
   console.log(`${initialIndex}. ${n}`);
  // console.log(n);
 }

//  let count = 0;

//  for (let a of users) {
//   count++;
//  }

//  console.log(count);




 

