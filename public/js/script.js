console.log("Hello World!");

const apenasNumeros = /[0-9]/g;
const apenasLetras = /[a-z]/gi;

let tentativa;
let erros;
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
                console.log("errou");
                palpite.style.border = "2px solid var(--lightRed)";
                if (erradas.innerHTML != "") {
                    erradas.innerHTML += `- ${palpite.value}`;
                } else {
                    erradas.innerHTML += ` ${palpite.value}`;
                }
            }
            if (Number(tentativa) == numero) {
                console.log("acertou");
                palpite.style.border = "2px solid var(--green)";
            }
        }
        if (palpite.value == "") {
            palpite.style.border = "2px solid var(--lightRed)";
            erradas.innerHTML = `O palpite não pode estar em branco!`;
        }
    }
    if (chances == 0) {
        alert("Você perdeu");
    }
};
