
function greet() {
  console.log('hello hello');
}
greet();

// greet1(); // Gives error as it cannot be called before creation of fat arrow function

const greet1 = () => {
  console.log('sello sello ');
}

greet1();

const greet2 = (some) => {
  console.log(`sello sello ${some}`);
}

greet2('hello');



