// Exercise 6: Caesar's Party VIP Guest Directory (Objects)

// INSTRUCTIONS: Start with this initial guest directory. Follow the steps below and write your answers. Remember to place your responses as comments where they appear in the exercise.

    // Initial Guest Directory:

        const guests = {
        ANTONY: {
            title: "General",
            region: "Rome",
            dietaryPreference: "Vegetarian",
            pastGifts: ["Golden Laurel", "Chariot"]
        },
        CICERO: {
            title: "Orator",
            region: "Arpinum",
            dietaryPreference: "Omnivore",
            pastGifts: ["Scroll of Proverbs", "Quill"]
        }
        };

// STEP 1: Add "BRUTUS" to the guest directory. He's a "Senator" from "Rome", prefers "Vegan" food, and in the past, he has gifted Caesar a "Silver Dagger" and a "Marble Bust".

        guests.BRUTUS = {
            title: "Senator",
            region: "Rome",                
            dietaryPreference: "Vegan",
            pastGifts: ["Silver Dagger", "Marble Bust"]
        };


// STEP 2: Update CICERO's past gifts to include a "Golden Lyre".

        guests.CICERO.pastGifts.push("Golden Lyre");


// STEP 3: Retrieve the region of "ANTONY".

        const antonyRegion = guests.ANTONY.region;


// STEP 4: Due to unforeseen political events, "CICERO" needs to be discreetly removed from the guest list.

        delete guests.CICERO;

// STEP 5: Assign ANTONY's profile to a new variable named generalProfile. Then, using this new variable, change the region of ANTONY to "Egypt".

        const generalProfile = guests.ANTONY;
        generalProfile.region = 'Egypt';


        // QUESTION: After executing Step 5, what will be the region of ANTONY in the original guests object?
        // ANSWER: The region of ANTONY in the original guests object will be "Egypt" because objects in JavaScript are assigned by reference. Therefore, modifying generalProfile also modifies guests.ANTONY.