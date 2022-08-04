var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementsByClassName('swiper-pagination')[0].innerHTML = `
  <span class="swiper-pagination-current">1</span>
  ·
  <span class="swiper-pagination-total">3</span>
`;