console.log("Hello World!");

const apenasNumeros = /[0-9]/g;
const apenasLetras = /[a-z]/gi;

let tentativa;
let erros = [];
let chances = 10;
let numero = Math.floor(Math.random() * 100) + 1;
console.log(numero);
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
        alert("Você perdeu");
    }
};

fora.onclick = function () {
    fora.style.visibility = 'hidden';
    aviso.style.visibility = 'hidden';
}
