// TECHNICAL SKILLS SURVEY: Project Part 2 - Helping Caesar's Traditional Secret Party

// INSTRUCTIONS: 

    // Craft two intricate functions: 

        // 1 - One that 'encrypts' a message in the spirit of Caesar's Cipher but with added layers of complexity 

        // 2 - Another that 'decrypts' such messages, unveiling their hidden content.

// REQUIREMENTS:

   // - 1. Implementing the Encryption Algorithm of Caesar's Cipher:

            // - Step 1: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, pass it as is to the encrypted string.

            // - Step 2: After every two letters, insert a random letter from the alphabet.

   // - 2. Implementing the Decryption Algorithms of Caesar's Cipher:

            // - Step 3:  Take in the encrypted message and a shift value and return the original plaintext message.

            // - Step 4:  Accurately reverse the encryption process to retrieve the original message.

    // - 3. Decrypting the Secret Message: 

            // Secret Message: Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.

            // Step 5: Decrypt the above secret message using 42 as the shift value and complete the quest.

// INITIAL CODE 

    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Define the alphabet for encryption and decryption

    // ENCRYPTION FUNCTION 

        // Step 1: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, pass it as is to the encrypted string.
        // Step 2: After every two letters, insert a random letter from the alphabet.

            function encrypt(message, shift) { // Encrypt the message using Caesar's Cipher
                let encrypted = ""; // Initialize the encrypted string
                for (let i = 0; i < message.length; i++) { // Iterate through each character in the message
                    const char = message[i]; // Get the current character
                    const isUpperCase = char === char.toUpperCase(); // Check if the character is uppercase
                    const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0); // Determine the base ASCII code
                    const charCode = char.charCodeAt(0); // Get the ASCII code of the character
                    if (charCode >= base && charCode < base + 26) { // Check if the character is a letter
                        const newChar = String.fromCharCode(((charCode - base + shift) % 26) + base); // Shift the character
                        encrypted += newChar; // Append the shifted character to the encrypted string
                    } else { // Non-alphabetic characters are added unchanged
                        encrypted += char; // Append the original character to the encrypted string
                    } // End of character check
                    // Step 2: After every two letters, insert a random letter from the alphabet.
                    if ((i + 1) % 2 === 0) { // After every two characters (0-based index)
                        const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)]; // Generate a random letter from the alphabet
                        encrypted += randomChar; // Insert the random letter into the encrypted string
                    } // End of random letter insertion
                } // End of message iteration
                return encrypted; // Return the final encrypted string
            } // End of encrypt function


// DECRYPTION FUNCTION 

        // Step 3:  Take in the encrypted message and a shift value and return the original plaintext message.
        // Step 4:  Accurately reverse the encryption process to retrieve the original message.

            function decrypt(encryptedMessage, shift) { // Decrypt the message using Caesar's Cipher
                const alphabetLength = alphabet.length; // Length of the alphabet
                if (typeof shift !== "number" || Number.isNaN(shift)) shift = 0; // Validate shift value
                shift = ((shift % alphabetLength) + alphabetLength) % alphabetLength; // Normalize shift value

                let decrypted = ""; // Initialize the decrypted string
                let p = 0;           // pointer into encryptedMessage 
                let origIndex = 0;   // index of the original characters (0-based) 

                while (p < encryptedMessage.length) { // Iterate through the encrypted message
                    // Process one original character at a time
                    const ch = encryptedMessage[p]; // Get the current character from the encrypted message
                    const isUpperCase = ch === ch.toUpperCase(); // Check if the character is uppercase
                    const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0); // Determine the base ASCII code
                    const charCode = ch.charCodeAt(0); // Get the ASCII code of the character

                    if (charCode >= base && charCode < base + 26) { // Check if the character is a letter
                        const newChar = String.fromCharCode(((charCode - base - shift + 26) % 26) + base); // Reverse shift the character
                        decrypted += newChar; // Append the reversed shifted character to the decrypted string
                    } else { // Non-alphabetic characters are added unchanged
                        decrypted += ch; // Append the original character to the decrypted string
                    } // End of character check

                    p++; // consumed one encrypted char (corresponding to one original char)  

                    // After every two ORIGINAL characters, encryption inserted one random char —
                    // skip that inserted char in the encrypted stream.

                    if ((origIndex + 1) % 2 === 0) { // After every two original characters (0-based index)
                        if (p < encryptedMessage.length) p++; // skip the inserted random character
                    } // End of random letter skipping

                    origIndex++; // Move to the next original character index
                } // End of encrypted message iteration

                return decrypted; // Return the final decrypted string
            } // End of decrypt function

// TESTING ENCRYPTION AND DECRYPTION:

        const testMessage = "Hello, World!"; // Test message to encrypt and decrypt
        const originalShiftValue = 3; // Shift value for testing
        const encryptedMessage = encrypt(testMessage, originalShiftValue); // Encrypt the test message

        // TEST: Encrypted Message:

            console.log ("Encrypted Message:", encryptedMessage); // Should output the encrypted message

                // NOTES: It WORKS!!! Printed message has random letters inserted, so output will vary each time

        const decryptedMessage = decrypt(encryptedMessage, originalShiftValue); // Decrypt the encrypted message

        // TEST: Decrypted Message:

            console.log ("Decrypted Message:", decryptedMessage); // Should output "Hello, World!"   

                // NOTES: It WORKS!!! It should always return the original message after fixing the problem below.

                // PROBLEM: Printed message is not matching original message. Need to fix decryption function to properly skip random letters. 

                    // (Printed 'Hello,iWhrpdr' instead of 'Hello, World!')

                // FIX: Update the decryption function to properly skip random letters.

                    // UPDATES: Replaced previous decrypt with a version that mirrors the encrypt logic:

                         // encrypt inserts one random char AFTER every original 2 characters (index-based),so decrypt must consume one encrypted char per original char and skip the inserted charafter every two original chars.

                // TESTING THE FIX: Re-run console.log ("Decrypted Message:", decryptedMessage); Printed 'Hello, World!'

// DECRYPTING THE SECRET MESSAGE:

        // Step 5: Decrypt the secret message using 42 as the shift value.
           
            // Secret Message: Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.

                const shiftValue = 42; // Shift value for secret message

                const secretMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj."; // assigned the secret messages as a constant value

                // const encryptedSecret = encrypt(secretMessage, shiftValue); // -- CAN NOT RUN ENCRYPTION SEE PROBLEM BELOW!!!:

                    // const encryptedSecret = secretMessage; Code not needed since we are not encrypting the secret message again

                   // console.log ("Encrypted Secret Message:", encryptedSecret); // Would output the encrypted secret message but I do not need it because i am not running the encryption.

                const decryptedSecret = decrypt(encryptedSecret, shiftValue); // Decrypt the encrypted secret message

                        // PROBLEM: Printed message is decrypting the encrypted message but the original secret message is not being restored correctly. This happens because the encryption process alters the original message by inserting random characters, encrypting an already encrypted message.

                        // FIX: Do not encrypt the secret message again, just decrypt the already encrypted message. Commented out the encryption codes above to avoid repeating this mistake and re ran the decryption code.

                        // CODE USE TO FIX THIS PROBLEM: 
                        
                            const encryptedSecret = secretMessage;

                        // TEST DECRYPTION OF SECRET MESSAGE:

                            console.log ("Decrypted Secret Message:", decryptedSecret); // Should output the original secret message

                        // OUTPUT OF DECRYPTED MESSAGE: It WORKS!!!

                            //  "Seek the midnight shadow of Romulus and Remus. There, whisper the word 'Aurelius' to the winds. The first to unveil it in our Slack channel earns the key to the next quest."



// OTHER REQUIREMENTS:

    // - 4. Using Comments: As you build your functions, document your thought process, the purpose of each section of your code, and any challenges you come across. Good commenting not only helps others understand your code but also aids you in tracking your logic.

            // COMPLETED THROUGHOUT THE CODE ABOVE


    // - 5. Attributing Help: If you incorporate code or inspiration from online resources, attribute the source. At a minimum, provide the URL. If you get help from mentors or TAs, describe the help given and attribute the name.

            // RESOURCES USED: 
            
              // - Previous exercises on Caesar's Cipher from Springboard course materials.
              // - General knowledge of ASCII values discussed with mentor Obed during a mentoring session.
              // - GitHub Copilot and VS Code Chat for code suggestions, improvements and problem-solving assistance.

