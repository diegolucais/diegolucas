// Typewriter
const instance = new Typewriter('#typewriter', {
  loop: true,
  delay: 50,
});

instance.typeString('Escritor')
  .pauseFor(1000)
  .deleteAll(10)
  .typeString('Autor de <em>As Aventuras de Alex Canyon</em>')
  .pauseFor(1000)
  .deleteAll(10)
  .start();