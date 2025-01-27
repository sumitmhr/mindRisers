
// Create a function to calculate the area of a rectangle

//  Write a JavaScript function that takes two parameters, 
//  the length and width of a rectangle, and returns the area of the rectangle.

function calculateRectangleArea(length, breadth) {

    let area = length * breadth;

    return area;
}

let length = 10;
let breadth = 4;
let area = calculateRectangleArea(length, breadth);

console.log(`Area of rectangle is ${area}`); // Area of rectangle is 40