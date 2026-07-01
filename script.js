console.log("Hola desde JavaScript");

// ARRAY DE CONSEJOS //

const consejos = [
    "Dormí entre 7 y 9 horas por día.",
    "Tomá al menos 2 litros de agua.",
    "Entrená con buena técnica.",
    "Aumentá los pesos progresivamente.",
    "No saltees el calentamiento."
];

// ARRAY DE FORMULARIOS //

const formularios = [];

// OBTENER ELEMENTOS //

const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input[type='text']");
const comentario = document.querySelector("textarea");
const titulo = document.querySelector("header h1");

// CREAR BOTON PARA CONSEJOS //

const botonConsejo = document.createElement("button");

botonConsejo.textContent = "Mostrar Consejo";
botonConsejo.type = "button";

botonConsejo.style.marginTop = "15px";
botonConsejo.style.padding = "10px";
botonConsejo.style.cursor = "pointer";

formulario.appendChild(botonConsejo);

// MENSAJE DE CONSEJOS //

const mensaje = document.createElement("p");

mensaje.style.marginTop = "15px";
mensaje.style.fontWeight = "bold";
mensaje.style.color = "green";

formulario.appendChild(mensaje);

function mostrarConsejo(){
    const numero = Math.floor(Math.random() * consejos.length);
    mensaje.textContent = consejos[numero];
}

botonConsejo.addEventListener("click", mostrarConsejo);


// MENSAJE DE ESTADO //

const estado = document.createElement("p");

estado.style.fontWeight = "bold";
estado.style.marginTop = "10px";

formulario.appendChild(estado);
estado.textContent = "Formulario enviado correctamente.";

estado.style.color = "green";


// CONTADOR DE CARACTERES //

const contador = document.createElement("p");
contador.textContent = "Caracteres: 0";
comentario.parentNode.insertBefore(contador, comentario.nextSibling);

function contarCaracteres(){
    contador.textContent = "Caracteres: " + comentario.value.length;

}
comentario.addEventListener("input", contarCaracteres);