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
menuIcon.addEventListener("click", () => {
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
  var swiper = new Swiper(".featured-slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} catch (error) {
  console.log(error);
}
