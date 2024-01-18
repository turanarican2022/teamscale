const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.add("display");
});

[mobileMenuCloseBtn, ...links].forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("display");
  });
});
