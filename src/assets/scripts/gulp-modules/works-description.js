const swiper = new Swiper('.myproduction-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 15,
  slidesPerView: 'auto',
  breakpoints: {
    575: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 40,
    },
    1440: {
      spaceBetween: 60,
    },
  },
});
const swiper2 = new Swiper('.myworksmore-swiper', {
  slidesPerView: 1.6,
  spaceBetween: 15,
  slidesPerView: 'auto',
  breakpoints: {
    575: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 40,
    },
    1440: {
      spaceBetween: 60,
    },
  },
});

/** СТрелка переключатель в зависимости от положения на єкране END */
const worksPopup = document.querySelector('[data-works-popup]');
const worksClose = worksPopup.querySelector('.popup-works-close');
const $miniSliders = document.querySelectorAll('[data-slider-content]');
const allCount = worksPopup.querySelector('[data-all]');
const currentCount = worksPopup.querySelector('[data-current]');
const dataWorkPopupSwiper = new Swiper('[data-works-popup-swiper]', {
  navigation: {
    nextEl: worksPopup.querySelector('.popup-button-next'),
    prevEl: worksPopup.querySelector('.popup-button-prev'),
  },
});
dataWorkPopupSwiper.on('update', (swiper) => {
  allCount.textContent = swiper.slides.length;
  currentCount.textContent = swiper.activeIndex + 1;
  swiper.slideTo(0);
});
dataWorkPopupSwiper.on('slideChange', (swiper) => {
  currentCount.textContent = swiper.activeIndex + 1;
});

function getMiniSliderImages(slider) {
  const images = Array.from(slider.querySelectorAll('.swiper-slide')).map(el => el.cloneNode(true));
  const sliderContainer = document.querySelector('[data-works-popup-swiper] .swiper-wrapper');
  sliderContainer.innerHTML = '';
  images.forEach((img) => {
    sliderContainer.insertAdjacentElement('afterbegin', img);
  });
  dataWorkPopupSwiper.update();
}

$miniSliders.forEach((el) => {
  el.addEventListener('click', () => {
    gsap.to(worksPopup, { autoAlpha: 1, duration: 0.1 });
    getMiniSliderImages(el);
  });
});

function openPopup(popup) {
  gsap.to(popup, { autoAlpha: 1, duration: 0.1 });
}
worksClose.addEventListener('click', () => {
  gsap.to(worksPopup, { autoAlpha: 0, duration: 0.2 });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.works-more-swiper');
  if (!container || !sliderCursor) return;
  sliderCursor(swiper2, container);

  const container2 = document.querySelector('.production-swiper');
  if (!container) return;

  container2.addEventListener('click', (event) => {
    if (!event.target.closest('.swiper-slide')) {
      return;
    }
    event.stopPropagation();
    openPopup(worksPopup);
    if (worksPopup.isInit !== true) getMiniSliderImages(event.target.closest('.swiper-wrapper'));
    worksPopup.isInit = true;
  });
  sliderCursor(swiper, container2);
});
