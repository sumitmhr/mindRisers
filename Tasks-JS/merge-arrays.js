

// Create a function mergeArrays that merges two arrays without duplicates.

const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(mergeArrays([1, 2], [2, 3])); 

console.log(mergeArrays([1, 2, 2, 3], [3, 4, 5]));