// /Printing to the Console/
// Definition: The console is a tool used by developers to log information, errors, and other messages during the execution of code.

console.log("Hello, World!");
console.log("This is my first JavaScript code!");

const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
console.log(alphabet);


// let, const, var
// Definition: These are keywords used to declare variables in JavaScript. 'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used for variables that should not be reassigned.

let variableLet = "Let can be reassigned"; // Block-scoped variable
const variableConst = "Const cannot be reassigned"; // Block-scoped constant
var variableVar = "Var can be reassigned and is function-scoped"; // Function-scoped variable

console.log(variableLet);
console.log(variableConst);
console.log(variableVar);

// /Variables and Data Types/
// Definition: A variable is a named storage that can hold a value. Data types specify the type of data that can be stored in a variable, such as strings, numbers, and booleans.

let myName = "Chakeer Drake-Frazier"; // String data type
let myAge = 30; // Number data type
let isStudent = true; // Boolean data type

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

function greet(name) { // Function that takes a name as a parameter
    return "Hello, " + name + "!"; // Return a greeting message
}

let greetingMessage = greet(myName); // Call the function with myName and store the result
console.log(greetingMessage); // Log the greeting message

function square(number) { // Function that returns the square of a number
    return number * number; // Return the squared value
}

let squaredValue = square(4);
console.log("Squared Value:", squaredValue);

// /Arrays and Loops/
// Definition: An array is a collection of items stored at contiguous memory locations. A loop is a programming construct that repeats a block of code as long as a specified condition is true.

let fruits = ["Apple", "Banana", "Cherry", "Date"]; // Array of fruits

console.log("Fruits List:");
for (let i = 0; i < fruits.length; i++) { // Loop through the array
    console.log(fruits[i]);
}

// /Objects/
// Definition: An object is a collection of key-value pairs that represent properties and behaviors of an entity.

let person = { // Object representing a person
    name: myName, 
    age: myAge,
    isStudent: isStudent
};

console.log("Person Object:", person); // Log the entire object
console.log("Person's Name:", person.name); // Accessing object properties
console.log("Person's Age:", person.age); // Accessing object properties
console.log("Is Person a Student?:", person.isStudent); // Accessing object properties

// /if statement example/
// Definition: An if statement is used to execute a block of code only if a specified condition is true.

if (person.isStudent) {
    console.log(person.name + " is a student.");
} else {
    console.log(person.name + " is not a student.");
}

// /Conditional Statements AKA If-Else Statements/
// Definition: Conditional statements are used to perform different actions based on different conditions.

if (myAge < 18) { // Check if the person is a minor
    console.log(myName + " is a minor.");
} else if (myAge >= 18 && myAge < 65) { // Check if the person is an adult
    console.log(myName + " is an adult.");
} else { // The person is a senior citizen
    console.log(myName + " is a senior citizen.");
}   

// /Comparison Operators/
// Definition: Comparison operators are used to compare two values and return a boolean result (true or false).
// Equal (==), Not Equal (!=), Strict Equal (===), Strict Not Equal (!==), Greater Than (>), Less Than (<), Greater Than or Equal To (>=), Less Than or Equal To (<=)

let ageToCompare = 21;

if (myAge === ageToCompare) { // Check if ages are strictly equal
    console.log(myName + "'s age is exactly " + ageToCompare + ".");
} else if (myAge > ageToCompare) { // Check if myAge is greater than ageToCompare
    console.log(myName + " is older than " + ageToCompare + ".");
} else { // myAge is less than ageToCompare
    console.log(myName + " is younger than " + ageToCompare + ".");
}

// /Truthy and Falsy Values/
// Definition: In JavaScript, truthy values are those that evaluate to true in a boolean context, while falsy values evaluate to false. Falsy values include: false, 0, "", null, undefined, and NaN. All other values are considered truthy.

let testValue = 0; // Falsy value

if (testValue) { // Check if testValue is truthy
    console.log("The value is truthy.");
} else { // testValue is falsy
    console.log("The value is falsy.");
}   

let anotherTestValue = "Hello"; // Truthy value

if (anotherTestValue) { // Check if anotherTestValue is truthy
    console.log("The value is truthy.");
} else { // anotherTestValue is falsy
    console.log("The value is falsy.");
}

// Logical Operators
// Definition: Logical operators are used to combine multiple conditions in conditional statements.
// NOT (!), AND (&&), OR (||)

let hasID = true;
let isSober = false;

if (hasID && isSober) { // Check if both conditions are true
    console.log(myName + " is allowed to enter the club.");
} else if (hasID || isSober) { // Check if at least one condition is true
    console.log(myName + " may be allowed to enter the club with restrictions.");
} else { // Neither condition is true
    console.log(myName + " is not allowed to enter the club.");
}   

// /switch statement/
// Definition: A switch statement is used to perform different actions based on different conditions. It is an alternative to multiple if-else statements.

let dayOfWeek = 6; // 1 = Monday, 2 = Tuesday, ..., 7 = Sunday

switch (dayOfWeek) { // Switch statement to check the day of the week
    case 1: // Case for Monday
        console.log("It's Monday!");
        break; // Break statement to exit the switch
    case 2: // Case for Tuesday
        console.log("It's Tuesday!");
        break;
    case 3: // Case for Wednesday
        console.log("It's Wednesday!");
        break;
    case 4: // Case for Thursday
        console.log("It's Thursday!");
        break;
    case 5: // Case for Friday
        console.log("It's Friday!");
        break;
    case 6: // Case for Saturday
        console.log("It's Saturday!");
        break;
    case 7: // Case for Sunday
        console.log("It's Sunday!");
        break;
    default: // Default case if none of the above match
        console.log("Invalid day.");
}

// /Processing Logical Statements to check multiple conditions/
let isWeekend = (dayOfWeek === 6 || dayOfWeek === 7); // Check if it's Saturday or Sunday

if (isWeekend) { // If it's the weekend
    console.log("It's the weekend! Time to relax.");
} else { // If it's a weekday
    console.log("It's a weekday. Back to work!");
}   


// /Debugging with console.log/
// Definition: Debugging is the process of identifying and fixing errors or bugs in the code. Using console.log statements helps to trace the flow of execution and inspect variable values.

// /Example of debugging/

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


// /try catch/
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

// /finally block/
// Definition: A finally block is used in conjunction with try and catch blocks to execute code that should run regardless of whether an error occurred or not.


finally {
    console.log("Execution completed."); // This will always run
}

// /throwing custom error/
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


// /First class functions/
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


// /Functions in Variables/
// Definition: Functions can be assigned to variables, allowing them to be passed around and invoked later.

let multiply = function(x, y) { // Assigning a function to a variable
    return x * y; // Return the product
};

let productResult = multiply(4, 5); // Call the function using the variable
console.log("Product Result using function in variable:", productResult); // Log the result 

// /returning Functions from Functions/
// Definition: Functions can return other functions, allowing for the creation of higher-order functions.

function createMultiplier(factor) { // Function that returns another function
    return function(x) { // Returned function that multiplies by the factor
        return x * factor; // Return the product
    };
}

let double = createMultiplier(2); // Create a function that doubles a number
let triple = createMultiplier(3); // Create a function that triples a number

console.log("Double of 5:", double(5)); // Log the result of doubling 5
console.log("Triple of 5:", triple(5)); // Log the result of tripling 5     

// /Threading in JavaScript/
// Definition: JavaScript is single-threaded, meaning it can execute one task at a time. However, it can handle asynchronous operations using mechanisms like callbacks, promises, and async/await to avoid blocking the main thread.


// /setTimeout/
// Definition: setTimeout is a built-in JavaScript function that allows you to execute a function after a specified delay.

function delayedGreeting() { // Function to be executed after a delay
    console.log("This message is displayed after a 2-second delay.");
}

setTimeout(delayedGreeting, 2000); // Set a timeout to call the function after 2000 milliseconds (2 seconds)


// /setInterval/
// Definition: setInterval is a built-in JavaScript function that allows you to execute a function repeatedly at specified intervals.

function repeatedMessage() { // Function to be executed at intervals
    console.log("This message is displayed every 3 seconds.");
}

let intervalId = setInterval(repeatedMessage, 3000); // Set an interval to call the function every 3000 milliseconds (3 seconds)

// To stop the interval after some time, you can use clearInterval
setTimeout(() => {
    clearInterval(intervalId); // Stop the interval after 10 seconds
    console.log("Stopped the repeated messages.");
}, 10000);

// /Anonymous Functions/
// Definition: Anonymous functions are functions that are defined without a name. They are often used as arguments to other functions or assigned to variables.

let numbers = [1, 2, 3, 4, 5]; // Array of numbers

let squaredNumbers = numbers.map(function(num) { // Using an anonymous function with map
    return num * num; // Return the square of the number
});

console.log("Squared Numbers using anonymous function:", squaredNumbers); // Log the squared numbers


// /callback functions/
// Definition: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

function fetchData(callback) { // Function that simulates data fetching
    setTimeout(() => { // Simulate an asynchronous operation
        let data = "Sample Data"; // Sample data
        callback(data); // Call the callback function with the fetched data
    }, 1000); // Delay of 1 second
}

fetchData(function(data) { // Passing an anonymous function as a callback
    console.log("Fetched Data:", data); // Log the fetched data
});

// /Advanced Array Methods/ 

// /forEach/
// Definition: The forEach method executes a provided function once for each array element.

let colors = ["Red", "Green", "Blue"]; // Array of colors

console.log("Colors List using forEach:");
colors.forEach(function(color) { // Using an anonymous function with forEach
    console.log(color); // Log each color
});

// example without anonymous function
function logColor(color) {
    console.log(color);
}

console.log("Colors List using forEach with named function:");
colors.forEach(logColor); // Using a named function with forEach        

// /map/
// Definition: The map method creates a new array populated with the results of calling a provided function on every element in the calling array.

let doubledArray = numbers.map(function(num) { // Using an anonymous function with map
    return num * 2; // Return the doubled value
});

console.log("Doubled Array using map:", doubledArray); // Log the doubled array

// example without anonymous function
function doubleValue(num) { // Named function to double a value 
    return num * 2;
}

let doubledArrayNamed = numbers.map(doubleValue); // Using a named function with map
console.log("Doubled Array using map with named function:", doubledArrayNamed); // Log the doubled array

// /filter/
// Definition: The filter method creates a new array with all elements that pass the test implemented by the provided function.

let evenNumbers = numbers.filter(function(num) { // Using an anonymous function with filter
    return num % 2 === 0; // Return true for even numbers
});

console.log("Even Numbers using filter:", evenNumbers); // Log the even numbers

// example without anonymous function
function isEven(num) { // Named function to check if a number is even
    return num % 2 === 0;
}

let evenNumbersNamed = numbers.filter(isEven); // Using a named function with filter
console.log("Even Numbers using filter with named function:", evenNumbersNamed); // Log the even numbers

// /find and findIndex/
// Definition: The find method returns the value of the first element in the array that satisfies the provided testing function. The findIndex method returns the index of the first element that satisfies the provided testing function.

let firstEvenNumber = numbers.find(function(num) { // Using an anonymous function with find
    return num % 2 === 0; // Return true for even numbers
});

console.log("First Even Number using find:", firstEvenNumber); // Log the first even number

let firstEvenIndex = numbers.findIndex(function(num) { // Using an anonymous function with findIndex
    return num % 2 === 0; // Return true for even numbers
});

console.log("Index of First Even Number using findIndex:", firstEvenIndex); // Log the index of the first even number   

// /DOM Manipulation/
// Definition: The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

document.body.style.backgroundColor = "#f0f8ff";
let heading = document.createElement("h1");
heading.textContent = "Welcome to My JavaScript Practice!";
document.body.appendChild(heading);
let paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was added using JavaScript.";
document.body.appendChild(paragraph);
heading.style.color = "#000000ff";
paragraph.style.fontSize = "18px";
paragraph.style.color = "#008535ff";
paragraph.style.marginTop = "10px";
