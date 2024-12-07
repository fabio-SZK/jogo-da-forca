const palavrasFacil = ["cachorro", "gato", "casa", "flor", "bola", "livro", "sol", "lua", "carro", "mesa", "pato"," amigo", "mãe", "papel", "pessoa", "árvore", "mundo", "rio", "chuva", "pão"
];

const palavrasMedio = ["software", "probabilidade", "intrínseco", "sororidade", "transeunte", "resiliente", "concatenar", "semelhança", "ponderação", "ontológico", "insipiente", "mensurável", "estrupício", "importunar", "hombridade"]

const palavrasDificil = ["halloween", "mashmallow", "yakisoba", "webinário", "kombucha", "desconstitucionalização", "extraterritorialidade", "oftalmotorrinolaringologista", "desoxirribonucleico"];

var palavra;

var letra;

function escolherPalavra(palavras){
    let indiceAleatorio = Math.floor(Math.random() * palavras.length);

    return palavras[indiceAleatorio];
}

function escolherDificuldade(dificuldade){
    switch(dificuldade){
        case "facil":
            palavra = escolherPalavra(palavrasFacil);
            break;
        case "medio":
            palavra = escolherPalavra(palavrasMedio);
            break;
        case "dificil":
            palavra = escolherPalavra(palavrasDificil);
            break;
    }
}

function palavraErrada(){
    
}

function verificarLetra(){

}

function atualizarLetra(){

}

inputLetra.addEventListener(){
    
}