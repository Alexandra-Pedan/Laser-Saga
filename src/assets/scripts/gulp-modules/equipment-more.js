function initSlider(container) {
  const pagination = container.querySelector('.swiper-pagination');
  const btnNext = container.querySelector('.swiper-button-next');
  const btnPrev = container.querySelector('.swiper-button-prev');
  const swipEl = container.querySelector('.js-init-swiper');
  if (!pagination || !btnNext || !btnPrev || !swipEl) {
    return;
  }
  const swiper = new Swiper(swipEl, {
    pagination: {
      el: pagination,
      type: 'fraction',
    },
    navigation: {
      nextEl: btnNext,
      prevEl: btnPrev,
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.js-equipment');
  sliders.forEach(initSlider);
});

const swiper = new Swiper('.myequipment-more-swiper', {
  slidesPerView: 2.6,
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
  const container = document.querySelector('.equipment-more-swiper');
  if (!container || !sliderCursor) return;
  sliderCursor(swiper, container);
});
/** СТрелка переключатель в зависимости от положения на єкране END */

const equipDetailSwiper = new Swiper('[data-detail-equip-swiper]', {
  navigation: {
    nextEl: document.querySelector('.popup-button-next'),
    prevEl: document.querySelector('.popup-button-prev'),
  },
});
const equipPopup = document.querySelector('[data-equip-popup]');
const equipClose = equipPopup.querySelector('.popup-close');
const $miniSliders = document.querySelectorAll('[data-slider-content]');
const allCount = equipPopup.querySelector('[data-all]');
const currentCount = equipPopup.querySelector('[data-current]');
equipDetailSwiper.on('update', (swiper) => {
  allCount.textContent = swiper.slides.length;
  currentCount.textContent = swiper.activeIndex + 1;
  swiper.slideTo(0);
});
equipDetailSwiper.on('slideChange', (swiper) => {
  currentCount.textContent = swiper.activeIndex + 1;
});

function getMiniSliderImages(slider) {
  const images = Array.from(slider.querySelectorAll('img')).map(el => el.src);
  const sliderContainer = document.querySelector('[data-detail-equip-swiper] .swiper-wrapper');
  sliderContainer.innerHTML = '';
  images.forEach((img) => {
    sliderContainer.innerHTML += `
          <div class="swiper-slide popup-img"><img src="${img}"/></div>
      `;
  });
  equipDetailSwiper.update();
}

$miniSliders.forEach((el) => {
  el.addEventListener('click', () => {
    gsap.to(equipPopup, { autoAlpha: 1, duration: 0.1 });
    getMiniSliderImages(el);
  });
});

equipClose.addEventListener('click', () => {
  gsap.to(equipPopup, { autoAlpha: 0, duration: 0.2 });
});
