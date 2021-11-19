const swiper = new Swiper('.myspecialities-swiper', {
  slidesPerView: 2.3,
  spaceBetween: 15,
  slidesPerView: 'auto',
  touchStartPreventDefault: false,
  breakpoints: {
    // 320: {
    //   spaceBetween: 10,
    // },
    992: {
      spaceBetween: 20,
    },
    1440: {
      spaceBetween: 30,
    },
  },
});
// const swiper2 = new Swiper('.myworksmore-swiper', {
//   slidesPerView: 1.5,
//   spaceBetween: 60,
//   slidesPerView: 'auto',
// });
// const swiper2 = new Swiper('.myteam-swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const swiper3 = new Swiper('.myreviews-swiper', {
  pagination: {
    el: '.reviews-swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper4 = new Swiper('.myworks-swiper', {
  slidesPerView: 2.5,
  spaceBetween: 15,
  slidesPerView: 'auto',
  touchStartPreventDefault: false,
  breakpoints: {
    575: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 50,
    },
    1440: {
      spaceBetween: 60,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.specialities-swiper');
  if (!container || !sliderCursor) return;
  sliderCursor(swiper, container);

  const container2 = document.querySelector('.works-swiper');
  if (!container) return;
  sliderCursor(swiper4, container2);
});

document.addEventListener('DOMContentLoaded', () => {
  // getConfig('/dist/static/configSlide.JSON');
  const container = document.getElementById('sliderThree');
  initCustomSlider(container, 'getAboutSlider');
  // getConfigSlider('/dist/static/configSlide.JSON', container);
});
