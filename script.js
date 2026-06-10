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
  formMessage.textContent = "Gracias. Tu mensaje quedÃ³ listo para conectarse a correo o WhatsApp.";
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

const pageSections = document.querySelectorAll("main section[id]");
const sectionLinks = document.querySelectorAll(".nav-links a[href^='#']");
const scrollTopButton = document.querySelector("#scrollTopButton");

const setActiveLink = (sectionId) => {
  sectionLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${sectionId}`);
  });
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, {
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0
});

pageSections.forEach((section) => navObserver.observe(section));

window.addEventListener("scroll", () => {
  if (!scrollTopButton) return;
  scrollTopButton.classList.toggle("visible", window.scrollY > 300);
});

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
