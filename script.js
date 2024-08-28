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
    const mensajeSuperior = document.getElementById('mensajeSuperior');
    const mensajeInferior = document.getElementById('mensajeInferior');
    const resultadoTexto = document.getElementById('resultadoTexto');
    
    if (texto) {
        mensajeSuperior.textContent = 'Mensaje encriptado';
        mensajeInferior.textContent = '';
        resultadoTexto.value = texto;
    } else {
        mensajeSuperior.textContent = 'Ningún mensaje fue encontrado';
        mensajeInferior.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
        resultadoTexto.value = '';
    }
}

function copiarTexto() {
    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.select();
    document.execCommand('copy');
}
