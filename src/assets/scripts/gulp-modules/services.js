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
  openAccordeonOnAnchorLink();
});

function initSlider(container) {
  const pagination = container.querySelector('.swiper-pagination');
  const btnNext = container.querySelector('.swiper-button-next');
  const btnPrev = container.querySelector('.swiper-button-prev');
  const swipEl = container.querySelector('.js-init-services');
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
  const sliders = document.querySelectorAll('.js-services');
  sliders.forEach(initSlider);
});

const swiper2 = new Swiper('.myworks-swiper', {
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
  sliderCursor(swiper2, container);
});
/** СТрелка переключатель в зависимости от положения на єкране END */

function openAccordeonOnAnchorLink() {
  const hashId = window.location.hash.replace('#', '');
  const elToOpen = document.getElementById(hashId);
  if (elToOpen === null) return;
  setTimeout(() => {
    elToOpen.click();
  }, 1000);
}
