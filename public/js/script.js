console.log("Hello World!")

let numero = Math.floor(Math.random() * 100) + 1;
console.log(numero);

const apenasNumeros = /[0-9]/g;
const apenasLetras = /[a-z]/ig;

let tentativa;
let erros;
palpite.onfocus = function () {
    palpite.value = '';
}
palpite.onblur = function jogo() {
    // for(let i = 0; i >= 10 ; i++ ) {
    tentativa = palpite.value;
    if (palpite.value != '') {
        if (Number(tentativa) != numero) {
            console.log("errou");
            palpite.style.border = '2px solid var(--lightRed)';
            if (erradas.innerHTML != '') {
                erradas.innerHTML += `- ${palpite.value}`;
            }
            else {
                erradas.innerHTML += ` ${palpite.value}`;
            }

        }
        if (Number(tentativa) == numero) {
            console.log("acertou");
            palpite.style.border = '2px solid var(--green)';
        }
    }
    if (palpite.value == '') {
        palpite.style.border = '2px solid var(--lightRed)';
        erradas.innerHTML = `O palpite não pode estar em branco!`;
    }

    if (palpites.value != apenasNumeros) {
        palpite.value = palpites.value.replaceAll(apenasLetras, '')
        palpite.innerHTML = `${palpite.value}`;
        palpite.style.border = '2px solid var(--lightRed)';
        erradas.innerHTML = `O palpite não pode ser com letras`;
    }
}

