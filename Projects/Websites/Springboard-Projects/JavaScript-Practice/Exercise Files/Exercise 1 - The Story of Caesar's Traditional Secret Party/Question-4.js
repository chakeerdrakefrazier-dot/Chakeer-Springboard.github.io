// QUESTION 4 - Given the variable shiftValue, write a piece of code to check if its value is an integer.

// MY ANSWER BELOW

const shiftValue = 3 // number of letters to shift in the cipher

console.log(typeof shiftValue === 'number' && Number.isInteger(shiftValue)); // true    

// In Console:

console.log(typeof shiftValue); // "number"

// Alternative method

console.log(Number.isInteger(shiftValue)); // true