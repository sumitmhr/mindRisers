
const firstName = "Alice";
const lastName = "Smith";
const age = 34;
const hobbies = [];
const jobTitle = "Graphic Designer";

console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old and work as a ${jobTitle}. 
In my free time, I ${hobbies.length > 0 ? `enjoy ${hobbies.join(", ").replace(/, ([^,]*)$/, " and $1")}` : "have no hobbies"}.`)