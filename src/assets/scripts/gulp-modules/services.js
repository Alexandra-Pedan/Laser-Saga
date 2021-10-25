// On DOM ready,
$(() => {
  // Cache selectors
  const $accordion = $('.js-accordion');
  const $allPanels = $(' .accordion-panel').hide();
  const $allItems = $('.accordion-item');

  // Event listeners
  $accordion.on('click', '.accordion-toggle', function () {
    // Toggle the current accordion panel and close others
    $allPanels.slideUp();
    $allItems.removeClass('is-open');
    if (
      $(this)
        .next()
        .is(':visible')
    ) {
      $('.accordion-panel').slideUp();
    } else {
      $(this)
        .next()
        .slideDown()
        .closest('.accordion-item')
        .addClass('is-open');
    }
    return false;
  });
});

const swiper = new Swiper('.myservices-swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.myworks-swiper', {
  slidesPerView: 2.5,
  spaceBetween: 60,
  slidesPerView: 'auto',
  // breakpoints: {
  //   320: {
  //     spaceBetween: 10,
  //   },
  //   576: {
  //     spaceBetween: 30,
  //   },
  //   1440: {
  //     spaceBetween: 40,
  //   },
  // },
});

/** СТрелка переключатель в зависимости от положения на єкране */

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
    container.removeEventListener('click', clickToChange);
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
  document.querySelector('.works-swiper'),
);
/** СТрелка переключатель в зависимости от положения на єкране END */