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

function sideSwitchArrow(swiper, arrow, container, cbOnClick = () => {}) {
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.position = 'fixed';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function() {
    this.style.opacity = '1';
    // this.style.pointerEvents = 'auto';
  };
  arrow.dataset.side = 'leftSide';

  container.addEventListener('mousemove', desktopNavButtonHandler);
  container.addEventListener('mouseenter', () => {
    arrow.show();
  });
  container.addEventListener('mouseleave', () => {
    arrow.hide();
  });
  if (document.documentElement.clientWidth < 769) {
    window.removeEventListener('mousemove', desktopNavButtonHandler);
    arrow.remove();
  }

  /** Записывает координаты обьекта, на котором нужно скрыть стрелку переключения слайдера */
  /** ms ---> main-screen */

  function desktopNavButtonHandler(evt) {
    // arrow.style.position = 'fixed';
    arrow.style.left = `${evt.clientX - 18}px`;
    arrow.style.top = `${evt.clientY - 18}px`;

    getCursorSide(evt.clientX);
    handleArrowVisibility(evt);
  }

  function handleArrowVisibility() {}

  function getCursorSide(x) {
    if (x < mediumCordValue) {
      arrow.classList.add('left-side');
      arrow.dataset.side = 'leftSide';
      // switchGallerySlide('leftSide');
    } else {
      arrow.classList.remove('left-side');
      arrow.dataset.side = 'rightSide';
      // switchGallerySlide('rightSide')
    }
  }
  container.addEventListener('click', evt => {
    switchGallerySlide(arrow.dataset.side);
    cbOnClick(evt);
  });
  if (document.documentElement.clientWidth < 576) {
    // container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      // swiper.slidePrev();
    },
    rightSide: () => {
      // swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }

  // eslint-disable-next-line no-unused-vars
}

sideSwitchArrow(
  swiper2,
  document.querySelector('.btn-works'),
  document.querySelector('.works-more-swiper'),
);
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
dataWorkPopupSwiper.on('update', swiper => {
  console.log('fffefeg');
  allCount.textContent = swiper.slides.length;
  currentCount.textContent = swiper.activeIndex + 1;
  swiper.slideTo(0);
});
dataWorkPopupSwiper.on('slideChange', swiper => {
  currentCount.textContent = swiper.activeIndex + 1;
  console.log(swiper);
});

// function getMiniSliderImages(slider) {
//   const images = Array.from(slider.querySelectorAll('img')).map(el => el.src);
//   const sliderContainer = document.querySelector('[data-detail-equip-swiper] .swiper-wrapper');
//   sliderContainer.innerHTML = '';
//   images.forEach(img => {
//     sliderContainer.innerHTML += `
//           <img class="swiper-slide" src="${img}"/>
//       `;
//   });
//   equipDetailSwiper.update();
// }
function getMiniSliderImages(slider) {
  const images = Array.from(slider.querySelectorAll('.swiper-slide')).map(el => el.cloneNode(true));
  const sliderContainer = document.querySelector('[data-works-popup-swiper] .swiper-wrapper');
  sliderContainer.innerHTML = '';
  images.forEach(img => {
    sliderContainer.insertAdjacentElement('afterbegin', img);
  });
  dataWorkPopupSwiper.update();
}

$miniSliders.forEach(el => {
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

// const sliderPopup = document.querySelector('[data-slider-popup]');
sideSwitchArrow(
  swiper,
  document.querySelector('.btn-works'),
  document.querySelector('.production-swiper'),
  evt => {
    let videoSlide = evt.target.closest('.swiper-slide');
    console.log(evt.target);
    if (videoSlide !== null) {
      // console.log(videoSlide.querySelector('iframe').src);
      openPopup(worksPopup);
      console.log(evt.target.closest('.swiper-wrapper'));
      if (worksPopup.isInit !== true) getMiniSliderImages(evt.target.closest('.swiper-wrapper'));
      worksPopup.isInit = true;
    }

    console.log();
  },
);
