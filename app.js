import { citas } from "./citas.js"; //Trae un Array de Objetos

const cita = document.getElementById('cita');
const autor = document.getElementById('autor');
const boton = document.getElementById('siguiente-cita')

cita.innerText = citas[0].texto;
autor.innerText = citas[0].autor;

const generarCitaAleatoria = () => {
    cita.innerText = citas[generarIndiceAleatorio()].texto;
    autor.innerText = citas[generarIndiceAleatorio()].autor;
}

const generarIndiceAleatorio = () => {
    const rangoMax = citas.length - 1;
    const indice = Math.floor(Math.random()*(rangoMax + 1));
    return indice;
}

boton.addEventListener('click', generarCitaAleatoria);

