function encriptarTexto() {
    const texto = document.querySelector('.text_area').value;
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    const texto = document.querySelector('.text_area').value;
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const mensajeInicial = document.querySelector('.mensaje_inicial');
    const resultadoDiv = document.querySelector('.resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');

    if (texto.trim() !== '') {
        mensajeInicial.classList.add('ocultar');
        resultadoDiv.classList.remove('ocultar');
        resultadoTexto.value = texto;
    } else {
        mensajeInicial.classList.remove('ocultar');
        resultadoDiv.classList.add('ocultar');
    }
}

function copiarTexto() {
    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.select();
    document.execCommand('copy');
}
