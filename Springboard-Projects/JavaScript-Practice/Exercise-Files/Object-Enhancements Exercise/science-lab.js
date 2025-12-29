// Object Enhancements Exercise - Science Lab


/* Task 1: Compile Participant Details with Shorthand Property Names */

// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

const name = "Dr. Drake"; // participant's name
const age = 35; // participant's age
const studyField = "Neuroscience"; // participant's field of study

const participant = { name, age, studyField }; // participant object using shorthand property names

console.log(`Participant: ${name}, Age: ${age}, Study Field: ${studyField}`); // log participant details

/* Task 2: Implement a Shorthand Function for Participant Info */

// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participantCopy = { 
    ...participant,
    displayInfo () {
        console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`); // log participant details using `this`
    }
};  // participant copy with shorthand method

participantCopy.displayInfo(); // invoke the displayInfo method

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */

// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantAnotherCopy = { 
    ...participant,
    displayInfo: () => {
        console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`); // log participant details using `this`
    }
};  // participant another copy with arrow function

participantAnotherCopy.displayInfo(); // invoke the displayInfo method
/*
 * Observations:
 * The arrow function does not have its own `this` context; it inherits `this` from the parent scope.
 * Therefore, `this.name`, `this.age`, and `this.studyField` are `undefined` in the arrow function.
 */

/* Task 4: Using Computed Property Names */

// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo (participant, key, value) {
    return {
        ...participant, // spread existing participant properties
        [key]: value // computed property name
    };
} // function to update participant info dynamically

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Neuroscience Study"); // update participant info
console.log(updatedParticipant); // log updated participant object

// Testing the updateParticipantInfo function
const testParticipant = {
    name: "Dr. Smith",
    age: 40,
    studyField: "Biology"
};
const updatedTestParticipant = updateParticipantInfo(testParticipant, "institution", "University of Science");
console.log(updatedTestParticipant); // Expected to include the new 'institution' property

// Test output for verification
console.log("Original Participant:", participant);
console.log("Updated Participant:", updatedParticipant);