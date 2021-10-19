// /**Еффект при открытии меню */
// document.querySelector('.js-menu-open').addEventListener('click', evt => {
//   menuOpenAnim(evt, false);
//   if ($.scrollify) $.scrollify.disable();
// });
// document.querySelector('.js-menu-close').addEventListener('click', function(evt) {
//   if ($.scrollify) $.scrollify.enable();
//   menuCloseAnim(evt, true);
// });
// function menuOpenAnim(evt, reverseArg) {
//   const menu = document.querySelector('.content-menu');
//   const screenHeight = document.documentElement.clientHeight;
//   const targetTop = evt.target.getBoundingClientRect().top;
//   const percentYOfTarget = Math.floor((100 * targetTop) / screenHeight);
//   if (menu === null) return;
//   const ease = 'power4.easeOut';
//   const tl = gsap.timeline({ paused: true });
//   tl.fromTo(
//     menu,
//     { webkitClipPath: `circle(0% at 100% ${percentYOfTarget}%)` },
//     {
//       webkitClipPath: 'circle(150% at 100% 0%)',
//       ease: 'power4.easeInOut',
//       duration: 1.2,
//       clearProps: 'all',
//     },
//   );

//   tl.play();
// }
// function menuCloseAnim(evt, reverseArg) {
//   const menu = document.querySelector('.content-menu');
//   const screenHeight = document.documentElement.clientHeight;
//   const targetTop = evt.target.getBoundingClientRect().top;
//   const percentYOfTarget = Math.floor((100 * targetTop) / screenHeight);
//   if (menu === null) return;
//   const ease = 'power4.easeOut';
//   const tl = gsap.timeline({ paused: true });
//   tl.set(menu, { opacity: 1, visibility: 'visible' });
//   tl.fromTo(
//     menu,
//     { webkitClipPath: `circle(150% at 100% 0%)` },
//     // eslint-disable-next-line no-undef
//     {
//       webkitClipPath: `circle(0% at 92% ${percentYOfTarget + 3}%)`,
//       ease: 'power4.easeInOut',
//       duration: 0.75,
//       clearProps: 'all',
//     },
//     '<',
//   );
//   tl.play();
// }
