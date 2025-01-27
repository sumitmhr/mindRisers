const firstName = "John";
const lastName = "Doe";
const age = 28;
const hobbies = ["reading", "cycling", "coding"];
const jobTitle = "Software Engineer";

console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old and work as a ${jobTitle}. <br> In my free time, I enjoy ${hobbies.join(", ").replace(/, ([^,]*)$/, " and $1")}.`);