// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //Active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    }
  });

// Sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 150);

// Remove toggle icon and navbar when clicking navbar links or scrolling
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

}

// Typewriter
const instance = new Typewriter('#typewriter', {
  loop: true,
  delay: 60,
});

instance.typeString('Writer')
  .pauseFor(1000)
  .deleteAll(5)
  .typeString('Author of <em>The Adventures of Alex Canyon</em>')
  .pauseFor(1000)
  .deleteAll(5)
  .typeString('The Scarabs of Seth — available now!')
  .pauseFor(1000)
  .deleteAll(5)
  .start();