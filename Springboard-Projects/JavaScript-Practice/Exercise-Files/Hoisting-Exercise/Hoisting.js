// Hoisting Exercise

// As a developer 🧑‍💻 at the Time Travel Agency 🌀, your task is to organize travel plans for adventurous time travelers. You'll use `var`, `let`, `const`, and demonstrate `variable hoisting` to manage travel details.

// Your tasks are:

/* Task 1: Declare a Destination Variable */

// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`); // prints: Destination: Ancient Egypt


/* Task 2: Change the Destination */

// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(`New Destination: ${destination}`); // prints: New Destination: Medieval Europe

/* Task 3: Declare a Constant Travel Date */


// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. 

const travelDate = "2030-03-15";
console.log(`Travel Date: ${travelDate}`); // prints: Travel Date: 2030-03-15


// Try to change the `travelDate` to another value and observe and explain what happens as a comment.

travelDate = "2030-04-15";
// 

// Observations: It threw a TypeError because travelDate is a constant.

    
/* Task 4: Experiment with Variable Hoisting */

// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. 

console.log(`Time Machine Model: ${timeMachineModel}`); // prints: Time Machine Model: is not defined

// Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.

var timeMachineModel = "T-800";

// Observations: Due to hoisting, the variable declaration is moved to the top, but the assignment remains in place and prints undefined.
 