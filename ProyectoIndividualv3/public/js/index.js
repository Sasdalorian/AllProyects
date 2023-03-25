// INDEX //

/* CONTACTO */
// Eventos de Inputs 
const nombreInput = document.querySelector('#nombreInput');
const apellidoInput = document.querySelector('#apellidoInput');
const emailInput = document.querySelector('#emailInput');
const mensajeInput = document.querySelector('#mensajeInput');
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('#btnEnviar');

const datos = {
    nombreInput: '',
    apellidoInput: '',
    emailInput: '',
    mensajeInput: ''
}

nombreInput.addEventListener('blur', leerTexto);
apellidoInput.addEventListener('blur', leerTexto);
emailInput.addEventListener('blur', leerTexto);
mensajeInput.addEventListener('blur', leerTexto);

    // Evento Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();


    // Validar Formulario

const { nombreInput, emailInput, mensajeInput } = datos;
    if(nombreInput === "" || emailInput === '' || apellidoInput === '') {
        mostrarError('Todos los campos con * son obligatorios.')
        return;
    }
    //Alerta de Envio Formulario
    mostrarMensaje('El formulario ha sido enviado correctamente.')
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

    // Mostrar Alerta de Envio Correcto
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);
    btnEnviar.style.pointerEvents = 'none';
    btnEnviar.style.cursor = 'default';
        //Desaparecer Alerta
    setTimeout(() => {
        alerta.remove();
        btnEnviar.style.pointerEvents = 'auto';
        btnEnviar.style.cursor = 'pointer';
    }, 4000);
}
    // Mostrar Error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error')

    formulario.appendChild(error);
        btnEnviar.style.pointerEvents = 'none';
        btnEnviar.style.cursor = 'default';
        //Desaparecer Error
        setTimeout(() => {
            error.remove();
            btnEnviar.style.pointerEvents = 'auto';
            btnEnviar.style.cursor = 'pointer';
        }, 4000);
    
}


/*  DONACION  */
document.getElementById('formatoFisica').style.display = "none";
document.getElementById('parrafo_regalo').style.display = "none";
document.getElementById('placaP').style.display = "none";

/* BOTONES */
var paraMi = document.getElementById("button__parami");
var regalo = document.getElementById("button__regalo");

paraMi.addEventListener("click", function (e) {
    var regalo = document.getElementById("button__regalo");
    e.preventDefault();
    if (paraMi.classList.contains("active") === true) {
        paraMi.classList.remove("active");
        regalo.classList.remove("desactive");
    } else {
        paraMi.classList.add("active");
        regalo.classList.remove("desactive");
        document.getElementById('parrafo_regalo').style.display = "none"
    }
});
regalo.addEventListener("click", function (e) {
    e.preventDefault()
    if (this.classList.contains("desactive") === true) {
        this.classList.remove("desactive");
        paraMi.classList.remove("active");
        document.getElementById('parrafo_regalo').style.display = "none"
    } else {
        this.classList.add("desactive")
        paraMi.classList.remove("active");
        document.getElementById('parrafo_regalo').style.display = "block"
    }
});