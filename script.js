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


// CONTADOR DE CARACTERES //

const contador = document.createElement("p");
contador.textContent = "Caracteres: 0";
comentario.parentNode.insertBefore(contador, comentario.nextSibling);

function contarCaracteres(){
    contador.textContent = "Caracteres: " + comentario.value.length;

}
comentario.addEventListener("input", contarCaracteres);

// FUNCION: VALIDAR FORMULARIO //

function validarFormulario(){

    try{
        for(let input of inputs){
            if(input.value.trim() == ""){
                throw new Error("Complete todos los campos.");
            }

        }

        if(!validarEmail(inputs[2].value)){
            throw new Error("Ingrese un email válido.");

        }

        if(comentario.value.trim() == ""){
            throw new Error("Ingrese un comentario.");

        }

        formularios.push({
            nombre: inputs[0].value,
            apellido: inputs[1].value,
            email: inputs[2].value,
            comentario: comentario.value
        });

        estado.textContent = "Formulario enviado correctamente.";
        estado.style.color = "green";
        formulario.reset();
        contador.textContent = "Caracteres: 0";
        inputs.forEach(function(input){
            input.style.border = "";
            input.style.background = "";
        });
        comentario.style.border = "";
    }

    catch(error){
        estado.textContent = error.message;
        estado.style.color = "red";
        alert(error.message);

    }
}

// FUNCION: VALIDAR EMAIL //

function validarEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// FUNCION: CAMBIAR COLOR //

function cambiarColor(){
    if(this.value.trim() == ""){
        this.style.border = "2px solid red";
    }
    else{
        this.style.border = "2px solid green";
    }

}

// FUNCION: MOSTRAR CANTIDAD DE FORMULARIOS //

function mostrarCantidad(){
    const cantidad = document.querySelector("#cantidadFormularios");
    if(cantidad){
        cantidad.textContent = "Formularios enviados: " + formularios.length;
    }

    else{
        const nuevo = document.createElement("p");
        nuevo.id = "cantidadFormularios";
        nuevo.style.fontWeight = "bold";
        nuevo.textContent = "Formularios enviados: " + formularios.length;
        formulario.appendChild(nuevo);
    }

}

// EVENTO SUBMIT //

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validarFormulario();
    mostrarCantidad();
});

