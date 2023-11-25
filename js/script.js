const humberger = document.querySelector(".humberger");
const menu = document.querySelector(".menu");

humberger.addEventListener("click", () => {
  humberger.classList.toggle("active");
  menu.classList.toggle("active");
});

$(".insip-carousel .owl-carousel").owlCarousel({
  // loop:true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

$(".brand-carousel .owl-carousel").owlCarousel({
  // loop:true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});
