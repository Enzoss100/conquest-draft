document.addEventListener("DOMContentLoaded", function() {
    const tutorialDiv = document.querySelector(".tutorial"); // Ensure this exists
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function() {
        if (tutorialDiv.style.display === "none" || tutorialDiv.style.display === "") {
            tutorialDiv.style.display = "block";
        } else {
            tutorialDiv.style.display = "none";
        }
    });
});

