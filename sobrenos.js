document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".texto, .texto-extra, .imagem, .imagem2, #nossaHistoria, #eventosEspeciais, .caption");
    elementos.forEach((elemento) => {
        elemento.style.opacity = 0;
        elemento.style.transform = "translateY(20px)";
    });
    
    setTimeout(() => {
        elementos.forEach((elemento) => {
            elemento.style.transition = "opacity 1s, transform 1s";
            elemento.style.opacity = 1;
            elemento.style.transform = "translateY(0)";
        });
    }, 500);
});