// Exercise 8: Caesar's Cipher Reloaded

// INSTRUCTIONS: Incorporate the following steps into a single JavaScript file, placing the provided code at the top. Insert your answers to the questions as comments where they appear.

    // Initial Code:

        const friend = "BRUTUS";
        const shiftValue = 3;
        const alphabet = "abcdefghijklmnopqrstuvwxyz";

// STEP 1: Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

    function encryptLetter(letter, shift) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const letterIndex = alphabet.indexOf(letter.toLowerCase());
        const newIndex = (letterIndex + shift) % alphabet.length;
        return alphabet[newIndex].toUpperCase();
    }
    
    // test
        const testLetter = 'B';
        const encryptedLetter = encryptLetter(testLetter, shiftValue);
        console.log(`Encrypted Letter: ${encryptedLetter}`); // Output: Encrypted Letter: E

// STEP 2: Create a function named encryptMessage that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

    function encryptMessage(word, shift) {
        let encryptedWord = "";
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            encryptedWord += encryptLetter(letter, shift);
        }
        return encryptedWord;
    }
    
    // test
        const encrypted = encryptMessage(friend, shiftValue);
        console.log(`Encrypted Message: ${encrypted}`); // Output: Encrypted Message: EUWXVX

// STEP 3: Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

    function decryptLetter(letter, shift) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const letterIndex = alphabet.indexOf(letter.toLowerCase());
        let newIndex = (letterIndex - shift) % alphabet.length;
        return alphabet[newIndex].toUpperCase();
    }

    // test
        const testEncryptedLetter = 'E';
        const decryptedLetter = decryptLetter(testEncryptedLetter, shiftValue);
        console.log(`Decrypted Letter: ${decryptedLetter}`); // Output: Decrypted Letter: B

// STEP 4: Create a function named decryptMessage that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

    function decryptMessage(word, shift) {
        let decryptedWord = "";
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            decryptedWord += decryptLetter(letter, shift);
        }
        return decryptedWord;
    }

    // test
        const decrypted = decryptMessage(encrypted, shiftValue);
        console.log(`Decrypted Message: ${decrypted}`); // Output: Decrypted Message: BRUTUS

    // QUESTIONS: If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not?

    // ANSWER: Yes, Caesar will get "BRUTUS" back because the encryption and decryption functions are designed to reverse each other's operations. 