
/* =========================================
   CLUTCHZONE - DUELO DE JOGADORES
   15 RODADAS | 3 DIFICULDADES
========================================= */

// =========================================
// ELEMENTOS DA PÁGINA
// =========================================

const botaoDuelo = document.getElementById("btn-duelo");
const telaDuelo = document.getElementById("duelo");
const telaQuizDuelo = document.getElementById("quiz");

const rodadaDuelo = document.getElementById("rodada-duelo");
const pontuacaoDuelo = document.getElementById("pontuacao-duelo");
const perguntaDuelo = document.getElementById("pergunta-duelo");

const jogador1 = document.getElementById("jogador-1");
const jogador2 = document.getElementById("jogador-2");

const imagem1 = document.getElementById("imagem-duelo-1");
const imagem2 = document.getElementById("imagem-duelo-2");

const nome1 = document.getElementById("nome-duelo-1");
const nome2 = document.getElementById("nome-duelo-2");

const feedbackDuelo = document.getElementById("feedback-duelo");
const botaoProxima = document.getElementById("proxima-rodada");

const cardsDuelo = document.querySelector(".duelo-jogadores");

// =========================================
// BANCO DE DUELOS
// =========================================

// Os dados de 2024-25 são da temporada regular.
// As estatísticas históricas indicam seu recorte.

const duelos = [

    // =====================================
    // FÁCIL - 5 CONFRONTOS
    // =====================================

    {
        dificuldade: "facil",
        pergunta:"Quem conquistou mais MVPs das Finais da NBA até 2025?",
        unidade: "títulos",
        jogadores: [
            {
                nome: "LeBron James",
                imagem: "assets/images/lebron-james.jpg",
                valor: 4
            },
            {
                nome: "Stephen Curry",
                imagem: "assets/images/stephen-curry.jpg",
                valor: 1
            }
        ]
    },

    {
        dificuldade: "facil",
        pergunta: "Quem teve maior média de pontos na temporada 2024-25?",
        unidade: "pontos por jogo",
        jogadores: [
            {
                nome: "Anthony Edwards",
                imagem: "assets/images/anthony-edwards.jpg",
                valor: 27.6
            },
            {
                nome: "Devin Booker",
                imagem: "assets/images/devin-booker.jpg",
                valor: 25.6
            }
        ]
    },

    {
        dificuldade: "facil",
        pergunta: "Quem ganhou mais MVPs da temporada regular na carreira?",
        unidade: "MVPs",
        jogadores: [
            {
                nome: "Michael Jordan",
                imagem: "assets/images/michael-jordan.jpg",
                valor: 5
            },
            {
                nome: "Kobe Bryant",
                imagem: "assets/images/kobe-bryant.jpg",
                valor: 1
            }
        ]
    },

    {
        dificuldade: "facil",
        pergunta: "Quem teve maior média de pontos em 2024-25?",
        unidade: "pontos por jogo",
        jogadores: [
            {
                nome: "Shai Gilgeous-Alexander",
                imagem: "assets/images/shai-gilgeous-alexander.jpg",
                valor: 32.7
            },
            {
                nome: "Luka Doncic",
                imagem: "assets/images/luka-doncic.jpg",
                valor: 28.2
            }
        ]
    },

    {
        dificuldade: "facil",
        pergunta: "Quem conquistou mais MVPs da temporada regular até 2024-25?",
        unidade: "MVPs",
        jogadores: [
            {
                nome: "Nikola Jokic",
                imagem: "assets/images/nikola-jokic.jpg",
                valor: 3
            },
            {
                nome: "Joel Embiid",
                imagem: "assets/images/joel-embiid.jpg",
                valor: 1
            }
        ]
    },

    // =====================================
    // MÉDIO - 6 CONFRONTOS
    // =====================================

    {
        dificuldade: "medio",
        pergunta: "Quem teve maior média de assistências em 2024-25?",
        unidade: "assistências por jogo",
        jogadores: [
            {
                nome: "Luka Doncic",
                imagem: "assets/images/luka-doncic.jpg",
                valor: 7.7
            },
            {
                nome: "Shai Gilgeous-Alexander",
                imagem: "assets/images/shai-gilgeous-alexander.jpg",
                valor: 6.4
            }
        ]
    },

    {
        dificuldade: "medio",
        pergunta: "Quem teve maior média de rebotes em 2024-25?",
        unidade: "rebotes por jogo",
        jogadores: [
            {
                nome: "Jayson Tatum",
                imagem: "assets/images/jayson-tatum.jpg",
                valor: 8.7
            },
            {
                nome: "Kevin Durant",
                imagem: "assets/images/kevin-durant.jpg",
                valor: 6.0
            }
        ]
    },

    {
        dificuldade: "medio",
        pergunta: "Quem acertou mais bolas de três por jogo em 2024-25?",
        unidade: "bolas de três por jogo",
        jogadores: [
            {
                nome: "Stephen Curry",
                imagem: "assets/images/stephen-curry.jpg",
                valor: 4.4
            },
            {
                nome: "Damian Lillard",
                imagem: "assets/images/damian-lillard.jpg",
                valor: 3.4
            }
        ]
    },

    {
        dificuldade: "medio",
        pergunta: "Quem conquistou mais títulos da NBA na carreira?",
        unidade: "títulos",
        jogadores: [
            {
                nome: "Shaquille O'Neal",
                imagem: "assets/images/shaquille-oneal.jpg",
                valor: 4
            },
            {
                nome: "Hakeem Olajuwon",
                imagem: "assets/images/hakeem-olajuwon.jpg",
                valor: 2
            }
        ]
    },

    {
        dificuldade: "medio",
        pergunta: "Quem fez mais triplos-duplos na temporada regular 2024-25?",
        unidade: "triplos-duplos",
        jogadores: [
            {
                nome: "Nikola Jokic",
                imagem: "assets/images/nikola-jokic.jpg",
                valor: 34
            },
            {
                nome: "Giannis Antetokounmpo",
                imagem: "assets/images/giannis-antetokounmpo.jpg",
                valor: 11
            }
        ]
    },

    {
        dificuldade: "medio",
        pergunta: "Quem conquistou mais MVPs das Finais até 2025?",
        unidade: "MVPs das Finais",
        jogadores: [
            {
                nome: "LeBron James",
                imagem: "assets/images/lebron-james.jpg",
                valor: 4
            },
            {
                nome: "Kevin Durant",
                imagem: "assets/images/kevin-durant.jpg",
                valor: 2
            }
        ]
    },

    // =====================================
    // DIFÍCIL - 4 CONFRONTOS
    // =====================================

    {
        dificuldade: "dificil",
        pergunta: "Quem acumulou mais assistências na carreira na temporada regular?",
        unidade: "assistências",
        jogadores: [
            {
                nome: "Steve Nash",
                imagem: "assets/images/steve-nash.jpg",
                valor: 10335
            },
            {
                nome: "Magic Johnson",
                imagem: "assets/images/magic-johnson.jpg",
                valor: 10141
            }
        ]
    },

    {
        dificuldade: "dificil",
        pergunta: "Quem marcou mais pontos na carreira na temporada regular?",
        unidade: "pontos",
        jogadores: [
            {
                nome: "Dirk Nowitzki",
                imagem: "assets/images/dirk-nowitzki.jpg",
                valor: 31560
            },
            {
                nome: "Carmelo Anthony",
                imagem: "assets/images/carmelo-anthony.jpg",
                valor: 28289
            }
        ]
    },

    {
        dificuldade: "dificil",
        pergunta: "Quem teve maior média de pontos na carreira nos playoffs?",
        unidade: "pontos por jogo nos playoffs",
        jogadores: [
            {
                nome: "Michael Jordan",
                imagem: "assets/images/michael-jordan.jpg",
                valor: 33.4
            },
            {
                nome: "Kobe Bryant",
                imagem: "assets/images/kobe-bryant.jpg",
                valor: 25.6
            }
        ]
    },

    {
        dificuldade: "dificil",
        pergunta: "🏆 CLUTCH DUEL! Quem marcou mais pontos em uma única partida da NBA?",
        unidade: "pontos em uma partida",
        jogadores: [
            {
                nome: "Wilt Chamberlain",
                imagem: "assets/images/wilt-chamberlain.jpg",
                valor: 100
            },
            {
                nome: "Kobe Bryant",
                imagem: "assets/images/kobe-bryant.jpg",
                valor: 81
            }
        ]
    }

];

// =========================================
// CONTROLE DO JOGO
// =========================================

let rodadaAtualDuelo = 0;
let pontosDuelo = 0;
let respostaDueloBloqueada = false;

let duelosPartida = [];
let jogadoresRodada = [];

// =========================================
// EMBARALHAR UMA LISTA
// =========================================

function embaralharLista(lista) {

    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        const indiceAleatorio =
            Math.floor(Math.random() * (i + 1));

        [copia[i], copia[indiceAleatorio]] =
            [copia[indiceAleatorio], copia[i]];
    }

    return copia;
}

// =========================================
// PREPARAR AS 15 RODADAS
// =========================================

function prepararDuelos() {

    const faceis = duelos.filter(function(duelo) {
        return duelo.dificuldade === "facil";
    });

    const medios = duelos.filter(function(duelo) {
        return duelo.dificuldade === "medio";
    });

    const dificeis = duelos.filter(function(duelo) {
        return duelo.dificuldade === "dificil";
    });

    // Embaralha dentro de cada dificuldade

    duelosPartida = [
        ...embaralharLista(faceis),
        ...embaralharLista(medios),
        ...embaralharLista(dificeis)
    ];
}

// =========================================
// INICIAR O DUELO
// =========================================

function iniciarDuelo() {

    rodadaAtualDuelo = 0;
    pontosDuelo = 0;
    respostaDueloBloqueada = false;

    prepararDuelos();

    cardsDuelo.hidden = false;
    telaDuelo.hidden = false;

    mostrarDuelo();

}

botaoDuelo.addEventListener("click", function() {

    // Para os temporizadores do Quiz,
    // caso estejam disponíveis.

    if (typeof intervaloRelogio !== "undefined") {
        clearInterval(intervaloRelogio);
    }

    if (typeof temporizadorAvanco !== "undefined") {
        clearTimeout(temporizadorAvanco);
    }

    telaQuizDuelo.hidden = true;

    iniciarDuelo();

    telaDuelo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

// Se abrir o Quiz, esconde o Duelo.

const botaoAbrirQuizDuelo =
    document.getElementById("btn-quiz");

if (botaoAbrirQuizDuelo) {

    botaoAbrirQuizDuelo.addEventListener("click", function() {
        telaDuelo.hidden = true;
    });

}

// =========================================
// IDENTIFICAR A DIFICULDADE
// =========================================

function obterDificuldade(dificuldade) {

    if (dificuldade === "facil") {
        return {
            nome: "🟢 FÁCIL",
            cor: "#22c55e"
        };
    }

    if (dificuldade === "medio") {
        return {
            nome: "🟡 MÉDIO",
            cor: "#eab308"
        };
    }

    return {
        nome: "🔴 DIFÍCIL",
        cor: "#ef4444"
    };
}

// =========================================
// MOSTRAR RODADA
// =========================================

function mostrarDuelo() {

    const duelo = duelosPartida[rodadaAtualDuelo];

    const dificuldade =
        obterDificuldade(duelo.dificuldade);

    // Embaralha os dois jogadores.
    // Isso acontece a cada nova rodada.

    jogadoresRodada =
        embaralharLista(duelo.jogadores);

    rodadaDuelo.textContent =
        "RODADA " + (rodadaAtualDuelo + 1) +
        "/" + duelosPartida.length +
        " | " + dificuldade.nome;

    rodadaDuelo.style.color = dificuldade.cor;

    pontuacaoDuelo.textContent =
        "PLACAR: " + pontosDuelo + " PTS";

    perguntaDuelo.textContent = duelo.pergunta;

    // JOGADOR DA ESQUERDA

    nome1.textContent = jogadoresRodada[0].nome;

    imagem1.src = jogadoresRodada[0].imagem;
    imagem1.alt = jogadoresRodada[0].nome;

    // JOGADOR DA DIREITA

    nome2.textContent = jogadoresRodada[1].nome;

    imagem2.src = jogadoresRodada[1].imagem;
    imagem2.alt = jogadoresRodada[1].nome;

    // LIMPAR RODADA ANTERIOR

    jogador1.classList.remove("correto", "errado");
    jogador2.classList.remove("correto", "errado");

    jogador1.disabled = false;
    jogador2.disabled = false;

    feedbackDuelo.textContent = "";
    feedbackDuelo.style.color = "";

    botaoProxima.hidden = true;

    respostaDueloBloqueada = false;

}

// =========================================
// FORMATAR NÚMEROS
// =========================================

function formatarNumeroDuelo(numero) {

    return numero.toLocaleString("pt-BR", {
        maximumFractionDigits: 2
    });

}

// =========================================
// VERIFICAR A RESPOSTA
// =========================================

function verificarDuelo(escolha) {

    if (respostaDueloBloqueada) {
        return;
    }

    respostaDueloBloqueada = true;

    const duelo = duelosPartida[rodadaAtualDuelo];

    const botoes = [jogador1, jogador2];

    // Descobre quem tem o maior valor.
    // Não depende da posição na tela.

    const valor1 = jogadoresRodada[0].valor;
    const valor2 = jogadoresRodada[1].valor;

    const indiceCorreto =
        valor1 > valor2 ? 0 : 1;

    const acertou = escolha === indiceCorreto;

    // DESTACAR JOGADORES

    botoes[indiceCorreto].classList.add("correto");

    if (!acertou) {
        botoes[escolha].classList.add("errado");
    }

    // BLOQUEAR NOVOS CLIQUES

    jogador1.disabled = true;
    jogador2.disabled = true;

    // ATUALIZAR PONTOS

    if (acertou) {
        pontosDuelo += 100;
    }

    pontuacaoDuelo.textContent =
        "PLACAR: " + pontosDuelo + " PTS";

    // REVELAR ESTATÍSTICAS

    const estatistica1 =
        jogadoresRodada[0].nome + ": " +
        formatarNumeroDuelo(valor1) +
        " " + duelo.unidade;

    const estatistica2 =
        jogadoresRodada[1].nome + ": " +
        formatarNumeroDuelo(valor2) +
        " " + duelo.unidade;

    if (acertou) {

        feedbackDuelo.style.color = "#22c55e";

        feedbackDuelo.textContent =
            "🏀 CESTA! +100 PTS! " +
            estatistica1 + " | " + estatistica2;

    } else {

        feedbackDuelo.style.color = "#ef4444";

        feedbackDuelo.textContent =
            "❌ NÃO FOI DESSA VEZ! " +
            estatistica1 + " | " + estatistica2;

    }

    // BOTÃO DE AVANÇAR

    botaoProxima.hidden = false;

    if (rodadaAtualDuelo === duelosPartida.length - 1) {

        botaoProxima.textContent = "VER RESULTADO";

    } else {

        botaoProxima.textContent = "PRÓXIMA RODADA";

    }

}

// =========================================
// CLIQUES NOS JOGADORES
// =========================================

jogador1.addEventListener("click", function() {
    verificarDuelo(0);
});

jogador2.addEventListener("click", function() {
    verificarDuelo(1);
});

// =========================================
// PRÓXIMA RODADA / REINICIAR
// =========================================

botaoProxima.addEventListener("click", function() {

    // Se terminou, começa nova partida.

    if (rodadaAtualDuelo >= duelosPartida.length) {

        iniciarDuelo();
        return;

    }

    rodadaAtualDuelo++;

    if (rodadaAtualDuelo < duelosPartida.length) {

        mostrarDuelo();

    } else {

        finalizarDuelo();

    }

});

// =========================================
// RESULTADO FINAL
// =========================================

function finalizarDuelo() {

    const acertos = pontosDuelo / 100;

    let classificacao = "";
    let mensagem = "";

    if (acertos <= 5) {

        classificacao = "ROOKIE 🏀";
        mensagem = "Continue treinando seu conhecimento sobre a NBA!";

    } else if (acertos <= 11) {

        classificacao = "ALL-STAR ⭐";
        mensagem = "Mandou bem! Você conhece bastante de basquete!";

    } else {

        classificacao = "MVP 🏆";
        mensagem = "DOMINOU A QUADRA! Você é uma lenda do CLUTCHZONE!";

    }

    rodadaDuelo.textContent = "DUELO FINALIZADO";

    rodadaDuelo.style.color = "#f28c28";

    perguntaDuelo.textContent =
        "🏆 FIM DO DUELO!";

    cardsDuelo.hidden = true;

    feedbackDuelo.style.color = "#f28c28";

    feedbackDuelo.textContent =
        "Você acertou " + acertos +
        " de 15 duelos e marcou " +
        pontosDuelo + " de 1500 pontos! " +
        "Classificação: " + classificacao +
        ". " + mensagem;

    botaoProxima.textContent = "JOGAR NOVAMENTE";
    botaoProxima.hidden = false;

}
