const WORD = "QUEST";
const MAX_ATTEMPTS = 6;
let attempts = 0;

function initializeWordle() {
    // Check if puzzle UI already exists
    if (document.getElementById("wordle-container")) return;

    // Create puzzle container
    const puzzleContainer = document.createElement("div");
    puzzleContainer.id = "wordle-container";

    // Create input field
    const input = document.createElement("input");
    input.type = "text";
    input.id = "guess-input";
    input.maxLength = WORD.length;
    input.placeholder = "Enter your guess...";

    // Create result display
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";

    // Append elements
    puzzleContainer.appendChild(input);
    puzzleContainer.appendChild(resultDiv);
    document.body.appendChild(puzzleContainer);

    // Add input event listener
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            processGuess(input, resultDiv);
        }
    });
}

function processGuess(input, resultDiv) {
    const guess = input.value.trim().toUpperCase();
    input.value = "";
    if (!guess) return;

    const result = checkGuess(guess);

    if (result !== null) {
        const feedback = document.createElement("p");
        feedback.textContent = guess + " - " + result;
        resultDiv.appendChild(feedback);
    }
}

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
        const successMessage = "🎉 Congratulations! You guessed the word correctly!";
        loadFillInBlanks(); // Load next segment AFTER message is shown
        return successMessage;
    }

    attempts++;
    if (attempts >= MAX_ATTEMPTS) {
        localStorage.setItem("ELIMINATED", "true");
        return "❌ Game Over! The correct word was: " + WORD;
    }

    return result.join(" ");
}

function loadFillInBlanks() {
    const wordleContainer = document.getElementById("wordle-container");

    // Create a new container for the next stage
    const blanksContainer = document.createElement("div");
    blanksContainer.id = "scripture-container";
    blanksContainer.style.display = "none"; // Initially hidden

    // Insert it directly after the Wordle container
    if (wordleContainer && wordleContainer.parentNode) {
        wordleContainer.parentNode.insertBefore(blanksContainer, wordleContainer.nextSibling);
    }

    // Load the fillblanks.js script
    const script = document.createElement("script");
    script.src = "../scripts/fillblanks.js";
    script.onload = () => {
        console.log("fillblanks.js loaded successfully.");
        blanksContainer.style.display = "block"; // Show container after script loads
    };
    script.onerror = () => console.error("Failed to load fillblanks.js.");
    document.body.appendChild(script);
}

// Initialize Wordle when this script loads
initializeWordle();
