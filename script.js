// Typed Text Effect for Header
document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typed-text");
    const text = "AI Alignment Group";
    let i = 0;

    function typeText() {
        if (i < text.length) {
            typedText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, 100); // Adjust typing speed
        }
    }

    typeText();
});

// Form Submission (Simple feedback alert)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you shortly.");
});
