const WORD = "QUEST";
const MAX_ATTEMPTS = 6;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    // Create container for puzzle UI
    const container = document.createElement("div");
    container.id = "puzzle-container";
    document.body.appendChild(container);

    // Create input field
    const input = document.createElement("input");
    input.type = "text";
    input.id = "guess-input";
    input.maxLength = WORD.length;
    input.placeholder = "Enter your guess...";
    container.appendChild(input);

    // Create result display
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    container.appendChild(resultDiv);

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const guess = input.value.trim().toUpperCase();

            if (guess.length !== WORD.length) {
                alert("Guess must be exactly " + WORD.length + " letters long.");
                return;
            }

            input.value = ""; // Clear input
            let result = checkGuess(guess);

            let feedback = document.createElement("p");
            feedback.textContent = guess + " - " + result;
            resultDiv.appendChild(feedback);

            if (result.includes("🎉") || result.includes("❌")) {
                input.disabled = true; // Disable input after game over
            }

            input.focus(); // Keep focus on input for better UX
        }
    });

    input.focus(); // Auto-focus input when page loads
});

function checkGuess(guess) {
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

    attempts++;
    if (guess === WORD) {
        return "🎉 Congratulations! You guessed the word correctly!";
    }

    if (attempts >= MAX_ATTEMPTS) {
        localStorage.setItem("ELIMINATED", "true");
        return "❌ Game Over! The correct word was: " + WORD;
    }

    return result.join(" ");
}
