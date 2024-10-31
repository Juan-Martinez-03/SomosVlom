const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 0);

  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === section.id) {
          link.classList.add("active");
        }
      });
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

let lengthItems = items.length - 1;
let active = 0;
let refreshInterval;

function startSlider() {
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000); // Cambiado a 5000 ms
}

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval); // Limpiar el intervalo aquí
  startSlider(); // Reiniciar el intervalo aquí
}

// Al cargar la página, iniciar el slider
startSlider();

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});

window.onresize = function (event) {
  reloadSlider();
};
