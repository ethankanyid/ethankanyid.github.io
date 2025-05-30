// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#004466' },
    shape: { type: 'circle' },
    opacity: { value: 0.15, random: false },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1, direction: 'none', out_mode: 'out' },
    line_linked: { enable: true, distance: 150, color: '#004466', opacity: 0.1, width: 1 }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.3 } }
    }
  },
  retina_detect: true
});

// Initialize ScrollReveal
ScrollReveal().reveal('.reveal', {
  distance: '20px',
  duration: 600,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 100,
  cleanup: true
});

// Create Back to Top button dynamically
const backToTop = document.createElement('button');
backToTop.id = 'back-to-top';
backToTop.textContent = '↑ Top';
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide Back to Top button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
