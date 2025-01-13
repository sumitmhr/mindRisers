
const oldColors = ['red', 'green', 'blue'];

const newColors = ['golden', 'silver', 'teal'];

// mergedColors = oldColors.concat(newColors);
// console.log(mergedColors)

const allColors = [...oldColors, 'yellow', ...newColors];
console.log(allColors);