// FUNCIÓN PARA VERIFICAR RESPUESTAS
function verificarRespuesta(pregunta) {
    // Obtener el valor seleccionado del grupo de entrantes
    const opciones = document.getElementsByName('entrante');
    let seleccionada = null;
    let radioSeleccionado = null;

    // Buscar cuál opción está seleccionada
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionada = opciones[i].value;
            radioSeleccionado = opciones[i];
            break;
        }
    }

    // Verificar si se seleccionó alguna opción
    if (seleccionada === null) {
        mostrarMensaje("Por favor, selecciona una respuesta.", "advertencia");
        return;
    }

    // Variables para controlar el difuminado y los divs
    let img_difuminar = null;
    let difuminado = null;
    let div_aparece = null;
    let div_desaparece = null;

    // Definir respuesta correcta según la pregunta
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

    // Obtener el label de la opción seleccionada
    const labelSeleccionado = document.querySelector(`label[for="${seleccionada}"]`);

    // Verificar si la respuesta es correcta
    if (seleccionada === respuestaCorrecta) {
        // Marcar como correcta (verde)
        labelSeleccionado.classList.add('correcta');
        labelSeleccionado.classList.remove('incorrecta');
        
        // Esperar 1 segundo antes de continuar
        setTimeout(function() {
            document.getElementById(img_difuminar).style.filter = difuminado;
            document.getElementById(div_desaparece).style.display = "none";
            document.getElementById(div_aparece).style.display = "block";
        }, 1000);
        
    } else {
        // Marcar como incorrecta (rojo)
        labelSeleccionado.classList.add('incorrecta');
        labelSeleccionado.classList.remove('correcta');
        
        // Quitar el color después de 2 segundos
        setTimeout(function() {
            labelSeleccionado.classList.remove('incorrecta');
            // Desmarcar el radio button
            radioSeleccionado.checked = false;
        }, 2000);
    }
}

// FUNCIÓN PARA MOSTRAR MENSAJES (opcional, para advertencias)
function mostrarMensaje(mensaje, tipo) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(196, 30, 58, 0.95);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Agregar animaciones para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);