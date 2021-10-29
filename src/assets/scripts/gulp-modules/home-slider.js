// function handleHomeNewsSlideNavigation(swiper2) {
//     const sliderNewsHome = swiper2;
//     const slidesCount = sliderNewsHome.imagesLoaded;
//     const segment = Math.floor(slidesCount / 3);
//     const paginationItems = document.querySelectorAll('.news-plagination>div');
//     const DURATION = 1200;
//     const ease = 'power4.out';
//     const segmentsCount = 3;
//     const bgStates = {
//         active: ' linear-gradient(90deg, rgba(224,229,232,1) -100%, rgba(218,201,128,1) 50%, rgba(224,229,232,1) 200%)',
//         unActive: 'linear-gradient(90deg, rgba(224,229,232,1) 50%, rgba(218,201,128,1) 50%, rgba(224,229,232,1) 50%)',
//     };
//     const slideSectorsIndex = [];
//     let prevIndex = 0;
//     let prevPagItemClicked = paginationItems[0];
//     for (let index = 0; index < segment * segmentsCount; index+=segment) {
//         if (index === 0) {
//             slideSectorsIndex.push({min: index, max: index + (segment)});
//         } else {
//             slideSectorsIndex.push({min: index + 1, max: index + (segment)});
//         }
//         prevIndex = index+1;
//     }
//     console.log(slideSectorsIndex);
//     sliderNewsHome.on('slideChange', (e) => {
//         slideSectorsIndex.forEach((sector, index) => {
//             if (inDiapazone(e.activeIndex, sector) && prevPagItemClicked !== paginationItems[index]) {
//                 changeSlide(paginationItems[index]);
//                 prevPagItemClicked = paginationItems[index];
//             }
//         })
//     });
//     paginationItems.forEach((element, index) => {
//         element.style.cursor = 'pointer';
//         const sliderIndexLink = index === 0 ? (index * segment) : (index * segment) + 1;

//         element.addEventListener('click', () => {
//             sliderNewsHome.slideTo(sliderIndexLink, 1500);
//         })
//     });
//     function changeSlide(el) {
//         const element = el;
//         const prevElement = element.parentElement.querySelector('.active');
//             if (prevElement === element) return;
//             const tl = gsap.timeline();
//             tl.set(element.parentElement, { pointerEvents: 'none', cursor: 'wait' });
//             tl.fromTo(prevElement,
//                 {
//                     background: bgStates.active,
//                 },
//                 {
//                     background: bgStates.unActive,
//                     clearProps: 'all',
//                     ease,
//                     duration: DURATION / 1000
//                 }
//                 )
//             tl.fromTo(element,
//                 {
//                     background: bgStates.unActive,
//                 },
//                 {
//                 background: bgStates.active,
//                 clearProps: 'all',
//                 onComplete: () => {
//                     element.parentElement.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
//                     element.classList.add('active');
//                 },
//                 ease,
//                 duration: DURATION / 1000
//             },
//             '<'
//             )
//             tl.set(element.parentElement, { pointerEvents: '', cursor: '' });
//     }
// }
// function inDiapazone(value, object) {
//     const { min,max } = object;
//     return value >= min && value <= max;
// }
// handleHomeNewsSlideNavigation(swiper2);
