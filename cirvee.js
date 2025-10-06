// Scroll Arrows for Course Cards
const scrollAmount = 320;
const scrollContainer = document.getElementById("scrollContainer");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function updateArrowVisibility() {
  const scrollLeft = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  scrollLeftBtn.style.display = scrollLeft <= 0 ? "none" : "block";
  scrollRightBtn.style.display = scrollLeft >= maxScrollLeft - 1 ? "none" : "block";
}

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

scrollContainer.addEventListener("scroll", updateArrowVisibility);
window.addEventListener("load", updateArrowVisibility);
window.addEventListener("resize", updateArrowVisibility);

// Testimonials Auto Scroll
const container = document.querySelector('.testimonial-container');
let scrollSpeed = 1;
let forward = true;

function autoScroll() {
  if (!container) return;
  const maxScroll = container.scrollWidth - container.clientWidth;
  if (forward) {
    container.scrollLeft += scrollSpeed;
    if (container.scrollLeft >= maxScroll) forward = false;
  } else {
    container.scrollLeft -= scrollSpeed;
    if (container.scrollLeft <= 0) forward = true;
  }
}

let scrollInterval = setInterval(autoScroll, 5);

container.addEventListener('mouseenter', () => clearInterval(scrollInterval));
container.addEventListener('mouseleave', () => {
  scrollInterval = setInterval(autoScroll, 5);
});

// Fade-in Scroll Animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
