// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    // sticky header


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll

}

// Typewriter
const instance = new Typewriter('.text-animate', {
    loop: true,
    delay: 60,
  });
  
  instance.typeString('Escritor')
    .pauseFor(1000)
    .deleteAll(10)
    .typeString('Autor de As Aventuras de Alex Canyon')
    .pauseFor(1000)
    .deleteAll(10)
    .typeString('Os Escaravelhos de Seth - Outubro de 2024')
    .pauseFor(1000)
    .deleteAll(10)
    .start();