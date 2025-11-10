// FizzBuzz

// Instructions:

// You are given a positive integer number `n`, where it is less than 100 (excluded).

//For every number up to `n` (included):

// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `fizzBuzz` using JavaScript that solves the above problem and satisfies the conditions.

// PSEUDOCODE:
// algorithm FizzBuzz, takes n, returns nothing:
	// if n is not a positive integer that is less than 100:
	    //	print Error and stop    
	// for each integer from 1 to n (both included):
        //	if the number is divisible by 3:
            //		print Fizz  
        //	if the number is divisible by 5:
            //		print Buzz
        //	if the number is divisible by 3 and 5:
            //		print FizzBuzz
        //	if the number is not divisible by 3 or 5:
            //		print the number


function fizzBuzz(n) {
    if (n < 1 || n >= 100) {
        console.log("Error");
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// test

fizzBuzz(15); // Printed numbers from 1 to 15 with Fizz, Buzz, and FizzBuzz substitutions
fizzBuzz(0);  // Printed "Error"
fizzBuzz(100); // Printed "Error"
fizzBuzz(30); // Printed numbers from 1 to 30 with Fizz, Buzz, and FizzBuzz substitutions

// Numbers that would print errors:
fizzBuzz(0);
fizzBuzz(100);

// Numbers that would print Fizz, Buzz, FizzBuzz, or the number itself:
fizzBuzz(15);
fizzBuzz(45);
fizzBuzz(22);

// numbers that would print only numbers:
fizzBuzz(1);
fizzBuzz(2);
fizzBuzz(4);

// Letter Count

// Instructions: 

// You are given a string `word` consisting of alphabetical characters.

// For each unique letter in the `word`:

// - Return the lower-case letter followed by the number of times it occurs in the `word`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `letterOccurrence` using JavaScript that solves the above problem and satisfies the conditions.

// PSEUDOCODE:
    // algorithm LetterCount, takes word, returns a dictionary with letter counts:
	//  if word is not a string of alphabetical characters:
		// print Error and stop

	// create a dictionary to hold letter counts

	//  for each letter in word:
		//  if dictionary already has the letter:
	      //  // increment the count of the letter by 1
	    // else
		    // set the count of the letter to 1

	//  return the dictionary that holds the letter counts


function letterOccurrence(word) {
    if (typeof word !== "string") {
        console.log("Error");
        return;
    }

    const letterCount = {};

    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    for (const [letter, count] of Object.entries(letterCount)) {
        console.log(`${letter}${count}`);
    }
}

// test

letterOccurrence("Hello"); // Printed "h1", "e1", "l2", "o1"
letterOccurrence("Mississippi"); // Printed "m1", "i4", "s4", "p2"
letterOccurrence(123); // Printed "Error"
letterOccurrence("AabbCC"); // Printed "a2", "b2", "c2" 