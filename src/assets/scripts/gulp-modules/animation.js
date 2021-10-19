gsap.registerPlugin(ScrollTrigger);
locoScroll.on('scroll', ScrollTrigger.update);
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.body.style.transform ? 'transform' : 'fixed',
});
const paralaxImages1 = document.querySelectorAll('[data-paralax1]');
paralaxImages1.forEach(image => {
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
const spanBezier1 = 'power4.inOut';
const spanEntries1 = document.querySelectorAll('[data-span-entry1]');
spanEntries1.forEach(section => {
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
      trigger: section,
      start: '0% bottom',
      end: '100% bottom',
      once: true,
    },
  });
  tl.fromTo(
    section.querySelector('div'),
    { y: '50%', duration: 1, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, ease: spanBezier1 },
  );
});
