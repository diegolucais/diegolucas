// Common JS for all pages
document.addEventListener('DOMContentLoaded', () => {
  // Reveal book cards on scroll
  const cards = document.querySelectorAll('.book-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  // Navbar background on scroll (Home page only)
  const nav = document.querySelector('nav');
  if (nav && !document.body.classList.contains('book-page')) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Typewriter on Home page
  if (document.querySelector('#typewriter')) {
    const instance = new Typewriter('#typewriter', {
      loop: true,
      delay: 60,
    });

    instance.typeString('Author of dark fantasy & mystical adventures.')
      .pauseFor(2000)
      .deleteAll(5)
      .typeString('Explore worlds of ancient artefacts and epic battles.')
      .pauseFor(2000)
      .deleteAll(5)
      .start();
  }
});