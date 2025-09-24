
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString(`Analista de Dados Jr <span style="color: #17748b">Desenvolvedor FullStack web Jr</span> Power BI & Python`)
  .pauseFor(1500)
  .deleteAll()
  .typeString('Olá, tudo bem?')
  .pauseFor(1000)
  .start();
