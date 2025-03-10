// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

const navbarLI = document.querySelectorAll(".navbar-li");

navbarLI.forEach(item => {
    item.addEventListener("click", function(){
      navbarLI.forEach(li=> li.classList.remove("selected"))
      item.classList.add("selected")
    })
  });


gsap.registerPlugin(ScrollTrigger);

// Reusable scrollTrigger settings for odd elements
const oddScrollTrigger = {
  start: "top 100%",
  end: "top 90%",
  scrub: 6,
  // markers: true
};

// Reusable scrollTrigger settings for even elements
const evenScrollTrigger = {
  start: "top 90%",
  end: "top 80%",
  scrub: 6,
  // markers: true
};

// Reusable scrollTrigger settings for odd2 elements
const odd2ScrollTrigger = {
  start: "top 80%",
  end: "top 70%",
  scrub: 6,
  // markers: true
};

// Timeline for animations
const tl = gsap.timeline();

// Odd element animations
tl.from(".section2-image.odd", {
  x: "20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container1",
    ...oddScrollTrigger
  }
})
.from(".section2-description.odd", {
  x: "-20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container1",
    ...oddScrollTrigger
  }
}, "<");

// Even element animations
tl.from(".section2-image.even", {
  x: "-20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container2",
    ...evenScrollTrigger
  }
})
.from(".section2-description.even", {
  x: "20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container2",
    ...evenScrollTrigger
  }
}, "<");

// Odd2 element animations
tl.from(".section2-image.odd2", {
  x: "20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container3",
    ...odd2ScrollTrigger
  }
})
.from(".section2-description.odd2", {
  x: "-20vw",
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".section2-img-description-container.container3",
    ...odd2ScrollTrigger
  }
}, "<");

  