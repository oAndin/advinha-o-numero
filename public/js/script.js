console.log("Hello World!");

const apenasNumeros = /[0-9]/g;
const apenasLetras = /[a-z]/gi;

let numero = Math.floor(Math.random() * 100) + 1;
console.log(numero);
let chances = 10;

let tentativa;
let erros = [];

palpite.onfocus = function () {
    palpite.value = "";
};

palpite.onblur = function jogo() {
    chances--;
    if (chances > 1) {
        tentativa = palpite.value;
        if (palpite.value != "") {
            if (Number(tentativa) != numero) {
                erros.push(tentativa);
                palpite.style.border = "2px solid var(--lightRed)";
                console.log(erros);
                erradas.innerHTML += erros;
            }
            if (Number(tentativa) == numero) {
                console.log("acertou");
                palpite.style.border = "2px solid var(--green)";
                biaInGame.src= "./public/img/bia-correta.png"
            }
        }
        if (palpite.value == "") {
            // erradas.innerHTML = `O palpite não pode estar em branco!`;
            textoAviso.innerHTML = "Você precisa tentar advinhar o número!"
            fora.style.visibility = 'visible';
            aviso.style.visibility = 'visible';
        }
    }

    if (chances == 0) {
        biaInGame.src= "./public/img/bia-errada.png"
    }
};

fora.onclick = function () {
    fora.style.visibility = 'hidden';
    aviso.style.visibility = 'hidden';
}
