
const rating = [1, 2, 3, 4, 5, 4, 3, 2, 4, 5, 5, 5, 4, 3, 5, 5, 5];

const avgCalc = (rating) => {
  const sum = rating.reduce((a,b) => a + b);
  return sum / rating.length;
}

console.log(avgCalc(rating));

const finalRating = avgCalc(rating);

console.log(Math.floor(finalRating));