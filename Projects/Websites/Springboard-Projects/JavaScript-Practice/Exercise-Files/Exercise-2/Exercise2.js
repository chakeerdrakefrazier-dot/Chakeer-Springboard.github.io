// Instructions: You are given the below code:

const friend = 'BRUTUS'
const shiftValue = 3;

// Instructions: Please incorporate the following steps into a single JavaScript file, placing the provided code at the top. Insert your answers to the questions as comments where they appear.

// STEP 1: Store the Latin alphabet in a variable with all letters in lowercase.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// STEP 2: Find the "index" of the "first letter" of Ceaser's friend. Store it in a variable.

console.log(friend[0]); // This will log 'B'
const firstLetterIndexOfBrutus = alphabet.indexOf(friend[0].toLowerCase());
console.log(firstLetterIndexOfBrutus); // This will log 1

// QUESTION 1: why the result is 1 instead of 2?

// ANSWER: The result is 1 because the index of a string starts at 0. Therefore, 'a' is at index 0, 'b' is at index 1, and so on.

// STEP 3: Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.

const encryptedFirstLetterIndex = (firstLetterIndexOfBrutus + shiftValue);
const encryptedFirstLetter = alphabet[encryptedFirstLetterIndex];
console.log(encryptedFirstLetter); // This will log 'e'

// QUESTION 2: If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?

// ANSWER: The modulo operator (%) helps us wrap around to the beginning of the alphabet when we go beyond "z".

// SPRINGBOARD NOTE: If we try to access an index beyond the length of our alphabet, the modulus operator ensures that the result wraps around starting from 0. For instance, accessing the 28th position (which doesn't exist) would give us an index of 2, corresponding to the third letter, "c". This operator ensures we always get a valid index within the bounds of the alphabet.

// STEP 4: Determine the length of the alphabet.

const alphabetLength = alphabet.length;
console.log(alphabetLength); // This will log 26

// STEP 5: Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.

const wrappedShiftedIndex = (firstLetterIndexOfBrutus + shiftValue) % alphabetLength;
console.log(wrappedShiftedIndex); // This will log 4
const wrappedEncryptedLetter = alphabet[wrappedShiftedIndex];
console.log(wrappedEncryptedLetter); // This will log 'e'

// STEP 6: Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)

const encryptedMessage = "EUXWXV";
const teaser = encryptedMessage.slice(0, 3);
console.log(teaser); // This will log 'EUX'

