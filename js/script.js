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
        //return;
    }

    // Creamos las variables para controlar el nivel de difuminado
    // Y los divs que aparecen y desaparacen
    let img_difuminar = null;
    let difuminado = null;
    let div_aparece = null;
    let div_desaparece = null;

    // Definimos la respuesta correcta para cada pregunta
    // Para la pregunta 1, la correcta es la respuesta 2
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
        //alert(respuestaCorrecta);
        //alert(seleccionada);
    }
}