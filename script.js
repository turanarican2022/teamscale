const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".link");
const topCTAbtn = document.querySelector(".top-cta-btn");

mobileMenuBtn.addEventListener("click", () => {
  navbar.classList.toggle("display");
});

[topCTAbtn, ...links].forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("display");
  });
});
