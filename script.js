// ==============================
// COMMON FUNCTION
// ==============================
function showAlert(message) {
  alert(message);
}

// ==============================
// GET CURRENT PAGE
// ==============================
const path = window.location.pathname;
const page = path.split("/").pop().toLowerCase(); // get file name in lowercase

// ==============================
// LANDING PAGE (index.html)
// ==============================
if (page === "index.html" || page === "") {
  const buttons = document.querySelectorAll("main button, section button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.textContent.toLowerCase();

      if (text.includes("explore")) {
        showAlert("Welcome! Explore our website.");
      } else if (text.includes("learn more")) {
        showAlert("More projects coming soon!");
      } else if (text.includes("view team")) {
        showAlert("Meet our amazing team!");
      } else {
        showAlert("Button clicked!");
      }
    });
  });
}

// ==============================
// CONTACT PAGE (contact.html)
// ==============================
if (page === "contact.html") {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const name = nameInput ? nameInput.value.trim() : "Guest";
      showAlert(`Thank you for contacting us, ${name}!`);
      contactForm.reset();
    });
  }
}

// ==============================
// PORTFOLIO PAGE (portfoli.html)
// ==============================
if (page === "portfoli.html") {
  const portfolioBtn = document.querySelector("main button");
  if (portfolioBtn) {
    portfolioBtn.addEventListener("click", () => {
      showAlert("More projects coming soon!");
    });
  }
}

// ==============================
// SERVICES PAGE (services.html)
// ==============================
if (page === "services.html") {
  const planButtons = document.querySelectorAll("button");
  planButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes("choose plan")) {
      btn.addEventListener("click", () => {
        showAlert("Thank you for choosing this plan!");
      });
    }
  });
}

// ==============================
// NAVIGATION HIGHLIGHT (ALL PAGES)
// ==============================
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  if (link.href.toLowerCase() === window.location.href.toLowerCase()) {
    link.classList.add("font-bold", "underline");
  }
});
