document.addEventListener("DOMContentLoaded", function () {
  // Select the form and feedback division
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize validation variables
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push('Email must include both "@" and "." characters.');
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.innerHTML = ""; // Clear previous feedback
    if (isValid) {
      feedbackDiv.innerHTML = "<p>Form submitted successfully!</p>";
    } else {
      messages.forEach(function (message) {
        feedbackDiv.innerHTML += `<p>${message}</p>`;
      });
    }
  });
});
