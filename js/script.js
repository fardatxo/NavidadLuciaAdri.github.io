// FUNCIÓN PARA VERIFICAR RESPUESTAS
function verificarRespuesta(pregunta) {
    // Obtener el valor seleccionado del grupo de entrantes
    const opciones = document.getElementsByName('entrante');
    let seleccionada = null;

    // Buscar cuál opción está seleccionada
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            break;
        }
    }

    // Verificar si se seleccionó alguna opción
    if (seleccionada === null) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    // Creamos las variables para controlar el nivel de difuminado
    // Y los divs que aparecen y desaparecen
    let img_difuminar = null;
    let difuminado = null;
    let div_aparece = null;
    let div_desaparece = null;

    // Definimos la respuesta correcta para cada pregunta
    let respuestaCorrecta = null; 
    switch (pregunta) {
        case "pregunta1":
            respuestaCorrecta = "respuesta2";
            img_difuminar = "img_entrantes";
            difuminado = "blur(6px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta2":
            respuestaCorrecta = "respuesta8";
            img_difuminar = "img_entrantes";
            difuminado = "blur(3px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta3":
            respuestaCorrecta = "respuesta11";
            img_difuminar = "img_entrantes";
            difuminado = "blur(0px)";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            break;
        case "pregunta4":
            respuestaCorrecta = "resp_prin2";
            img_difuminar = "img_principales";
            difuminado = "blur(6px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta5":
            respuestaCorrecta = "resp_prin5";
            img_difuminar = "img_principales";
            difuminado = "blur(3px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta6":
            respuestaCorrecta = "resp_prin11";
            img_difuminar = "img_principales";
            difuminado = "blur(0px)";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            break;
        case "pregunta7":
            respuestaCorrecta = "resp_postre3";
            img_difuminar = "img_postres";
            difuminado = "blur(5px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta8":
            respuestaCorrecta = "resp_postre8";
            img_difuminar = "img_postres";
            difuminado = "blur(0px)";
            div_desaparece = "div_p2";
            div_aparece = "div_continuar";
            break;
        case "pregunta9":
            respuestaCorrecta = "resp_bebida4";
            img_difuminar = "img_bebidas";
            difuminado = "blur(9px)";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            break;
        case "pregunta10":
            respuestaCorrecta = "resp_bebida7";
            img_difuminar = "img_bebidas";
            difuminado = "blur(6px)";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            break;
        case "pregunta11":
            respuestaCorrecta = "resp_bebida10";
            img_difuminar = "img_bebidas";
            difuminado = "blur(3px)";
            div_desaparece = "div_p3";
            div_aparece = "div_p4";
            break;
        case "pregunta12":
            respuestaCorrecta = "resp_bebida9";
            img_difuminar = "img_bebidas";
            difuminado = "blur(0px)";
            div_desaparece = "div_p4";
            div_aparece = "div_continuar";
            break;
        default:
            respuestaCorrecta = "ninguna";
    }

    // Verificar si la respuesta es correcta
    if (seleccionada === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
        document.getElementById(img_difuminar).style.filter = difuminado;
        document.getElementById(div_desaparece).style.display = "none";
        document.getElementById(div_aparece).style.display = "block";
    } else {
        alert("¡Respuesta incorrecta! Vuelve a intentarlo.");
    }
}

// FUNCIÓN PARA CREAR COPOS DE NIEVE
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Carácter del copo (Unicode seguro)
    snowflake.textContent = '\u2744'; // ❄

    // Posición horizontal aleatoria
    snowflake.style.left = Math.random() * 100 + 'vw';

    // Duración aleatoria (5–8 s)
    const dur = (Math.random() * 3 + 5).toFixed(2) + 's';
    snowflake.style.animation = `fall ${dur} linear forwards`;

    // Tamaño aleatorio
    const size = (Math.random() * 0.9 + 0.6).toFixed(2) + 'rem';
    snowflake.style.fontSize = size;

    // Opacidad aleatoria
    snowflake.style.opacity = (Math.random() * 0.5 + 0.4).toFixed(2);

    document.body.appendChild(snowflake);

    // Eliminar cuando termine la animación
    const ms = parseFloat(dur) * 1000 + 500;
    setTimeout(() => snowflake.remove(), ms);
}

// Crear copos continuamente
setInterval(createSnowflake, 200);

// Inicializar la nieve cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear copos iniciales
    for (let i = 0; i < 20; i++) {
        setTimeout(createSnowflake, i * 120);
    }
});
