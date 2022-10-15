function tocaSom(e) {
  document.querySelector(e).play();
}
const listdeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listdeTeclas.length; contador++) {
  const tecla = listdeTeclas[contador];
  const instrumento = tecla.classList[1];
  const somId = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(somId);
  };
}
