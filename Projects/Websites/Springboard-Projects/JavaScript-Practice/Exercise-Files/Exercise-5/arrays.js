// Exercise 5: Caesar's Party Guest List

// INSTRUCTIONS: Given the initial array of guests below, follow the steps below and write your answers. Remember to place your responses as comments where they appear in the exercise.:

    // Initial array of guests
        const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// STEP 1: Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.

    guests.unshift('BRUTUS')


    // QUESTION 1: How can you verify that "BRUTUS" was added to the beginning of the array?
    // ANSWER: You can verify that "BRUTUS" was added to the beginning of the array by checking if the return value increased then by checking the first element of the array using guests[0] or by printing the entire array to see if "BRUTUS" is at the start.


// STEP 2: A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.

    guests.push('AUGUSTUS','LUCIA')

// STEP 3: Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.

    // MY CODE: guests.indexOf('SPARTACUS')
    // ANSWER: 
        const spartacusIndex = guests.indexOf('SPARTACUS');

    // QUESTION 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
    // ANSWER: If "SPARTACUS" wasn't invited, the value of spartacusIndex would be -1, indicating that the element is NOT found in the array.


// STEP 4: Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.

    // MY CODE: guests.splice(3,1)
    // ANSWER: 
        const indexToRemove = guests.indexOf("CASSIUS");guests.splice(indexToRemove, 1);

// STEP 5: Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.

    // MY CODE: guests.slice(0, 3);
    // ANSWER:
        const specialInvites = guests.slice(0, 3);

// STEP 6: Caesar decides he wants the guest list in alphabetical order. Sort the array. However, Caesar wants his most honored guest (the one added first) to remain at the top of the list. Can you think of a way to sort the guests but keep the honored ones at the top?

    // MY CODE: guests.sort()

    // ANSWER:
        const honoredGuest = guests.shift();
        guests.sort();
        guests.unshift(honoredGuest);