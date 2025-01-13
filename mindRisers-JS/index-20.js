
// forEach, map, find, filter, reduce

const numbers = [11, 22, 33, 44, 55, 66, 77];
const rating = [3,4,3,4,5,4,3,2,1,5,5,5,3,4,4,4,5];

sum = 0;

numbers.forEach((n, i) => {
  // console.log(n);
  sum += n;
  // console.log(i);
});

total = 0;

rating.forEach((r) => {
  total += r;
});

avg = total/(rating.length);

console.log(sum);

console.log(avg);


