const botao_top10 = document.getElementById("login-link2");
const modal2 = document.getElementById("modal2");
const modalContest2 = document.getElementById('modal-content2');
//ele faz com que apareça um menu
botao_top10.onclick = function() {
	modal2.style.display = "block";
    //ele faz com que o display deixe ou nao de ser block ou none
}

const closeBtn2 = document.getElementsByClassName("close2")[0];
closeBtn2.onclick = function() {
	modal2.style.display = "none";
}

window.onclose = function(event) {
    if (event.target == modal2) {
    modal2.style.display = "none";
    }
    }





const loginBtn = document.getElementById("login-link");
const modal = document.getElementById("login-modal");

loginBtn.onclick = function() {
	modal.style.display = "block";
}



const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }


    
// const divRoboDasCompras = document.getElementById('roboDasCompras');
// //botao a ser clicado
// const textCompras = document.getElementById('textCompras');
// //palavra para aparecer

// // const hideButton5 = document.getElementById('hide-button5');


// divRoboDasCompras.addEventListener('mouseover', () => {
//     if (textCompras.classList.contains('text_roboDasCompras')) {
//         //ele tira e adiciona a classe da palavra
//         textCompras.classList.remove('text_roboDasCompras');
//     } else {
//         textCompras.classList.add('text_roboDasCompras');
//     }
// });

const textCompras = document.getElementById('textCompras');
const hidden6 = document.getElementById('hidden6');

window.onclick = function(event) {
    if (event.target == textCompras) {
        textCompras.style.display = "flex"
    }
}