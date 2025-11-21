// /Printing to the Console/
// Definition: The console is a tool used by developers to log information, errors, and other messages during the execution of code.

console.log("Hello, World!");
console.log("This is my first JavaScript code!");

const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
console.log(alphabet);

// /Variables and Data Types/
// Definition: A variable is a named storage that can hold a value. Data types specify the type of data that can be stored in a variable, such as strings, numbers, and booleans.

let myName = "Chakeer Drake-Frazier";
let myAge = 30;
let isStudent = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// /Basic Arithmetic Operations/
// Definition: Arithmetic operations include addition, subtraction, multiplication, and division.

let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// /Functions/
// Definition: A function is a block of code designed to perform a particular task. It is executed when "called" or "invoked".

function greet(name) {
    return "Hello, " + name + "!";
}

let greetingMessage = greet(myName);
console.log(greetingMessage);

function square(number) {
    return number * number;
}

let squaredValue = square(4);
console.log("Squared Value:", squaredValue);

// /Arrays and Loops/
// Definition: An array is a collection of items stored at contiguous memory locations. A loop is a programming construct that repeats a block of code as long as a specified condition is true.

let fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log("Fruits List:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// /Objects/
// Definition: An object is a collection of key-value pairs that represent properties and behaviors of an entity.

let person = {
    name: myName,
    age: myAge,
    isStudent: isStudent
};

console.log("Person Object:", person);
console.log("Person's Name:", person.name);
console.log("Person's Age:", person.age);
console.log("Is Person a Student?:", person.isStudent);

// /Conditional Statements/
// Definition: Conditional statements are used to perform different actions based on different conditions.

if (myAge < 18) {
    console.log(myName + " is a minor.");
} else if (myAge >= 18 && myAge < 65) {
    console.log(myName + " is an adult.");
} else {
    console.log(myName + " is a senior citizen.");
}   

// Debugging with console.log
// Definition: Debugging is the process of identifying and fixing errors or bugs in the code. Using console.log statements helps to trace the flow of execution and inspect variable values.

// Example of debugging

let debugValue = 42; // Initial value
console.log("Debug Value before operation:", debugValue); // Log the initial value
debugValue += 8; // Perform some operation
console.log("Debug Value after operation:", debugValue); // Log the updated value


// /Error Handling/
// Definition: Error handling is the process of responding to and resolving error conditions in a program.

try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
}



// try catch
// Definition: A try-catch block is used to handle errors in JavaScript. The code inside the try block is executed, and if an error occurs, the control is transferred to the catch block where the error can be handled.

try { // Example of error handling
    let result = 10 / 0;   // This will cause an error
    if (!isFinite(result)) { // Check for division by zero
        throw new Error("Division by zero is not allowed.");
    }
    console.log("Result:", result); 
} catch (error) { // Catch and log the error
    console.error("Error:", error.message); // Log the error message
}   

// finally block
// Definition: A finally block is used in conjunction with try and catch blocks to execute code that should run regardless of whether an error occurred or not.


finally {
    console.log("Execution completed."); // This will always run
}

// throwing custom error
// Definition: A custom error is an error that is created and thrown by the programmer to indicate a specific problem or condition in the code.

function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    } else {
        console.log("Valid age:", age);
    }
}

try {
    checkAge(-5); // This will throw an error
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Age check completed.");
}

// /DOM Manipulation/

document.body.style.backgroundColor = "#f0f8ff";
let heading = document.createElement("h1");
heading.textContent = "Welcome to My JavaScript Practice!";
document.body.appendChild(heading);
let paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was added using JavaScript.";
document.body.appendChild(paragraph);
heading.style.color = "#3333ff";
paragraph.style.fontSize = "18px";
paragraph.style.color = "#666666";
paragraph.style.marginTop = "10px";


// First class functions
// Definition: First-class functions are functions that can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.

function add(a, b) { // Function that adds two numbers
    return a + b; // Return the sum
}

function operate(operation, x, y) { // Function that takes another function as an argument
    return operation(x, y); // Call the passed function with provided arguments
}

let sumResult = operate(add, 5, 10); // Using the operate function to add two numbers
console.log("Sum Result using first-class function:", sumResult); // Log the result


function greet() { // Function that returns a greeting message
    return "Hello, welcome to first-class functions!";
}

function displayMessage(messageFunction) { // Function that takes another function as an argument
    console.log(messageFunction()); // Call the passed function and log the message
}

displayMessage(greet); // Using the displayMessage function to display a greeting message   