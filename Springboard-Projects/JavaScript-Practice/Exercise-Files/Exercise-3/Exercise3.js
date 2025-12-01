// STEP 1: Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's Math functions.

const randomDecimal = Math.random();

// SPRINGBOARD EXPLANATION:

// const randomDecimal = Math.random();

// const range = 33 - 3 + 1; // 31

// const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).

// const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).

// const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33


// STEP 2: Determine the desired range of numbers for our secret shift value, which is between 3 and 33.

const min = 3;
const max = 33;
const range = max - min + 1; // 31

    // QUESTION 1: Why did we add 1 to the difference between 33 and 3?

        // ANSWER 1: We add 1 to include both endpoints (3 and 33) in the range. Without adding 1, the range would only cover numbers from 3 to 32.

// STEP 3: Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.

const randomInRange = randomDecimal * range;

    // QUESTION 2: How does multiplying randomDecimal by range help us get a number within our desired range?

        // ANSWER 2: Multiplying randomDecimal (which is between 0 and 1) by range (31) scales the decimal to a number between 0 (inclusive) and 31 (exclusive). This allows us to later adjust it to fit within our desired range of 3 to 33.

// STEP 4: Round down the decimal number obtained in Step 3 to get a whole integer.

const randomInt = Math.floor(randomInRange);

    // QUESTION 3: Why do we use the Math.floor() function instead of other rounding methods like Math.round()?

        // ANSWER 3: We use Math.floor() to ensure the number is always rounded down, preventing it from exceeding the maximum value in our range.

        // SPRINGBOARD EXPLANATION: We use Math.floor() to ensure we always round down to the nearest whole number, giving us an integer between 0 and range - 1. Using Math.round() could potentially round up, causing us to exceed our desired range.

// STEP 5: Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.

const shiftValue = randomInt + 3; 

    // QUESTION 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33? 

        // ANSWER 4: Adding 3 shifts the range from 0-30 to 3-33, ensuring the final value falls within the desired range.