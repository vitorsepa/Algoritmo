let f = document.getElementById('foco');
let p = document.getElementById('distancia');
let y = document.getElementById('altura');

let tipoEspelho;
let posicaoObjeto;
let pl;
let tipoImagem;
let a;
let orientacaoImagem;
let yl;

document.getElementById("botao").addEventListener("click", function() {
    calcular();
    result();
});

function calcular() {
    let f2 = parseInt(f.value);
    let p2 = parseInt(p.value);
    let y2 = parseInt(y.value);

    if (f2 > 0) {
        tipoEspelho = "Côncavo";
    } else if (f2 === 0) {
        tipoEspelho = "Plano";
    } else {
        tipoEspelho = "Convexo";
    }

    if (y2 > 0) {
        posicaoObjeto = "Objeto para cima";
    } else if (y2 === 0) {
        posicaoObjeto = "Objeto no ponto";
    } else {
        posicaoObjeto = "Objeto para baixo";
    }

    if (p2 === f2) {
        pl = "Imagem imprópria";
    } else {
        pl = (f2 * p2) / (p2 - f2);
    }

    if (typeof pl === "number") {
        if (pl > 0) {
            tipoImagem = "Imagem real (fora do espelho)";
        } else {
            tipoImagem = "Imagem virtual (dentro do espelho)";
        }
    } else {
        tipoImagem = pl;
    }

    if (typeof pl === "number") {
        a = -pl / p2;
    }

    if (typeof a === "number") {
        if (a > 0) {
            orientacaoImagem = "Imagem direita";
        } else {
            orientacaoImagem = "Imagem invertida";
        }
    }

    if (typeof a === "number") {
        yl = Math.abs(a) * y2;
    }
}

function result() {
    let resultado = document.querySelector("span.resultado");
    let imagemResultado = document.getElementById('imagemResultado');
    let jumpscare = document.getElementById('jumpscare');

    let f2 = parseInt(f.value);
    let p2 = parseInt(p.value);
    let y2 = parseInt(y.value);

    if (f2 === 1987 && p2 === 1987 && y2 === 1987) {
        // Se os valores forem 1987, mostra a imagem do jumpscare
        jumpscare.style.display = 'flex'; // Exibe o div
    } else {
        // Caso contrário, esconde a imagem do jumpscare
        jumpscare.style.display = 'none';
    }


    if (f.value || p.value || y.value) {
        resultado.innerHTML = `Tipo de Espelho: ${tipoEspelho}<br><br>Posição do Objeto: ${posicaoObjeto}<br><br>Posição da Imagem (pl): ${pl}<br><br>Tipo de Imagem: ${tipoImagem}<br><br>Ampliação (a): ${a}<br><br>Orientação da Imagem: ${orientacaoImagem}<br><br>Altura da Imagem (yl): ${yl}`;
    } else {
        console.log("Erro");
    }
}
