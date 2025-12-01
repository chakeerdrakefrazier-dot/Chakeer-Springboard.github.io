// Exercise 7: Meeting Again with Caesar's Best Friend

// INSTRUCTIONS: Your objective is to encrypt the name "BRUTUS" using the Caesar Cipher technique and loops. Remember, we did it once for "B". Now, it's time to apply all letters.

    // Initial Code:

        const friend = "BRUTUS"
        const shiftValue = 3;

// STEP 1: Recall the Latin alphabet variable from the previous exercise.

        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// STEP 2: Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.

        let encryptedName = "";

        for (let i = 0; i < friend.length; i++) {
            const currentLetter = friend[i];
            const currentIndex = alphabet.indexOf(currentLetter);
            const newIndex = (currentIndex + shiftValue) % alphabet.length;
            const newLetter = alphabet[newIndex];
            encryptedName += newLetter;
        }


        console.log(encryptedName); // Output the encrypted name - 'EUXWXV'

// STEP 3: Answer the following questions in comments.

    // QUESTION 1: What advantage does using a loop provide over manually encrypting each letter?

        // ANSWER:  Using a loop allows us to automate the encryption process for each letter in the string, making the code more efficient and scalable.


    // QUESTION 2: Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?

        // ANSWER: The % operator ensures that if the new index exceeds the length of the alphabet, it wraps around to the beginning allowing for a continuous loop through the alphabet.