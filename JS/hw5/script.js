new Swiper(".testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  simulateTouch: true,
  allowTouchMove: true,
  watchOverflow: false,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    bulletElement: "button",
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 18,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
