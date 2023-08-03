console.log("Hello World!");
const apenasNumeros = /[0-9]/g;
const apenasLetras = /[a-z]/gi;

let numero = Math.floor(Math.random() * 100) + 1;
console.log(numero);
let chances = 10;
console.log(chances);
let tentativa;
let erros = [];
dica.style.visibility = "hidden";
palpite.onfocus = function () {
    palpite.value = "";
};

palpite.onblur = function jogo() {
    if (palpite.value == "") {
        textoAviso.innerHTML = "Você precisa tentar advinhar o número!"
        fora.style.visibility = 'visible';
        aviso.style.visibility = 'visible';
    }
    if (chances > 0) {
        chances--;
        tentativa = palpite.value;
        if (palpite.value != "") {
            if (Number(tentativa) != numero) {
                if (erros.includes(palpite.value) == true) {
                    textoAviso.innerHTML = "Você já tentou esse número"
                    iconeVazio.setAttribute('name', '')
                    fora.style.visibility = 'visible';
                    aviso.style.visibility = 'visible';
                    erros = erros.pop();
                }
                if (erros.includes(palpite.value) == false) {
                    erros.push(tentativa);
                }
                palpite.style.border = "2px solid var(--lightRed)";
                biaInGame.src = "./public/img/bia-pensando.png";
                if (Number(tentativa) > numero) {
                    dica.style.visibility = "visible";
                    dica.setAttribute('name', 'down-arrow-alt')
                }
                if (Number(tentativa) < numero) {
                    dica.style.visibility = "visible";
                    dica.setAttribute('name', 'up-arrow-alt')
                }

            }
            if (Number(tentativa) == numero) {
                console.log("acertou");
                palpite.style.border = "2px solid var(--green)";
                biaInGame.src = "./public/img/bia-correta.png"
            }
            console.log(erros);
        }
        // let errosString = erros.toString()
        // errosString.replaceAll(',' , ' - ');
        erradas.innerHTML = erros;
    }

    if (chances === 0) {
        biaInGame.src = "./public/img/bia-errada.png"
        dica.style.visibility = "hidden";
        palpite.style.visibility = 'hidden';
        above.innerHTML = `
        <p id="naoAcertou">Você não acertou, o número era ${numero}</p>
        <button id="tenteNova" onclick='reload()'>Tente Novamente</button>
        `
    }
};

fora.onclick = function () {
    fora.style.visibility = 'hidden';
    aviso.style.visibility = 'hidden';
}

function reload() {
    location.reload();
}
