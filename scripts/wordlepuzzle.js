const WORD = "QUEST";
const MAX_ATTEMPTS = 6;
let attempts = 0;

function checkGuess(guess) {
    if (guess.length !== WORD.length) {
        console.log("Guess must be exactly " + WORD.length + " letters long.");
        return;
    }
    
    guess = guess.toUpperCase();
    let result = [];
    
    for (let i = 0; i < WORD.length; i++) {
        if (guess[i] === WORD[i]) {
            result.push("🟩"); // Correct letter and position
        } else if (WORD.includes(guess[i])) {
            result.push("🟨"); // Correct letter, wrong position
        } else {
            result.push("⬜"); // Incorrect letter
        }
    }
    
    console.log(result.join(" "));
    
    if (guess === WORD) {
        console.log("Congratulations! You guessed the word correctly!");
        return true;
    }
    
    attempts++;
    if (attempts >= MAX_ATTEMPTS) {
        console.log("Game Over! The correct word was: " + WORD);
        localStorage.setItem("ELIMINATED", "true");
        return false;
    }
    return null;
}

// Example usage:
// checkGuess("QUICK");
// checkGuess("QUEST");
