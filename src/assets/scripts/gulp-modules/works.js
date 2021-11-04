const filter = document.querySelector('.js-filter');
const filterForm = document.querySelector('.filter-form');
const arrowFilter = document.querySelector('.icon--arrow-filter');

filter.addEventListener('click', () => {
  filterForm.classList.toggle('filter-open');
  if (filterForm.classList.contains('filter-open')) {
    arrowFilter.style.transform = 'rotate(180deg)';
  } else {
    arrowFilter.style.transform = '';
  }
});

const swiper = new Swiper('.myworks-swiper', {
  slidesPerView: 2.5,
  spaceBetween: 15,
  slidesPerView: 'auto',
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

function sideSwitchArrow(swiper, arrow, container) {
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
  document.querySelector('.works-swiper'),
);
/** СТрелка переключатель в зависимости от положения на єкране END */

// const filter = document.querySelector('.js-filter');
// const filterForm = document.querySelector('.filter-form');
// const arrowFilter = document.querySelector('.icon--arrow-filter');

// filter.addEventListener('click', () => {
//   filterForm.classList.toggle('filter-open');
//   // if (filterForm.classList.contains('afilter-open')) {
//   //   arrowFilter.style.transform = 'rotate(90deg)';
//   // }
// });
const currentCategories = new Set();
document.querySelectorAll('[data-filter]').forEach(filterItem => {
  const key = filterItem.dataset.filter;
  filterItem.addEventListener('change', () => {
    filterItem.checked ? currentCategories.add(key) : currentCategories.delete(key);
    filterByCategories();
  });
});

function filterByCategories() {
  document.querySelectorAll('[data-type]').forEach(el => {
    const key = el.dataset.type;
    el.style.display = currentCategories.has(key) || currentCategories.has('all') ? '' : 'none';
  });
}
