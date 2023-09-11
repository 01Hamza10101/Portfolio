const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true,
});
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to('.MainP h3', {
  x: 180,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.MainP',
    start: 'top top',
    end: 'center  center',
    scrub: true,
  },
});

tl.to('.MainP .ProImg', {
  x: -180,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.MainP',
    start: 'top top',
    end: 'center  center',
    scrub: true,
  },
});

tl.to('.MainP img', {
  scale: 2,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.MainP',
    start: 'top top',
    end: 'center  bottom',
    scrub: true,
  },
});


tl.to('.AboutMe h5', {
  y: 360,
  opacity: 0,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '.AboutMe h5',
    start: 'top top',
    end: 'center  bottom',
    scrub: true,
  },
});

tl.to('.Html, .css, .gsap, .github, .js, .scrollTrigger', {
  y: -90,
  yoyo: true,
  opacity: 1,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.css',
    start: 'top bottom',
    end: 'center center',
    scrub: true,
  },
});

tl.play();


const tlProj = gsap.timeline();

tlProj.from('.Project1',{ 
  x: -400, 
  duration: 1,
  scrollTrigger: {
    trigger: '.Project1',
    start: 'top bottom',
    end: 'center center',
    scrub: true,
  },
});

tlProj.from('.Project2',{ 
  x: -400, 
  duration: 1,
  scrollTrigger: {
    trigger: '.Project2',
    start: 'top bottom',
    end: 'center center',
    scrub: true,
  },
});

tlProj.from('.Project3',{ 
  x: -400, 
  duration: 1,
  scrollTrigger: {
    trigger: '.Project3',
    start: 'top bottom',
    end: 'center center',
    scrub: true,
  },
});

tlProj.play();

gsap.from('.Footer',{
  y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '.Footer',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
})