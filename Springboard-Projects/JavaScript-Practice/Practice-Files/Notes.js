// /Printing to the Console/
// Definition: The console is a tool used by developers to log information, errors, and other messages during the execution of code.

console.log("Hello, World!");
console.log("This is my first JavaScript code!");

const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
console.log(alphabet);


// let, const, var/
// Definition: These are keywords used to declare variables in JavaScript. 'let' and 'const' are block-scoped, while 'var' is function-scoped. 'const' is used for variables that should not be reassigned.

let variableLet = "Let can be reassigned"; // Block-scoped variable
const variableConst = "Const cannot be reassigned"; // Block-scoped constant
var variableVar = "Var can be reassigned and is function-scoped"; // Function-scoped variable but should NEVER be used in modern code

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

// Anonymous Functions/
// Definition: Anonymous functions are functions that are defined without a name. They are often used as arguments to other functions or assigned to variables.

let multiplyAnonymous = function(x, y) { // Assigning an anonymous function to a variable
    return x * y; // Return the product
};

let multiplicationResultAnonymous = multiplyAnonymous(3, 4); // Call the anonymous function using the variable
console.log("Multiplication Result using anonymous function:", multiplicationResultAnonymous); // Log the result

// Callback Functions/
// Definition: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

function processNumber(num, callback) { // Function that processes a number and calls a callback
    let result = num * 2; // Double the number
    callback(result); // Call the callback with the result
}

processNumber(5, function(result) { // Passing an anonymous function as a callback
    console.log("Processed Result:", result); // Log the processed result
});

// /Higher-Order Functions/
// Definition: A higher-order function is a function that takes another function as an argument or returns a function as its result.
function createAdder(x) { // Function that returns another function
    return function(y) {
        return x + y;
    };
}   
let addFive = createAdder(5); // Create a function that adds 5
let sumWithFive = addFive(10); // Call the returned function with 10
console.log("Sum with Five:", sumWithFive); // Log the result

// /Arrow Functions/
// Definition: Arrow functions are a shorter syntax for writing functions in JavaScript. They are often used for anonymous functions.

const add = (x, y) => { // Arrow function that adds two numbers
    return x + y; // Return the sum
};

let additionResult = add(3, 7); // Call the arrow function
console.log("Addition Result using arrow function:", additionResult); // Log the result

const multiply = (x, y) => x * y; // Concise arrow function that multiplies two numbers

let multiplicationResult = multiply(4, 6); // Call the concise arrow function
console.log("Multiplication Result using concise arrow function:", multiplicationResult); // Log the result 

// /Function Syntax compared to Arrow Function Syntax/
function subtract(x, y) { // Traditional function syntax
    return x - y; // Return the difference
}

const subtractArrow = (x, y) => x - y; // Arrow function syntax 

// Arrow Function Shortcuts
// If the function body contains only a single expression, you can omit the curly braces and the 'return' keyword, as shown in the subtractArrow function above.

const subtractArrowShort = (x, y) => x - y; // Shortened arrow function

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

// Object Enhancement - Shorthand Property Names
// Definition: When the property name and variable name are the same, you can use shorthand syntax to define object properties.


// After:
let name = "John";
let age = 30;
let isStudentLocal = true;

let anotherPerson = {
    name,
    age,
    isStudent: isStudentLocal
};

console.log("Another Person Object:", anotherPerson);

// Object Enhancement - Shorthand Methods
// Definition: You can define methods in an object using shorthand syntax without the 'function' keyword.
// Note: Do NOT use arrow functions here

let calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
};

console.log("Calculator Add:", calculator.add(20, 500));
console.log("Calculator Subtract:", calculator.subtract(20, 5));
console.log("Calculator Multiply:", calculator.multiply(6, 7));
console.log("Calculator Divide:", calculator.divide(40, 8));

// Object Enhancement - Computed Property Names
// Definition: You can use computed property names to define object properties dynamically. This means you can use an expression enclosed in square brackets [] as the property name.

let dynamicKey = "age"; // variable to hold the property name
let anotherPersonComputed = { 
    name: "John", // regular property
    [dynamicKey]: 30, // computed property name
    isStudent: true // regular property
}; // 'age' property is created using the value of dynamicKey variable

console.log("Another Person Object:", anotherPersonComputed);

// Computed property name using function
function getPropertyName() {
    return "isEmployed"; // returns the property name
}
let personWithComputedProperty = {
    name: "John",
    [getPropertyName()]: true // computed property name using function
};
console.log("Person with Computed Property:", personWithComputedProperty);

// /Object Destructuring/
// Definition: Object destructuring is a syntax that allows you to extract properties from an object and assign them to variables in a concise way.

let student = { // Object representing a student
    name: "Alice",
    age: 22,
    major: "Computer Science", 
    school: "Arizona University" // additional property
};

// Destructuring assignment
let { name: studentName, age: studentAge, major: studentMajor, ...others } = student; // Extract properties and collect the rest using rest operator

console.log("Student Name:", studentName); // Log the student's name
console.log("Student Age:", studentAge); // Log the student's age
console.log("Student Major:", studentMajor); // Log the student's major
console.log("Original Student Object:", student); // Log the original object
console.log("Other Properties:", others); // Log the remaining properties

// /Default Values in Destructuring/
// Definition: You can provide default values for variables when destructuring an object. If the property does not exist in the object, the default value will be assigned to the variable.

let { name: studentNameDef, age: studentAgeDef, major: studentMajorDef, gpa = 4.0 } = student; // 'gpa' does not exist in student object, so default value 4.0 is used

console.log("Student Name with Default:", studentNameDef); // Log the student's name
console.log("Student Age with Default:", studentAgeDef); // Log the student's age
console.log("Student Major with Default:", studentMajorDef); // Log the student's major
console.log("Student GPA with Default:", gpa); // Log the student's GPA

// /Array Destructuring/
// Definition: Array destructuring is a syntax that allows you to extract values from an array and assign them to variables in a concise way.
// Note: Value assignment is based on the position of elements in the array.

let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let [first, second, ...rest] = numbers; // Extract first two elements and collect the rest

console.log("First Number:", first);
console.log("Second Number:", second);
console.log("Rest of the Numbers:", rest);

const friends = [ // Array of friend objects
    {name: 'Drake', years: 2},
    {name: 'Alice', years: 3},
    {name: 'Bob', years: 4},
    {name: 'Charlie', years: 1} // use rest operator to collect remaining elements
];

console.log("First Friend's Name:", friends[0].name);
console.log("Second Friend's Name:", friends[1].name);
console.log("Third Friend's Name:", friends[2].name);
console.log("Rest of the Friends:", rest);


// /Function Destructuring/
// Definition: Function destructuring is a technique where you can extract values from an array or object returned by a function and assign them to variables in a concise way.

function getUserInfo() { // Function that returns an object with user information
    return {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    };
} // Function returns an object

let { id, name: userName, email } = getUserInfo(); // Destructure the returned object and alias name to userName

console.log("User ID:", id);
console.log("User Name:", userName); 
console.log("User Email:", email);

// /Nested Destructuring/
// Definition: Nested destructuring allows you to extract values from nested objects or arrays in a concise way.

let user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

let { id: userId, name: userNameNested, email: userEmail, address: { street, city, country } } = user;

console.log("User ID:", userId);
console.log("User Name:", userNameNested);
console.log("User Email:", userEmail);
console.log("User Address:", street, city, country);

// /Destructing Swap/
// Definition: You can use destructuring to swap the values of two variables without needing a temporary variable.

let x = 5; // Initial value of x
let y = 10; // Initial value of y

[x, y] = [y, x]; // Swap the values

console.log("X:", x); // Log the swapped value of x
console.log("Y:", y); // Log the swapped value of y

// /Conditional Statements AKA If-Else Statements/
// Definition: Conditional statements are used to perform different actions based on different conditions.

if (myAge < 18) { // Check if the person is a minor
    console.log(myName + " is a minor.");
} else if (myAge >= 18 && myAge < 65) { // Check if the person is an adult
    console.log(myName + " is an adult.");
} else { // The person is a senior citizen
    console.log(myName + " is a senior citizen.");
}   

// /if statement example/
// Definition: An if statement is used to execute a block of code only if a specified condition is true.

if (person.isStudent) {
    console.log(person.name + " is a student.");
} else {
    console.log(person.name + " is not a student.");
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

// Logical Operators/
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

function addNumbers(a, b) { // Function that adds two numbers (renamed to avoid duplicate identifier)
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

let multiplyFn = function(x, y) { // Assigning a function to a variable
    return x * y; // Return the product
};
displayMessage(multiplyFn);
let productResult = multiplyFn(4, 5); // Call the function using the variable
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

 // reuse the previously declared 'numbers' array

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


// /Rest and Spread Operators/
// Definition:

// The rest operator (...) allows a function to accept an indefinite number of arguments as an array.

// Rest Operator Example
function sumAll(...numbers) { // Using rest operator to accept multiple arguments
    return numbers.reduce((acc, curr) => acc + curr, 0); // Sum all numbers
}

let totalSum = sumAll(1, 2, 3, 4, 5); // Call the function with multiple arguments
console.log("Total Sum using rest operator:", totalSum); // Log the total sum

// The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected.

// Spread Operator Example
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2]; // Using spread operator to combine arrays
console.log("Combined Array using spread operator:", combinedArray); // Log the combined array

// /Spread Operator in Function Calls/
// Definition: The spread operator can also be used to expand an array into individual elements when calling a function.

function multiplyThreeNumbers(x, y, z) { // Function that multiplies three numbers
    return x * y * z; // Return the product
}

let numbersArray = [2, 3, 4];

let productOfThree = multiplyThreeNumbers(...numbersArray); // Using spread operator to pass array elements as arguments
console.log("Product of Three Numbers using spread operator:", productOfThree); // Log the product  

// /Spread Arrays/
// Definition: The spread operator can be used to create a shallow copy of an array or to concatenate multiple arrays.

let originalArray = [10, 20, 30];
let copiedArray = [...originalArray]; // Creating a shallow copy using spread operator
console.log("Copied Array using spread operator:", copiedArray); // Log the copied array

let additionalArray = [40, 50];
let concatenatedArray = [...originalArray, ...additionalArray]; // Concatenating arrays using spread operator
console.log("Concatenated Array using spread operator:", concatenatedArray); // Log the concatenated array  

