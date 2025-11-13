// Hamburger Menu Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-triggered animations using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // middle of the screen
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Target feature cards, about, and download sections
const featureCards = document.querySelectorAll('.feature-card');
const aboutSection = document.querySelector('.about');
const downloadSection = document.querySelector('.download');

featureCards.forEach(card => observer.observe(card));
observer.observe(aboutSection);
observer.observe(downloadSection);
