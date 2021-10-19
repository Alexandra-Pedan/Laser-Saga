gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.body.style.transform ? 'transform' : 'fixed',
});

gsap.from('.main-img3', {
  duration: 1,
  y: 50,
});
gsap.from('.main-img1', {
  duration: 1,
  y: 50,
});

var tl = gsap.timeline();
tl.from('.inner1', { duration: 1, delay: 0.2, yPercent: 100 });
tl.from('.inner2', { duration: 0.7, yPercent: 100 }, '<+=0.3');
tl.from('.main-text', { opacity: 0, duration: 1, scale: 1.1, y: 50 }, '<');

const paralaxImages = document.querySelectorAll('[data-paralax]');
paralaxImages.forEach(image => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  image.parentElement.prepend(wrap);
  gsap.set(image, { willChange: 'transform', scale: 1.1 });
  wrap.prepend(image);

  gsap
    .timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        scrub: 0.5,
        // markers: true,
        // markers: true,
      },
    })
    .fromTo(
      image,
      {
        y: -35,
      },
      {
        y: 35,
        ease: 'linear',
      },
    );
});
const spanBezier = 'power4.inOut';
const spanEntries = document.querySelectorAll('[data-span-entry]');
spanEntries.forEach(section => {
  // const pathes = section.querySelectorAll('path')
  gsap.set(section, { overflow: 'hidden' });

  section.innerHTML = `
    <div>
      ${section.innerHTML}
    </div>
  `;
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 1,
      // markers: true,
      trigger: section,
      // endTrigger: '50%',
      start: '0% bottom',
      end: '100% bottom',
      // scrub: 1,
      once: true,
    },
  });
  tl.fromTo(
    section.querySelector('div'),
    { y: '50%', duration: 0.9, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.9, ease: spanBezier },
  );
});

const scrollButtons = document.querySelectorAll('[data-scroll-to]');
scrollButtons.forEach(container => {
  container.addEventListener('click', e => {
    const { scrollTo } = e.currentTarget.dataset;
    if (!scrollTo) return;
    const elem = document.querySelector(`[data-container="${scrollTo}"]`);
    window.locoScroll.scrollTo(elem);
  });
});
