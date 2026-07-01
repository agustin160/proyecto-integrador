console.log("Hola desde JavaScript");

//  ARRAY DE CONSEJOS // 

const consejos = [
    "Dormí entre 7 y 9 horas por día.",
    "Tomá al menos 2 litros de agua.",
    "Entrená con buena técnica.",
    "Aumentá los pesos progresivamente.",
    "No saltees el calentamiento."
];

// OBTENER ELEMENTOS // 

const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input[type='text']");
const comentario = document.querySelector("textarea");
const botonEnviar = document.querySelector("input[type='submit']");

// CREAR BOTÓN PARA CONSEJOS // 

const botonConsejo = document.createElement("button");
botonConsejo.textContent = "Mostrar Consejo";
botonConsejo.type = "button";

const mensaje = document.createElement("p");
mensaje.style.marginTop = "15px";
mensaje.style.fontWeight = "bold";
mensaje.style.color = "green";

formulario.appendChild(botonConsejo);
formulario.appendChild(mensaje);

// FUNCION: 1 Mostrar consejo aleatorio // 

function mostrarConsejo(){

    const numero = Math.floor(Math.random()*consejos.length);

    mensaje.textContent = consejos[numero];

}

// FUNCION 2: Validar formulario // 

function validarFormulario(){

    try{

        for(let input of inputs){

            if(input.value.trim()==""){

                throw new Error("Complete todos los campos.");

            }

        }

        if(comentario.value.trim()==""){

            throw new Error("Ingrese un comentario.");

        }

        alert("Formulario enviado correctamente.");

        formulario.reset();

    }

    catch(error){

        alert(error.message);

    }

}

// FUNCION 3: Contador de caracteres // 

const contador=document.createElement("p");

contador.textContent="Caracteres: 0";

comentario.parentNode.insertBefore(contador,comentario.nextSibling);

function contarCaracteres(){

    contador.textContent="Caracteres: "+comentario.value.length;

}

// FUNCION 4: Cambiar color al escribir // 

function cambiarColor(){

    if(this.value.trim()==""){

        this.style.border="1px solid red";

    }

    else{

        this.style.border="2px solid green";

    }

}

// EVENTOS // 

// Evento submit

formulario.addEventListener("submit",function(e){

    e.preventDefault();

    validarFormulario();

});

// Evento click

botonConsejo.addEventListener("click",mostrarConsejo);

// Evento input

comentario.addEventListener("input",contarCaracteres);

// Evento input para todos los campos

inputs.forEach(function(input){

    input.addEventListener("input",cambiarColor);

});

// MANIPULACIÓN DEL DOM // 

const titulo=document.querySelector("header h1");

titulo.textContent=titulo.textContent+" 💪";

titulo.addEventListener("mouseover",function(){

    titulo.style.color="yellow";

});

titulo.addEventListener("mouseout",function(){

    titulo.style.color="white";

});