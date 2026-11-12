
/* =====================================
   CLUTCHZONE - NBA MEMORY
===================================== */

// ABRIR NBA MEMORY
const btnAbrirMemory = document.getElementById("btn-abrir-memory");
const secaoMemory = document.getElementById("memory");

btnAbrirMemory.addEventListener("click", function() {

     // Para o cronômetro e o avanço automático do Quiz
clearInterval(intervaloRelogio);
clearTimeout(temporizadorAvanco);

// Esconde o Quiz
document.getElementById("quiz").hidden = true;

    document.getElementById("duelo").hidden = true;

    // Reinicia a tela ao entrar no Memory
    sairMemory();

    secaoMemory.hidden = false;

    secaoMemory.scrollIntoView({
        behavior: "smooth"
    });
});


// =====================================
// TIMES POR DIFICULDADE
// =====================================

// FÁCIL - EQUIPES POPULARES
const timesFacil = [
    { nome: "Lakers", id: "lal" },
    { nome: "Warriors", id: "gs" },
    { nome: "Bulls", id: "chi" },
    { nome: "Celtics", id: "bos" },
    { nome: "Heat", id: "mia" },
    { nome: "Knicks", id: "ny" },
    { nome: "Cavaliers", id: "cle" },
    { nome: "Spurs", id: "sa" },
    { nome: "Mavericks", id: "dal" },
    { nome: "76ers", id: "phi" }
];

// MÉDIO - OUTRAS FRANQUIAS
const timesMedio = [
    { nome: "Magic", id: "orl" },
    { nome: "Kings", id: "sac" },
    { nome: "Grizzlies", id: "mem" },
    { nome: "Timberwolves", id: "min" },
    { nome: "Pacers", id: "ind" },
    { nome: "Pelicans", id: "no" },
    { nome: "Suns", id: "phx" },
    { nome: "Trail Blazers", id: "por" },
    { nome: "Jazz", id: "utah" },
    { nome: "Hawks", id: "atl" },
    { nome: "Pistons", id: "det" },
    { nome: "Hornets", id: "cha" }
];

// DIFÍCIL - ESCUDOS HISTÓRICOS
const timesDificil = [
    {
        nome: "Vancouver Grizzlies",
        imagem: "logos-antigos/grizzlies-antigo.png"
    },
    {
        nome: "Charlotte Hornets",
        imagem: "logos-antigos/hornets-antigo.png"
    },
    {
        nome: "New Jersey Nets",
        imagem: "logos-antigos/nets-antigo.png"
    },
    {
        nome: "Denver Nuggets",
        imagem: "logos-antigos/nuggets-antigo.png"
    },
    {
        nome: "Toronto Raptors",
        imagem: "logos-antigos/raptors-antigo.png"
    },
    {
        nome: "Philadelphia 76ers",
        imagem: "logos-antigos/sixers-antigo.png"
    },
    {
        nome: "Seattle SuperSonics",
        imagem: "logos-antigos/sonics.png"
    },
    {
        nome: "Golden State Warriors",
        imagem: "logos-antigos/warriors-antigo.png"
    }
];


// =====================================
// ELEMENTOS DO HTML
// =====================================

const menuMemory = document.getElementById("memory-menu");
const jogoMemory = document.getElementById("memory-jogo");
const tabuleiroMemory = document.getElementById("memory-tabuleiro");
const resultadoMemory = document.getElementById("memory-resultado");

const tempoMemory = document.getElementById("memory-tempo");
const tentativasMemory = document.getElementById("memory-tentativas");
const paresMemory = document.getElementById("memory-pares");


// =====================================
// VARIÁVEIS DO JOGO
// =====================================

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;

let tentativas = 0;
let paresEncontrados = 0;
let totalPares = 0;

let segundos = 0;
let cronometro = null;
let timeoutMemory = null;

let dificuldadeAtual = 4;


// =====================================
// BOTÕES DE DIFICULDADE
// =====================================

document.getElementById("memory-facil").onclick = function() {
    iniciarMemory(4);
};

document.getElementById("memory-medio").onclick = function() {
    iniciarMemory(6);
};

document.getElementById("memory-dificil").onclick = function() {
    iniciarMemory(8);
};


// =====================================
// EMBARALHAR CARTAS
// =====================================

function embaralharMemory(lista) {

    const embaralhada = [...lista];

    for (let i = embaralhada.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [embaralhada[i], embaralhada[j]] =
            [embaralhada[j], embaralhada[i]];
    }

    return embaralhada;
}


// =====================================
// INICIAR PARTIDA
// =====================================

function iniciarMemory(quantidadePares) {

    clearInterval(cronometro);
    clearTimeout(timeoutMemory);

    dificuldadeAtual = quantidadePares;
    totalPares = quantidadePares;

    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;

    tentativas = 0;
    paresEncontrados = 0;
    segundos = 0;

    tempoMemory.textContent = "TEMPO: 00:00";
    tentativasMemory.textContent = "TENTATIVAS: 0";
    paresMemory.textContent = `PARES: 0/${totalPares}`;

    menuMemory.hidden = true;
    resultadoMemory.hidden = true;
    jogoMemory.hidden = false;

    // ESCOLHER GRUPO DE TIMES
    let grupoTimes;

    if (quantidadePares === 4) {
        grupoTimes = timesFacil;
    } else if (quantidadePares === 6) {
        grupoTimes = timesMedio;
    } else {
        grupoTimes = timesDificil;
    }

    // SORTEAR EQUIPES
    const selecionados = embaralharMemory(grupoTimes)
        .slice(0, quantidadePares);

    // DUPLICAR E EMBARALHAR
    const cartas = embaralharMemory([
        ...selecionados,
        ...selecionados
    ]);

    tabuleiroMemory.innerHTML = "";

    cartas.forEach(function(time) {

        const carta = document.createElement("button");

        carta.type = "button";
        carta.className = "memory-carta";
        carta.dataset.time = time.nome;
        carta.textContent = "?";

        carta.setAttribute(
            "aria-label",
            "Carta virada para baixo"
        );

        carta.addEventListener("click", function() {
            virarCarta(carta, time);
        });

        tabuleiroMemory.appendChild(carta);
    });

    cronometro = setInterval(function() {

        segundos++;

        tempoMemory.textContent =
            "TEMPO: " + formatarTempo(segundos);

    }, 1000);
}


// =====================================
// VIRAR CARTAS
// =====================================

function virarCarta(carta, time) {

    if (
        bloqueado ||
        carta.classList.contains("virada") ||
        carta.classList.contains("encontrada")
    ) {
        return;
    }

    carta.classList.add("virada");
    carta.innerHTML = "";

    const imagem = document.createElement("img");

    // ESCUDOS HISTÓRICOS OU ATUAIS
    if (time.imagem) {

        imagem.src = time.imagem;

    } else {

        imagem.src =
            `https://a.espncdn.com/i/teamlogos/nba/500/${time.id}.png`;
    }

    imagem.alt = time.nome;

    carta.appendChild(imagem);

    if (primeiraCarta === null) {

        primeiraCarta = carta;
        return;
    }

    segundaCarta = carta;
    tentativas++;

    tentativasMemory.textContent =
        "TENTATIVAS: " + tentativas;

    if (
        primeiraCarta.dataset.time ===
        segundaCarta.dataset.time
    ) {

        primeiraCarta.classList.add("encontrada");
        segundaCarta.classList.add("encontrada");

        paresEncontrados++;

        paresMemory.textContent =
            `PARES: ${paresEncontrados}/${totalPares}`;

        primeiraCarta = null;
        segundaCarta = null;

        if (paresEncontrados === totalPares) {
            finalizarMemory();
        }

    } else {

        bloqueado = true;

        const carta1 = primeiraCarta;
        const carta2 = segundaCarta;

        timeoutMemory = setTimeout(function() {

            carta1.classList.remove("virada");
            carta2.classList.remove("virada");

            carta1.textContent = "?";
            carta2.textContent = "?";

            primeiraCarta = null;
            segundaCarta = null;
            bloqueado = false;

            timeoutMemory = null;

        }, 1000);
    }
}


// =====================================
// FORMATAR CRONÔMETRO
// =====================================

function formatarTempo(totalSegundos) {

    const minutos = Math.floor(totalSegundos / 60);
    const seg = totalSegundos % 60;

    return String(minutos).padStart(2, "0") +
        ":" + String(seg).padStart(2, "0");
}


// =====================================
// FINALIZAR PARTIDA
// =====================================

function finalizarMemory() {

    clearInterval(cronometro);

    jogoMemory.hidden = true;
    resultadoMemory.hidden = false;

    document.getElementById("memory-resultado-tempo")
        .textContent =
        "TEMPO: " + formatarTempo(segundos);

    document.getElementById("memory-resultado-tentativas")
        .textContent =
        "TENTATIVAS: " + tentativas;
}


// =====================================
// SAIR DO MEMORY
// =====================================

function sairMemory() {

    clearInterval(cronometro);
    clearTimeout(timeoutMemory);

    cronometro = null;
    timeoutMemory = null;

    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;

    jogoMemory.hidden = true;
    resultadoMemory.hidden = true;
    menuMemory.hidden = false;

    tabuleiroMemory.innerHTML = "";
}


// =====================================
// REINICIAR E JOGAR NOVAMENTE
// =====================================

document.getElementById("memory-reiniciar").onclick = function() {
    iniciarMemory(dificuldadeAtual);
};

document.getElementById("memory-jogar-novamente").onclick = function() {
    sairMemory();
};
