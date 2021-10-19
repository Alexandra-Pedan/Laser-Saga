document.addEventListener('DOMContentLoaded', () => {
  window.locoScroll.destroy();
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').classList.add('not-on-top');
  } else {
    document.getElementById('header').classList.remove('not-on-top');
  }
}
