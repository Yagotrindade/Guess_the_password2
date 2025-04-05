
const mensagens = [
    [
        "- O texto cifrado correto está na afirmação 2",
        "- O texto cifrado correto está na afirmação 1",
        "- O texto cifrado é: Th mhih wh kxbgh, gt ftbl temt mhkkx, nf fblmékbh é zntkwtwh. Incnm, fhjaushm jh ans bnlkp."
    ],
    [
        "- A chave é 4",
        "- A chave é 2.",
        "- A chave está na afirmação 1."
    ],
    [
        "- O texto cifrado é: jsywj tx ywfutx, à inwjnyf ij zrf hmfrf rtwyf, ijxhfsxf f hmfaj if vzfwyf wtxf.",
        "- A chave desta afirmação está correta.",
        "- A chave é 5."
    ]
];

function trocar(imageId, newImageSrc, time) {
    let imagem = document.getElementById(imageId);
    imagem.style.opacity = "0";
    setTimeout(() => {
        imagem.src = newImageSrc;
        imagem.style.opacity = "1";
    }, time);
    document.getElementById("image-container").style.display = "flex";
}

function revelarMensagem(opcao) {
    document.getElementById("primeiraAfirmacao").innerText = mensagens[0][opcao - 1];
    document.getElementById("segundaAfirmacao").innerText = mensagens[1][opcao - 1];
    document.getElementById("terceiraAfirmacao").innerText = mensagens[2][opcao - 1];
}

function verificarCifra() {
    let texto = document.getElementById("inputTexto").value;
    let chave = parseInt(document.getElementById("inputChave").value);
    let resultadoDiv = document.getElementById("resultado");
    let mensagemDiv = document.getElementById("mensagem");

    if (!texto || isNaN(chave) || chave < 1 || chave > 25) {
        resultadoDiv.innerText = "Por favor, insira um texto e uma chave válida (1-25).";
        return;
    }

    let decifrado = texto.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            let base = char === char.toLowerCase() ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base - chave + 26) % 26) + base);
        }
        return char;
    }).join('');

    resultadoDiv.innerText = `Texto decifrado: ${decifrado}`;
    if (decifrado === "entre os trapos, à direita de uma chama morta, descansa a chave da quarta rosa." || decifrado === "entre os trapos, à direita de uma chama morta, descansa a chave da quarta rosa." || decifrado === " entre os trapos, à direita de uma chama morta, descansa a chave da quarta rosa." || decifrado === " entre os trapos, à direita de uma chama morta, descansa a chave da quarta rosa") {
        mensagemDiv.innerText += "\n...A princesa pega a chave em meio aos trapos, e abre a porta que a guardava. O último desafio estava próximo, ela pega a rosa e vai para o sul da parte mais alta da torre...";
        trocar("trocar1", "./resources/images/tulipaComplete.png", 400);
        trocar("trocar2", "./resources/images/tulipaComplete.png", 600);
        trocar("trocar3", "./resources/images/tulipaComplete.png", 800);
        trocar("trocar4", "./resources/images/tulipaComplete.png", 1000);
        trocar("trocar5", "./resources/images/tulipa.png", 1300);
    }
}



function alternarEstilo(elemento) {
    elemento.classList.toggle("clicado");
}