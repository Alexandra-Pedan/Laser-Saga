const swiper = new Swiper('.myworks-swiper', {
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

/** СТрелка переключатель в зависимости от положения на єкране */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.works-swiper');
  if (!container || !sliderCursor) return;
  sliderCursor(swiper, container);
});
/** СТрелка переключатель в зависимости от положения на єкране END */
