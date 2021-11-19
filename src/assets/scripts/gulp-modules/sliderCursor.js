function initSliderCursor(cursor, swiper, container) {
  const centerScreenPos = document.documentElement.clientWidth / 2;
  const showCursor = (el) => {
    el.style.transform = 'translate(-50%, -50%)scale(1)';
  };
  const hideCursor = (el) => {
    el.style.transform = 'translate(-50%, -50%)scale(0)';
  };
  container.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  container.addEventListener('mouseenter', () => {
    showCursor(cursor);
  });
  container.addEventListener('mouseleave', () => {
    hideCursor(cursor);
  });

  container.addEventListener('click', (event) => {
    if (centerScreenPos > event.clientX) {
      swiper.slidePrev();
      return;
    }
    swiper.slideNext();
  });
}

const cursorHtml = `<svg class="icon--cursor js-cursor-slider" role="presentation">
  <use xlink:href="#icon-cursor"></use>
</svg>`;
document.body.insertAdjacentHTML('beforeend', cursorHtml);
const cursor = document.querySelector('.js-cursor-slider');

const sliderCursor = (swiper, container) => initSliderCursor(cursor, swiper, container);
