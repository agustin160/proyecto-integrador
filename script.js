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