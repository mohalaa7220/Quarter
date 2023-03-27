try {
  AOS.init({
    duration: 1000,
  });
} catch (error) {
  console.log(error);
}

/* ================= Change Background ==================*/
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (event) => {
  // To listen for event
  event.preventDefault();
  window.scrollY <= 150
    ? navbar.classList.remove("navbar-active")
    : navbar.classList.add("navbar-active");
});
/* ================= Menu Responsive ==================*/
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");
menuIcon.addEventListener("mouseover", () => {
  menu.classList.toggle("active_menu");
});

/* ================= Swiper Banner ==================*/
try {
  var swiper = new Swiper(".banner", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} catch (error) {
  console.log(error);
}

/* ================= Swiper Featured ==================*/

try {
  var slider = tns({
    container: ".featured-slide",
    items: 3,
    rewind: true,
    swipeAngle: false,
    speed: 400,
    mouseDrag: true,
    responsive: {
      100: {
        items: 1,
      },
      200: {
        items: 1,
      },
      300: {
        items: 1,
      },

      400: {
        items: 1,
      },

      500: {
        items: 1,
      },

      600: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
} catch (error) {
  console.log(error);
}
