$(window).resize(() => {
  window.locoScroll.update();
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
const header = document.querySelector('.header-js');
console.log(header);

function handleVisibilityOnScroll(elems = [], direction = 'up') {
  elems.forEach((elem) => {
    switch (direction) {
      case 'down':
        elem[0].classList.add(elem[1]);
        break;
      default:
        elem[0].classList.remove(elem[1]);
        break;
    }
  });
}
locoScroll.on('scroll', (position) => {
  if (position.scroll.y > 50) {
    handleVisibilityOnScroll([[header, 'not-on-top']], 'down');
  } else {
    handleVisibilityOnScroll([[header, 'not-on-top']]);
  }
});

const menuContainer = document.querySelector('.js-menu-container');
const menuClose = document.querySelector('.js-menu-close');
const menuOpen = document.querySelector('.js-menu-open');
menuOpen.addEventListener('click', () => {
  if (menuContainer.classList.contains('active')) return;
  document.querySelector('body').style.overflow = 'hidden';
  menuContainer.classList.add('active');
});

menuClose.addEventListener('click', () => {
  if (!menuContainer.classList.contains('active')) return;
  menuContainer.classList.remove('active');
  document.querySelector('body').style.overflow = 'auto';
});
