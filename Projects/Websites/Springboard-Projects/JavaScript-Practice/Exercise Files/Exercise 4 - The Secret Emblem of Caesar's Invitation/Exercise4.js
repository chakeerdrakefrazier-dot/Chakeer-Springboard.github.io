// Exercise 4: The Secret Emblem of Caesar's Invitation

// Instructions: You are given the below code: 

    const emblemClue1 = "Eagle";
    const emblemClue2 = "Laurel";
    const emblemClue3 = 7;

// Instructions: Use the knowledge you've gained on program logic and flow to perform the following steps. Add your answers to the questions as comments where they appear.

// STEP 1: Use a series of if, else if, and else statements to decipher the first clue. 

// - If `emblemClue1` is "Eagle", the location starts with "Forum".

// - If `emblemClue1` is "Lion", the location starts with "Colosseum".

// - Otherwise, the location starts with "Villa".

let location = "";
if (emblemClue1 === "Eagle") {
    location = "Forum";
} else if (emblemClue1 === "Lion") {
    location = "Colosseum";
} else {
    location = "Villa";
}

// STEP 2: Use boolean logic to decipher the second clue.

// - If emblemClue2 is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.

// - If emblemClue2 is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

if (emblemClue2 === "Laurel" && location === "Forum") {
    location += " of Augustus";
} else if (emblemClue2 === "Grapes" || location === "Villa") {
    location += " of Pompey";
}

// STEP 3: Use the switch statement to decipher the third clue.
// - Depending on the value of emblemClue3, append a direction to the location.
// - 7 is "North"
// - 3 is "South"
// - 9 is "East"
// - 4 is "West"

switch (emblemClue3) {
    case 7:
        location += " North";
        break;
    case 3:
        location += " South";
        break;
    case 9:
        location += " East";
        break;
    case 4:
        location += " West";
        break;
    default:
        console.log("Unknown direction");
}

        // QUESTION 1: Why is it important to be careful when using == (double equals) instead of === (triple equals) in our conditionals?

        // ANSWER: Using == can lead to unexpected type coercion, which may cause conditions to evaluate in unintended ways. === checks for both value and type equality, making it safer for comparisons. 

// STEP 4: Finally, log the complete location to the console.

console.log("The secret location is: " + location);

        // QUESTION 2: What will be logged to the console when the above code is executed with the provided values for emblemClue1, emblemClue2, and emblemClue3?

        // ANSWER: The secret location is: Forum of Augustus North  