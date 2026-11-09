
/* =========================================
   CLUTCHZONE - QUIZ NBA
========================================= */

// ELEMENTOS DA PÁGINA

const botaoQuiz = document.getElementById("btn-quiz");
const telaQuiz = document.getElementById("quiz");
const imagemJogador = document.getElementById("imagem-jogador");
const feedback = document.getElementById("feedback-resposta");
const botoesAlternativas = document.querySelectorAll(".alternativa");
const surpresaShaq = document.getElementById("surpresa-shaq");

// =========================================
// BANCO DE PERGUNTAS
// =========================================

const perguntas = [

    // PERGUNTA 1
    {
        pergunta: "Quem é conhecido como King James?",
        alternativas: [
            "Stephen Curry",
            "LeBron James",
            "Kevin Durant",
            "Kobe Bryant"
        ],
        correta: 1,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 2
    {
        pergunta: "Qual número ficou famoso por ser utilizado por Michael Jordan no Chicago Bulls?",
        alternativas: ["24", "32", "23", "30"],
        correta: 2,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 3
    {
        pergunta: "Quantos pontos vale uma cesta feita de fora da linha de três pontos?",
        alternativas: [
            "1 ponto",
            "2 pontos",
            "3 pontos",
            "4 pontos"
        ],
        correta: 2,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 4
    {
        pergunta: "Qual dessas equipes é conhecida pelo apelido de Lakers?",
        alternativas: [
            "Boston",
            "Los Angeles",
            "Chicago",
            "Miami"
        ],
        correta: 1,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 5
    {
        pergunta: "Qual franquia da NBA é conhecida pelo apelido de Celtics?",
        alternativas: [
            "Chicago",
            "Boston",
            "Miami",
            "Phoenix"
        ],
        correta: 1,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 6
    {
        pergunta: "Quantos jogadores de cada equipe ficam em quadra durante uma partida de basquete?",
        alternativas: [
            "4 jogadores",
            "6 jogadores",
            "5 jogadores",
            "7 jogadores"
        ],
        correta: 2,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10
    },

    // PERGUNTA 7 - ADIVINHE O JOGADOR
    {
        pergunta: "ADIVINHE O JOGADOR: Quem é esse atleta?",
        alternativas: [
            "Kyrie Irving",
            "Damian Lillard",
            "Stephen Curry",
            "Ja Morant"
        ],
        correta: 2,
        nivel: "FÁCIL",
        pontos: 1,
        tempo: 10,
        imagem: "assets/images/stephen-curry.jpg"
    },

    // PERGUNTA 8
    {
        pergunta: "Qual equipe conquistou o título da NBA em 2011?",
        alternativas: [
            "Miami Heat",
            "Dallas Mavericks",
            "Los Angeles Lakers",
            "Boston Celtics"
        ],
        correta: 1,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 9
    {
        pergunta: "Qual franquia selecionou Kobe Bryant no Draft de 1996, antes de negociá-lo com os Lakers?",
        alternativas: [
            "Charlotte Hornets",
            "Philadelphia 76ers",
            "New Jersey Nets",
            "Sacramento Kings"
        ],
        correta: 0,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 10
    {
        pergunta: "Quantos títulos da NBA o Chicago Bulls conquistou até 2026?",
        alternativas: [
            "4 títulos",
            "5 títulos",
            "6 títulos",
            "7 títulos"
        ],
        correta: 2,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 11
    {
        pergunta: "Qual jogador conquistou o MVP da temporada regular em 2017?",
        alternativas: [
            "James Harden",
            "Kevin Durant",
            "Russell Westbrook",
            "Kawhi Leonard"
        ],
        correta: 2,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 12 - ADIVINHE O JOGADOR
    {
        pergunta: "ADIVINHE O JOGADOR: Quem é esse atleta?",
        alternativas: [
            "Vince Carter",
            "Paul Pierce",
            "Tracy McGrady",
            "Ray Allen"
        ],
        correta: 2,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24,
        imagem: "assets/images/tracy-mcgrady.jpg"
    },

    // PERGUNTA 13
    {
        pergunta: "Qual franquia conquistou o título da NBA em 2016, após virar uma série que estava 3 a 1 nas Finais?",
        alternativas: [
            "Golden State Warriors",
            "Cleveland Cavaliers",
            "Miami Heat",
            "San Antonio Spurs"
        ],
        correta: 1,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 14
    {
        pergunta: "Qual jogador é conhecido pelo apelido The Beard?",
        alternativas: [
            "Kyrie Irving",
            "Damian Lillard",
            "James Harden",
            "Jimmy Butler"
        ],
        correta: 2,
        nivel: "MÉDIO",
        pontos: 2,
        tempo: 24
    },

    // PERGUNTA 15
    {
        pergunta: "Qual jogador foi o primeiro a conquistar o MVP das Finais da NBA por três franquias diferentes?",
        alternativas: [
            "LeBron James",
            "Kevin Durant",
            "Kawhi Leonard",
            "Shaquille O'Neal"
        ],
        correta: 0,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 16
    {
        pergunta: "Qual franquia derrotou o Los Angeles Lakers nas Finais da NBA de 2004?",
        alternativas: [
            "San Antonio Spurs",
            "Detroit Pistons",
            "Boston Celtics",
            "Indiana Pacers"
        ],
        correta: 1,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 17
    {
        pergunta: "Qual jogador detém o recorde de mais assistências acumuladas na história da NBA?",
        alternativas: [
            "Chris Paul",
            "Magic Johnson",
            "John Stockton",
            "Steve Nash"
        ],
        correta: 2,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 18
    {
        pergunta: "Qual franquia selecionou Dirk Nowitzki no Draft de 1998, antes de negociá-lo com Dallas Mavericks?",
        alternativas: [
            "Milwaukee Bucks",
            "Phoenix Suns",
            "Dallas Mavericks",
            "Atlanta Hawks"
        ],
        correta: 0,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 19 - ADIVINHE O JOGADOR
    {
        pergunta: "ADIVINHE O JOGADOR: Quem é esse atleta?",
        alternativas: [
            "Mo Williams",
            "Daniel Gibson",
            "Delonte West",
            "Shannon Brown"
        ],
        correta: 2,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24,
        imagem: "assets/images/delonte-west.jpg"
    },

    // PERGUNTA 20
    {
        pergunta: "Qual destes jogadores ultrapassou a marca de 25 mil pontos na temporada regular da NBA até novembro de 2026?",
        alternativas: [
            "Damian Lillard",
            "Giannis Antetokounmpo",
            "Anthony Davis",
            "DeMar DeRozan"
        ],
        correta: 3,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 21
    {
        pergunta: "Qual jogador registrou 30 assistências em uma única partida da NBA, estabelecendo o recorde histórico?",
        alternativas: [
            "Magic Johnson",
            "John Stockton",
            "Scott Skiles",
            "Jason Kidd"
        ],
        correta: 2,
        nivel: "DIFÍCIL",
        pontos: 3,
        tempo: 24
    },

    // PERGUNTA 22 - CLUTCH TIME
    {
        pergunta: "🏆 CLUTCH TIME! Quantas cestas de 3 pontos Shaquille O'Neal acertou durante suas 19 temporadas na NBA?",
        alternativas: [
            "Nenhuma cesta",
            "1 cesta",
            "12 cestas",
            "34 cestas"
        ],
        correta: 1,
        nivel: "CLUTCH TIME",
        pontos: 5,
        tempo: 15
    }
];

// =========================================
// VARIÁVEIS DE CONTROLE
// =========================================

let perguntaAtual = 0;
let pontuacao = 0;
let tempoRestante = 0;
let intervaloRelogio = null;
let temporizadorAvanco = null;
let respostaBloqueada = false;

// =========================================
// INICIAR OU REINICIAR O QUIZ
// =========================================

botaoQuiz.addEventListener("click", function() {

    clearInterval(intervaloRelogio);
    clearTimeout(temporizadorAvanco);

    perguntaAtual = 0;
    pontuacao = 0;
    respostaBloqueada = false;

    telaQuiz.hidden = false;
    surpresaShaq.hidden = true;

    feedback.textContent = "";

    document.getElementById("pontuacao").textContent =
        "PLACAR: 0 PTS";

    mostrarPergunta();

    // Rola somente quando o jogador inicia o quiz
    telaQuiz.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// =========================================
// MOSTRAR PERGUNTA
// =========================================

function mostrarPergunta() {

    const questao = perguntas[perguntaAtual];

    // Ativa o visual especial nas perguntas com foto
    // Sem movimentar a página automaticamente

    telaQuiz.classList.toggle(
        "modo-jogador",
        Boolean(questao.imagem)
    );

    // ATUALIZAR PERGUNTA

    document.getElementById("texto-pergunta").textContent =
        questao.pergunta;

    // ATUALIZAR NÍVEL

    document.getElementById("nivel-quiz").textContent =
        questao.nivel === "CLUTCH TIME"
            ? "🏆 CLUTCH TIME — VALENDO 5 PONTOS!"
            : "NÍVEL " + questao.nivel;

    // ATUALIZAR NÚMERO DA PERGUNTA

    document.getElementById("numero-pergunta").textContent =
        "PERGUNTA " + (perguntaAtual + 1) +
        "/" + perguntas.length;

    // ATUALIZAR BARRA DE PROGRESSO

    document.getElementById("progresso-atual").style.width =
        ((perguntaAtual + 1) / perguntas.length * 100) + "%";

    // MOSTRAR OU ESCONDER A FOTO

    if (questao.imagem) {

        imagemJogador.src = questao.imagem;
        imagemJogador.hidden = false;

    } else {

        imagemJogador.hidden = true;
        imagemJogador.removeAttribute("src");

    }

    // ATUALIZAR ALTERNATIVAS

    botoesAlternativas.forEach(function(botao, indice) {

        // Remove o foco do botão da pergunta anterior
        botao.blur();

        // Limpa as cores
        botao.classList.remove("correta", "errada");

        // Permite novos cliques
        botao.disabled = false;

        // Atualiza o texto
        botao.textContent =
            String.fromCharCode(65 + indice) +
            ") " + questao.alternativas[indice];

    });

    iniciarRelogio();
}

// =========================================
// VERIFICAR RESPOSTA
// =========================================

function verificarResposta(indiceEscolhido) {

    if (respostaBloqueada) {
        return;
    }

    respostaBloqueada = true;

    clearInterval(intervaloRelogio);

    const questao = perguntas[perguntaAtual];

    // DESTACAR A RESPOSTA CORRETA

    botoesAlternativas[questao.correta]
        .classList.add("correta");

    // DESTACAR A RESPOSTA ERRADA

    if (
        indiceEscolhido !== questao.correta &&
        indiceEscolhido !== -1
    ) {

        botoesAlternativas[indiceEscolhido]
            .classList.add("errada");

    }

    // BLOQUEAR NOVOS CLIQUES

    botoesAlternativas.forEach(function(botao) {
        botao.disabled = true;
    });

    // MOSTRAR FEEDBACK

    if (indiceEscolhido === questao.correta) {

        pontuacao += questao.pontos;

        feedback.textContent =
            "🏀 CESTA! Resposta correta!";

        feedback.style.color = "#22c55e";

    } else if (indiceEscolhido === -1) {

        feedback.textContent =
            "⏰ SHOT CLOCK VIOLATION! TEMPO ESGOTADO!";

        feedback.style.color = "#f59e0b";

    } else {

        feedback.textContent =
            "❌ ERROU! A resposta correta era: " +
            questao.alternativas[questao.correta];

        feedback.style.color = "#ef4444";

    }

    // ATUALIZAR PONTUAÇÃO

    document.getElementById("pontuacao").textContent =
        "PLACAR: " + pontuacao + " PTS";

    // VERIFICAR ÚLTIMA PERGUNTA

    const ultimaPergunta =
        perguntaAtual === perguntas.length - 1;

    if (ultimaPergunta) {
        surpresaShaq.hidden = false;
    }

    // AVANÇAR PARA A PRÓXIMA PERGUNTA

    temporizadorAvanco = setTimeout(function() {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            respostaBloqueada = false;
            feedback.textContent = "";

            mostrarPergunta();

        } else {

            telaQuiz.classList.remove("modo-jogador");

            feedback.textContent =
                "🏆 FIM DO QUIZ! Pontuação final: " +
                pontuacao + " pontos!";

            feedback.style.color = "#f59e0b";

        }

    }, ultimaPergunta ? 4000 : 1200);
}

// =========================================
// CLIQUES NAS ALTERNATIVAS
// =========================================

botoesAlternativas.forEach(function(botao, indice) {

    botao.addEventListener("click", function() {
        verificarResposta(indice);
    });

});

// =========================================
// SHOT CLOCK
// =========================================

function iniciarRelogio() {

    clearInterval(intervaloRelogio);

    tempoRestante = perguntas[perguntaAtual].tempo;

    const relogio =
        document.getElementById("tempo-restante");

    const caixaRelogio =
        document.querySelector(".shot-clock");

    relogio.textContent = tempoRestante;

    caixaRelogio.classList.remove("urgente");

    intervaloRelogio = setInterval(function() {

        tempoRestante--;

        relogio.textContent = tempoRestante;

        // ALERTA NOS ÚLTIMOS 5 SEGUNDOS

        if (tempoRestante <= 5) {
            caixaRelogio.classList.add("urgente");
        }

        // TEMPO ESGOTADO

        if (tempoRestante <= 0) {

            clearInterval(intervaloRelogio);
            verificarResposta(-1);

        }

    }, 1000);
}

document.getElementById("fechar-shaq").addEventListener("click", function() {
    surpresaShaq.hidden = true;
});
