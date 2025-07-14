// Elementos do DOM
const imagemPedra = document.getElementById('pedra');
const imagemPapel = document.getElementById('papel');
const imagemTesoura = document.getElementById('tesoura');
const elementoResultado = document.getElementById('resultado');
const mensagemJogo = document.getElementById('mensagem-jogo'); // Para mostrar a escolha do jogador

// Função para o computador escolher
function obterEscolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const indice = Math.floor(Math.random() * 3);
    return opcoes[indice];
}

// Função principal do jogo
function jogar(escolhaJogador) {
    mensagemJogo.textContent = `Você escolheu: ${escolhaJogador}`; // Mostra a escolha do jogador
    const escolhaComputador = obterEscolhaComputador();

    let resultadoTexto = ""; // Renomeado para evitar conflito com o elemento 'resultado'

    if (escolhaJogador === escolhaComputador) {
        resultadoTexto = "Empate!";
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultadoTexto = "Você ganhou!";
    } else {
        resultadoTexto = "Você perdeu!";
    }

    // Exibir o resultado na tela
    elementoResultado.textContent = `Computador escolheu: ${escolhaComputador}. ${resultadoTexto}`;

    // alert(`Computador escolheu: ${escolhaComputador}. ${resultadoTexto}`); // Pode manter se quiser
}

// Adicionar 'event listeners' para cada imagem
imagemPedra.addEventListener('click', function() {
    jogar('pedra');
});

imagemPapel.addEventListener('click', function() {
    jogar('papel');
});

imagemTesoura.addEventListener('click', function() {
    jogar('tesoura');
});