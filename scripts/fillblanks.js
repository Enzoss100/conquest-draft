// Function to display the scripture with blanks
function getScriptureWithBlanks(targetId = "scripture-container") {
    const scripture = [
        "^10 Finally, be strong in the Lord and in his mighty <input type='text' class='textbox' id='power'>.",
        "^11 Put on the full armor of God, so that you can take your stand against the devil’s schemes.",
        "^12 For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.",
        "^13 Therefore put on the full armor of God, so that when the day of evil comes, you may be able to <input type='text' class='textbox' id='stand'> your ground, and after you have done everything, to stand.",
        "^14 Stand firm then, with the belt of truth buckled around your waist, with the breastplate of righteousness in place,",
        "^15 and with your feet fitted with the readiness that comes from the gospel of peace.",
        "^16 In addition to all this, take up the shield of faith, with which you can <input type='text' class='textbox' id='extinguish'> all the flaming arrows of the evil one.",
        "^17 Take the helmet of salvation and the sword of the Spirit, which is the word of God.",
        "^18 And pray in the Spirit on all <input type='text' class='textbox' id='occasions'> with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord’s people.",
        "^19 Pray also for me, that whenever I <input type='text' class='textbox' id='speak'>, words may be given me so that I will fearlessly make known the mystery of the gospel,",
        "^20 for which I am an <input type='text' class='textbox' id='ambassador'> in chains. Pray that I may declare it fearlessly, as I should."
    ];

	const container = document.getElementById(targetId);
    if (!container) return "Scripture container not found.";

    const wrapper = document.createElement("div");
    wrapper.className = "script-text";

    scripture.forEach(line => {
        const p = document.createElement("p");
        p.innerHTML = line;
        wrapper.appendChild(p);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Answers";
    submitButton.addEventListener("click", () => verifyAnswersAndMoveNext());

    wrapper.appendChild(submitButton);

    // Clear container first
    container.innerHTML = "";
    container.appendChild(wrapper);

    // 🔽 Move this container below Wordle
    const wordleContainer = document.getElementById("wordle-container");
    if (wordleContainer && wordleContainer.parentNode) {
        wordleContainer.parentNode.insertBefore(container, wordleContainer.nextSibling);
    } else {
        document.body.appendChild(container); // fallback
    }

    return wrapper.outerHTML;
}

// Function to verify answers and move to the next stage
function verifyAnswersAndMoveNext() {
    fetch('blanks.json')
        .then(response => response.json())
        .then(data => {
            const textboxes = document.querySelectorAll('.textbox');
            let allCorrect = true;

            textboxes.forEach(textbox => {
                const answerKey = textbox.id;
                const userAnswer = textbox.value.trim().toLowerCase();

                if (userAnswer !== data[answerKey]?.toLowerCase()) {
                    allCorrect = false;
                    textbox.style.borderColor = 'red';
                } else {
                    textbox.style.borderColor = 'green';
                }
            });

            if (allCorrect) {
                alert('Congratulations! You got everything right! Moving to the next stage...');
                // Optionally: hide the scripture-container or trigger next stage
                // document.getElementById("scripture-container").style.display = "none";
            } else {
                alert('Some answers are incorrect. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error loading blanks.json:', error);
        });
}

// Call the function to load scripture on page load or manually
getScriptureWithBlanks();


