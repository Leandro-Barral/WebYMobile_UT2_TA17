const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");
let contadorValor = 0;

btnIncrementar.addEventListener("click", () => {
    contadorValor++;
    contador.innerHTML = contadorValor;
});