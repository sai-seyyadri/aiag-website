// Typed Text Effect for Header
document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typing-text");
    const text = "AI Alignment Group";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed
        } else {
            // Wait and then restart the animation
            setTimeout(() => {
                typedText.innerHTML = ""; // Clear text
                index = 0; // Reset index
                typeText(); // Restart typing
            }, 2000); // Pause before restarting
        }
    }

    typeText();
});

// Form Submission (Simple feedback alert)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you shortly.");
});
