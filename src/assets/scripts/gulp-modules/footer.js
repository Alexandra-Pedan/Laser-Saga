$(window).resize(() => {
  window.locoScroll.update();
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

const buttonUp = document.querySelector('.js-btn-up');

if (buttonUp) {
  buttonUp.addEventListener('click', () => {
    window.locoScroll.scrollTo(0);
  });
}
