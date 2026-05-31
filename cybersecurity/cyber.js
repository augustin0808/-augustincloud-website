// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const visible = nav.style.display === "flex";
    nav.style.display = visible ? "none" : "flex";
  });
}

// DARK MODE
const darkToggle = document.getElementById("darkModeToggle");

if (darkToggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });
}

// CONTACT FORM
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form && status) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in all required fields.";
      status.style.color = "#ef4444";
      return;
    }

    status.innerHTML = `
      Thank you, ${name}!<br>
      We will contact you shortly.<br><br>
      <strong>Contact Details:</strong><br>
      📞 +46 739 895 202<br>
      📧 augustin_0808@outlook.com<br>
      🔗 <a href="https://linkedin.com/in/augustin-uwimana-0684182b" target="_blank">LinkedIn Profile</a>
    `;
    status.style.color = "#16a34a";

    form.reset();
  });
}
