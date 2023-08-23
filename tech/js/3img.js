
const divRoboDasCompras = document.getElementById('divRoboDasCompras');
//botao a ser clicado
const textCompras = document.getElementById('textCompras');
//palavra para aparecer

// const hideButton5 = document.getElementById('hide-button5');


divRoboDasCompras.addEventListener('mouseover', () => {
    if (textCompras.classList.contains('text_roboDasCompras')) {
        //ele tira e adiciona a classe da palavra
        textCompras.classList.remove('text_roboDasCompras');
    } else {
        textCompras.classList.add('text_roboDasCompras');
    }
});