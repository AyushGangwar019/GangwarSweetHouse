// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Optional: Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// Navbar Listeners
const navbarLI = document.querySelectorAll(".navbar-li");

if (navbarLI.length) {
  navbarLI.forEach(item => {
    item.addEventListener("click", function() {
      navbarLI.forEach(li => li.classList.remove("selected"));
      item.classList.add("selected");
    });
  });
}

// Register ScrollTrigger plugin
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

// Resize handling
let lastWidth = window.innerWidth;

window.addEventListener('resize', function() {
  // Avoid reloading the page - adjust layout dynamically using GSAP and CSS
  if (lastWidth !== window.innerWidth) {
    lastWidth = window.innerWidth;
    
    if (window.innerWidth <= 480) {
      // For smaller screens
      gsap.set("#section-3 .section-3-cake-images-container", { x: "60%" });
    } else {
      // For larger screens
      gsap.set("#section-3 .section-3-cake-images-container", { x: "70%" });
    }
  }
});

// Adjust layout on initial load for mobile vs desktop
if (window.innerWidth <= 480) {
  gsap.set("#section-3 .section-3-cake-images-container", { x: "60%" });
} else {
  gsap.set("#section-3 .section-3-cake-images-container", { x: "70%" });
}

// GSAP Scroll Animation
gsap.to("#section-3 .section-3-cake-images-container", {
  x: "-45%",
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#section-3",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 4,
    pin: true
  }
});
