// Dark/Light mode toggle
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Form validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
      valid = false;
    } else {
      document.getElementById("messageError").textContent = "";
    }

    if (valid) {
      alert(" Message sent successfully!");
      form.reset();
    }
  });
}

// Expand/Collapse blog summaries
const readMoreBtns = document.querySelectorAll(".readMore");
readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.previousElementSibling.textContent += " (Full article would appear here...)";
    btn.style.display = "none";
  });
});
