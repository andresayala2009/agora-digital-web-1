const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const revealItems = document.querySelectorAll(".section-head, .card, .training, .resource, .values > div, .contact-list > div, .form, .cta-grid");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Gracias. Tu mensaje quedó listo para conectarse a correo o WhatsApp.";
  form.reset();
});

revealItems.forEach((item, index) => {
  item.classList.add("reveal", `reveal-delay-${(index % 3) + 1}`);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14
});

revealItems.forEach((item) => revealObserver.observe(item));
