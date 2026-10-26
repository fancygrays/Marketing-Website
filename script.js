const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value;
        const message = document.getElementById("contact-message").value.trim();

        const feedback = document.getElementById("contact-feedback");

        if (!name || !email || !subject || message.length < 10) {
            feedback.textContent =
                "Please complete all required fields and enter a message of at least 10 characters.";

            feedback.className = "form-message error";
            return;
        }

        feedback.textContent =
            `Thank you, ${name}! Your message has passed the form checks.`;

        feedback.className = "form-message success";

        contactForm.reset();
    });
}
