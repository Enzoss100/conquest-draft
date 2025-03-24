
const WORD = "QUEST";
const MAX_ATTEMPTS = 6;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Create input field
    const input = document.createElement("input");
    input.type = "text";
    input.id = "guess-input";
    input.maxLength = WORD.length;
    input.placeholder = "Enter your guess...";
    document.body.appendChild(input);
    
    // Create result display
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);
    
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const guess = input.value.trim().toUpperCase();
            input.value = "";
            if (!guess) return;
            
            let result = checkGuess(guess);
            
            let feedback = document.createElement("p");
            feedback.textContent = guess + " - " + result;
            resultDiv.appendChild(feedback);
        }
    });
});

function checkGuess(guess) {
    if (guess.length !== WORD.length) {
        return "Guess must be exactly " + WORD.length + " letters long.";
    }
    
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
    
    if (guess === WORD) {
        return "🎉 Congratulations! You guessed the word correctly!";
    }
    
    attempts++;
    if (attempts >= MAX_ATTEMPTS) {
        localStorage.setItem("ELIMINATED", "true");
        return "❌ Game Over! The correct word was: " + WORD;
    }
    return result.join(" ");
}
