// text slider
var swiper = new Swiper(".swiper0", {
  slidesPerView: 1,
  direction: "vertical",
  loop: true,
  speed: 500,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  allowTouchMove: false,
});

// slider with pagination
var swiper = new Swiper(".swiper1", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  loop: true,
  speed: 1500,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loopFillGroupWithBlank: true,
});

// navigation slider
var swiper = new Swiper(".swiper2", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  loop: true,
  speed: 1500,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".case-studies-next",
    prevEl: ".case-studies-prev",
  },
  loopFillGroupWithBlank: true,
});

// logo slider
var swiper = new Swiper(".swiper3", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
  loop: true,
  speed: 1500,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
});

// centered slider
var swiper = new Swiper(".swiper4", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  loop: true,
  speed: 1500,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  loopFillGroupWithBlank: true,
});
