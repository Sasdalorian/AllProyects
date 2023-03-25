function encriptar(evento) {
    let textoEntrada = document.querySelector("#texto__entrada").value.toLowerCase();
    textoEntrada = cleanStrings(textoEntrada).replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    document.querySelector("#texto__salida").value = textoEntrada;
    evento.preventDefault();
    console.log(textoEntrada)
    document.getElementById("copiar").style.display = "";
    document.getElementById("texto__salida").style.display = "";

    if(textoEntrada === '') {
        mostrarError('No se ha ingresado texto a encriptar');
        return;    
    }
    console.log('Mensaje Encriptado')
}
function desencriptar(evento) {
    let textoSalida = document.querySelector("#texto__entrada").value;
    textoSalida = cleanStrings(textoSalida).replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
    document.querySelector("#texto__salida").value = textoSalida;
    evento.preventDefault();
    console.log(textoSalida);
    document.getElementById("copiar").style.display = "";
    document.getElementById("texto__salida").style.display = "";

    if(textoSalida === '') {
        mostrarError('No se ha ingresado texto a desencriptar');
        return;    
    }
    console.log('Mensaje Desencriptado')
}

//Boton Copiar
function copiar() {
    const mensaje = document.querySelector("#texto__salida");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensajeLogrado('Su mensaje codificado ha sido copiado.')
}

//Mensaje Copiado
function mensajeLogrado(mensaje) {
    const body = document.querySelector("body");
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
    alerta.classList.add('mensajeLogrado');
    body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}

//Mostrar error de texto
function mostrarError(mensaje) {
    const body = document.querySelector("body");
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('alertaError');
    body.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}

function cleanStrings (str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
}
document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
document.getElementById("copiar").style.display = "none";
document.getElementById("texto__salida").style.display = "none";