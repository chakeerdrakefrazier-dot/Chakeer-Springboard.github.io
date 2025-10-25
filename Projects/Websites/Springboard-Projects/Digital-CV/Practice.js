// COMPARISON OPERATORS ---------------------------------

// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// === strict equality
// !== strict inequality

// EXAMPLES OF CONDITIONAL STATEMENTS ---------------------

// EXAMPLE 1 -------------------------------------

// IF STATEMENTS:



    // Performance rating
    // 3 - Superstar
    // 2 - Meets Expectations
    // 1 - Needs Improvement    
    // anything else - wtf?

let rating = 3;
if (rating === 3) {
    console.log("You are a superstar!");
}

// ELSE IF STATEMENTS: 

else if (rating === 3) {
    console.log("You are a superstar!");
}
else if (rating === 2) {
    console.log("You meet expectations.");
}
else if (rating === 1) {
    console.log("You need improvement.");
}

// ELSE STATEMENTS:

else { 
    console.log("INVALID RATING");
} 

// EXAMPLE 2 -------------------------------------

// IF STATEMENT:

let highscore = 1000;
let userScore = 1800;

if (userScore >= highscore) {
    console.log(`Congratulations! New High Score! of ${userScore}`); highscore = userScore;
}

// ELSE STATEMENT:

else {
    console.log(`Good try! Your score was ${userScore}. The high score is still ${highscore}.`);
}

// NESTED CONDITIONAL STATEMENTS ---------------------

// Password validation Example:

let password = 'javascript123';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password.");
    } 
    else {
        console.log("Password cannot contain spaces.");
    }
}
else {
    console.log("Password too short! Must be at least 6 characters.");
}

// LOGICAL OPERATORS -----------------------------------
// There are three logical operators in JavaScript:
    // && AND
    // || OR
    // ! NOT

// EXAMPLE 3 -------------------------------------
// && AND

let password2 = 'hello1234';

if (password2.length >= 6 && password2.indexOf(' ') === -1) {
    console.log("Valid password.");
} 
else {
    console.log("Invalid password.");
}

// EXAMPLE 4 -------------------------------------
// || OR (|| means "or")

let age = 0;

if (age < 6 || age >= 65) {
    console.log("You get in for free!");
} 
else {
    console.log("That will be $10, please.");
}

// EXAMPLE 5 -------------------------------------
// ! NOT

// if there isnt a logged in user
let loggedInUser = null;

if (!loggedInUser) {
    console.log("Get out of here!");
} 
else {
    console.log("Welcome back!");
}

let flavor = 'cherry';

if(!(flavor === 'grape' || flavor === 'cherry' || flavor === 'orange')) {
    console.log("We don't have that flavor.");
} 
else {
    console.log("Great choice!");
}

// OPERATOR PRECEDENCE -----------------------------------
    // Parentheses
    // NOT
    // AND
    // OR
    // You can use parentheses to change the order of operations

let x = 5;
(x == 5 || x > 10) && x < 20  // true
x == 5 || (x > 10 && x < 20)  // true   

// TRUTHY AND FALSY VALUES -----------------------------------
    // FALSY VALUES: false, 0, "", null, undefined, NaN
    // Everything else is TRUTHY

if (0) {
    console.log("This won't run.");
} 
else {
    console.log("0 is falsy.");
}

if ("hello") {
    console.log("This will run.");
} 
else {
    console.log("This won't run.");
}

if (null) {
    console.log("This won't run.");
} 
else {
    console.log("null is falsy.");
}

if (undefined) {
    console.log("This won't run.");
} 
else {
    console.log("undefined is falsy.");
}

if (NaN) {
    console.log("This won't run.");
} 
else {
    console.log("NaN is falsy.");
}

if ([]) {
    console.log("An empty array is truthy.");
} 
else {
    console.log("This won't run.");
}

if ({}) {
    console.log("An empty object is truthy.");
} 
else {
    console.log("This won't run.");
}

if (42) {
    console.log("This will run.");
} 
else {
    console.log("This won't run.");
}

if (function() {}) {
    console.log("A function is truthy.");
} 
else {
    console.log("This won't run.");
}

// SWITCH STATEMENTS -----------------------------------

let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");     
        break;  
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}       

// TERNARY OPERATOR -----------------------------------
// condition ? exprIfTrue : exprIfFalse

// Example:

let age2 = 19;
age2 >= 21 ? console.log("You can drink!") : console.log("No drinking for you!");

// Another example:

let status = 'offline';

let color = status === 'offline' ? 'red' : 'green';
console.log(color);