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

const currentCategories = new Set();
document.querySelectorAll('[data-filter]').forEach((filterItem) => {
  const key = filterItem.dataset.filter;
  filterItem.addEventListener('change', () => {
    filterItem.checked ? currentCategories.add(key) : currentCategories.delete(key);
    filterByCategories();
  });
});

function filterByCategories() {
  document.querySelectorAll('[data-type]').forEach((el) => {
    const key = el.dataset.type;
    el.style.display = currentCategories.has(key) || currentCategories.has('all') ? '' : 'none';
  });
}
