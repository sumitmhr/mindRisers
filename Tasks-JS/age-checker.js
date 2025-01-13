// let age = 29; 
// let categories = {
//     child: age <= 12,
//     teenager: age <= 19,     // Key and value pair
//     adult: age <= 60,
//     senior: age > 60
// };

//  if (categories.child) {
//     console.log("Child");
// } else if (categories.teenager) {
//     console.log("Teenager");
// } else if (categories.adult) {
//     console.log("Adult");
// } else if (categories.senior) {
//     console.log("Senior");
// }

let age = 12;

let categories = [
    { name: "Child", condition: age <= 12 },
    { name: "Teenager", condition: age <= 19 },  // Key and value pair 
    { name: "Adult", condition: age <= 60 },
    { name: "Senior", condition: age > 60 }
];

let category = categories.find(a => a.condition);

console.log(category ? category.name : "No category found.");