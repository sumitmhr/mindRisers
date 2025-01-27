
// Write a function countVowels that counts the number of vowels in a given string.

const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return str.split('').filter(char => vowels.includes(char)).length;
};

console.log(countVowels("sUmit")); 