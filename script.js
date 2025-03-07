// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

const navbarLI = document.querySelectorAll(".navbar-li");

navbarLI.forEach(item => {
    item.addEventListener("click", function(){
      navbarLI.forEach(li=> li.classList.remove("selected"))
      item.classList.add("selected")
    })
  });