const palavrasFacil = ["cachorro", "gato", "casa", "flor", "bola", "livro", "sol", "lua", "carro", "mesa", "pato", "amigo", "mãe", "papel", "pessoa", "árvore", "mundo", "rio", "chuva", "pão"];
const palavrasMedio = ["software", "probabilidade", "intrínseco", "sororidade", "transeunte", "resiliente", "concatenar", "semelhança", "ponderação", "ontológico", "insipiente", "mensurável", "estrupício", "importunar", "hombridade"];
const palavrasDificil = ["halloween", "mashmallow", "yakisoba", "webinário", "kombucha", "desconstitucionalização", "extraterritorialidade", "oftalmotorrinolaringologista", "desoxirribonucleico"];

let palavraEscolhida;
let palavraOculta;
let letrasErradas = [];
let tentativasRestantes = 6;

function escolherPalavra(palavras) {
    let indiceAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[indiceAleatorio];
}

function escolherDificuldade(dificuldade) {
    switch (dificuldade) {
        case "facil":
            palavraEscolhida = escolherPalavra(palavrasFacil);
            break;
        case "medio":
            palavraEscolhida = escolherPalavra(palavrasMedio);
            break;
        case "dificil":
            palavraEscolhida = escolherPalavra(palavrasDificil);
            break;
    }
    palavraOculta = "_".repeat(palavraEscolhida.length);
    atualizarTela();
}

function verificarLetra(letra) {
    if (palavraEscolhida.includes(letra)) {
        atualizarLetra(letra);
    } else {
        letrasErradas.push(letra);
        tentativasRestantes--;
        if (tentativasRestantes === 0) {
            alert("Game Over! A palavra era: " + palavraEscolhida);
        }
    }
    atualizarTela();
}

function atualizarLetra(letra) {
    let novaPalavraOculta = "";
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
            novaPalavraOculta += letra;
        } else {
            novaPalavraOculta += palavraOculta[i];
        }
    }
    palavraOculta = novaPalavraOculta;

    if (!palavraOculta.includes("_")) {
        alert("Parabéns! Você venceu! A palavra era: " + palavraEscolhida);
    }
}

function atualizarTela() {
    document.getElementById("palavra").innerText = palavraOculta;
    document.getElementById("letrasErradas").innerText = "Erros: " + letrasErradas.join(", ");
    document.getElementById("tentativas").innerText = "Tentativas restantes: " + tentativasRestantes;
}

document.getElementById("inputLetra").addEventListener("input", function (event) {
    const letra = event.target.value.toLowerCase();
    if (letra.match(/^[a-z]$/)) {
        verificarLetra(letra);
    }
    event.target.value = ""; 
});

document.getElementById("startGame").addEventListener("click", function () {
    const dificuldade = document.getElementById("dificuldade").value;
    escolherDificuldade(dificuldade);
});
document.getElementById("recomecarJogo").addEventListener("click", function() {
    location.reload();
});

