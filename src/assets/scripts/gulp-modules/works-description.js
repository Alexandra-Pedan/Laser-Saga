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

function sideSwitchArrow(swiper, arrow, container) {
  const mediumCordValue = document.documentElement.clientWidth / 2;
  document.body.append(arrow);
  container.style.cursor = 'none';
  arrow.style.cursor = 'none';
  arrow.style.position = 'fixed';
  arrow.style.zIndex = 10;
  arrow.__proto__.hide = function () {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  };
  arrow.__proto__.show = function () {
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
  container.addEventListener('click', () => {
    switchGallerySlide(arrow.dataset.side);
  });
  if (document.documentElement.clientWidth < 576) {
    // container.removeEventListener('click', clickToChange);
  }
  const navigate = {
    leftSide: () => {
      swiper.slidePrev();
    },
    rightSide: () => {
      swiper.slideNext();
    },
  };

  function switchGallerySlide(side) {
    navigate[side]();
    return navigate.side;
  }

  // eslint-disable-next-line no-unused-vars
}
sideSwitchArrow(
  swiper,
  document.querySelector('.btn-works'),
  document.querySelector('.production-swiper'),
);
sideSwitchArrow(
  swiper2,
  document.querySelector('.btn-works'),
  document.querySelector('.works-more-swiper'),
);
/** СТрелка переключатель в зависимости от положения на єкране END */
