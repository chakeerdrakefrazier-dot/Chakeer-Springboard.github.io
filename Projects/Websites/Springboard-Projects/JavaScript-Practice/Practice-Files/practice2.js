
// PASSWORD VALIDATION PRACTICE ----------------------------------------------------------

// Write a isValidPassword function
// It accepts two arguments: password and username
// Password must meet the following criteria to be considered valid:
    // 1. It must be at least 8 characters long
    // 2. It cannot contain spaces
    // 3. It cannot contain the username
// If all criteria are met, return true. Otherwise, return false.

// isValidPassword("89Fjj1nms", "dogLuvr") // true
// isValidPassword("dogLuvr123!", "dogLuvr") // false
// isValidPassword("short", "dogLuvr") // false

// function name(parameters) { ...code... }

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(' ')) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

// Test cases:
console.log(isValidPassword("89Fjj1nms", "dogLuvr")); // true
console.log(isValidPassword("dogLuvr123!", "dogLuvr")); // false
console.log(isValidPassword("short", "dogLuvr")); // false


// AVERAGE VALUE PRACTICE -------------------------------------------------------

// write a function to find the average value in an array of numbers
// avg( [0,50] ) should return 25
// avg( [75,76,80,95,100] ) should return 85.2

// loop over each number in the array, keeping a running total
// add up all the numbers
// divide the total by the number of items in the array
// return the result    

function avg(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

// Test cases:
console.log(avg([0, 50])); // 25
console.log(avg([75, 76, 80, 95, 100])); // 85.2


// PANGRAM PRACTICE ----------------------------------------------------------

// A pangram is a sentence that contains every letter of the alphabet at least once.

// Write a function isPangram that checks if a given sentence is a pangram, which checks to see if every letter a-z is present in the sentence.

// ignore string casing

// Example usage:
// isPangram("The quick brown fox jumps over the lazy dog") // true
// isPangram("Hello world") // false

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    sentence = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (!sentence.includes(alphabet[i])) {
            return false;
        }
    }
    return true;
}

// Test cases:
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello world")); // false
console.log(isPangram("Sphinx of black quartz, judge my vow")); // true
console.log(isPangram("JavaScript is fun")); // false


// GETCARD PRACTICE

// Write a getCard() function which returns a random playing card object, like:
// {
//   value: 'K',
//   suit: 'clubs'
// }

// Pick a random value from:
// 1-10, J, Q, K, A
// Pick a random suit from:
// clubs, spades, hearts, diamonds
// return both in an object
// use the function to avoid repeating code

function getCard() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    return {
        value: randomValue,
        suit: randomSuit
    };
}

// Test case:
console.log(getCard()); // e.g., { value: 'K', suit: 'clubs' }  
