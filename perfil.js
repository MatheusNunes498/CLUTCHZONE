
const formulario = document.getElementById("form-jogador");
const nomeJogador = document.getElementById("nome-jogador");
const desafioJogador = document.getElementById("desafio-jogador");
const erroFormulario = document.getElementById("erro-formulario");
const mensagemJogador = document.getElementById("mensagem-jogador");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = nomeJogador.value.trim();
    const desafio = desafioJogador.value;

    erroFormulario.hidden = true;
    mensagemJogador.hidden = true;

    // VALIDAÇÃO DO NOME
    if (nome.length < 3) {
        erroFormulario.textContent = "Digite um nome com pelo menos 3 caracteres!";
        erroFormulario.hidden = false;
        nomeJogador.focus();
        return;
    }

    // VALIDAÇÃO DO DESAFIO
    if (desafio === "") {
        erroFormulario.textContent = "Escolha um desafio para continuar!";
        erroFormulario.hidden = false;
        desafioJogador.focus();
        return;
    }

    // MENSAGEM PERSONALIZADA
    mensagemJogador.textContent = `🏀 Boa sorte, ${nome}! Prepare-se para entrar em quadra!`;
    mensagemJogador.hidden = false;

    // DIRECIONAR PARA O DESAFIO ESCOLHIDO
    const botoes = {
        quiz: "btn-quiz",
        duelo: "btn-duelo",
        memory: "btn-abrir-memory"
    };

    const botao = document.getElementById(botoes[desafio]);

    if (botao) {
        botao.click();
    }
});
