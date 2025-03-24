document.addEventListener("DOMContentLoaded", function () {
    // Create and style the unlock input container
    const formContainer = document.createElement("div");
    formContainer.classList.add("keyhole");  // Apply the CSS class for styling

    const input = document.createElement("input");
    input.type = "text";
    input.id = "unlock-input";
    input.setAttribute("data-unlock-puzzle", "2");
    input.setAttribute("data-puzzle-key", "exampleKey");
    input.setAttribute("data-puzzle-num", "1");
    input.placeholder = "Enter the key";

    const submitButton = document.createElement("button");
    submitButton.innerText = "Unlock";
    submitButton.classList.add("unlock-button"); // Apply button styling
    submitButton.addEventListener("click", validatePuzzleKey);

    formContainer.appendChild(input);
    formContainer.appendChild(document.createElement("br"));
    formContainer.appendChild(submitButton);
    document.body.appendChild(formContainer);

    function validatePuzzleKey() {
        fetch("../assets/puzzlekey.json")
            .then(response => response.json())
            .then(data => {
                const inputField = document.getElementById("unlock-input");
                const enteredKey = inputField.value;
                const unlock_puzzle = inputField.getAttribute("data-unlock-puzzle");
                const puzzle_num = inputField.getAttribute("data-puzzle-num");

                const validKey = data.find(entry =>
                    entry.unlock_puzzle === unlock_puzzle &&
                    entry.puzzle_num === puzzle_num &&
                    entry.puzzle_key === enteredKey
                );

                if (validKey) {
                    alert("Puzzle unlocked!");
                    formContainer.style.display = "none"; // Hide the input form
                    loadWordlePuzzle(); // Load the Wordle puzzle dynamically
                } else {
                    alert("Incorrect key! Try again.");
                }
            })
            .catch(error => console.error("Error loading puzzle keys:", error));
    }

    function loadWordlePuzzle() {
        const script = document.createElement("script");
        script.src = "../scripts/wordlepuzzle.js";
        script.onload = () => console.log("wordlepuzzle.js loaded successfully.");
        script.onerror = () => console.error("Failed to load wordlepuzzle.js.");
        document.body.appendChild(script);
    }
});
