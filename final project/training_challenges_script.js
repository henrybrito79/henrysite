// JavaScript for DBZ Training Challenges
const challenges = {
    goku: {
        name: "Goku's Gravity Room Challenge",
        details: "Train in Goku's gravity room with 100x Earth's gravity. Perform 50 push-ups, 50 sit-ups, and run 5km without stopping!"
    },
    vegeta: {
        name: "Vegeta's 150x Gravity Workout",
        details: "Survive Vegeta's intense workout with 150x gravity. Complete 100 squats, 100 punches, and a 10km sprint."
    },
    piccolo: {
        name: "Piccolo's Weighted Armor Training",
        details: "Train like Piccolo by wearing weighted armor. Perform 200 jumping jacks, 100 high knees, and 2 minutes of planking."
    }
};

function startChallenge(character) {
    const challengeDescription = document.getElementById('challenge-description');
    const characterName = document.getElementById('character-name');
    const challengeDetails = document.getElementById('challenge-details');

    characterName.textContent = challenges[character].name;
    challengeDetails.textContent = challenges[character].details;

    challengeDescription.classList.remove('hidden');
}

function endChallenge() {
    const challengeDescription = document.getElementById('challenge-description');
    challengeDescription.classList.add('hidden');
}
