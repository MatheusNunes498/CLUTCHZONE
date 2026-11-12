
/* CLUTCHZONE - TOP 20 PONTUADORES DA NBA */
/* Pontos da temporada regular - referência: 12/11/2026 */

const maioresPontuadores = [
    {
        nome: "LeBron James",
        imagem: "assets/images/lebron.png",
        pontos: 43591,
        descricao: "Maior pontuador da história da NBA. Conquistou quatro títulos e se destacou pela longevidade, força e versatilidade."
    },
    {
        nome: "Kareem Abdul-Jabbar",
        imagem: "assets/images/kareem.png",
        pontos: 38387,
        descricao: "Conquistou seis títulos da NBA e ficou famoso pelo seu arremesso praticamente indefensável, o skyhook."
    },
    {
        nome: "Karl Malone",
        imagem: "assets/images/malone.png",
        pontos: 36928,
        descricao: "Ídolo do Utah Jazz, ficou conhecido pela força, regularidade e parceria com John Stockton."
    },
    {
        nome: "Kobe Bryant",
        imagem: "assets/images/kobe.png",
        pontos: 33643,
        descricao: "Lenda do Los Angeles Lakers, conquistou cinco títulos e ficou conhecido pela Mamba Mentality."
    },
    {
        nome: "Kevin Durant",
        imagem: "assets/images/durant.png",
        pontos: 32828,
        descricao: "Um dos maiores pontuadores de sua geração, conhecido pela altura, precisão e capacidade de arremessar de qualquer distância."
    },
    {
        nome: "Michael Jordan",
        imagem: "assets/images/jordan.jpg",
        pontos: 32292,
        descricao: "Ícone do Chicago Bulls, conquistou seis títulos da NBA e cinco prêmios de MVP."
    },
    {
        nome: "Dirk Nowitzki",
        imagem: "assets/images/dirk.jpg",
        pontos: 31560,
        descricao: "Lenda do Dallas Mavericks, revolucionou a posição de ala-pivô com seus arremessos e conquistou o título de 2011."
    },
    {
        nome: "Wilt Chamberlain",
        imagem: "assets/images/wilt.jpg",
        pontos: 31419,
        descricao: "Um dos jogadores mais dominantes da história, famoso por marcar 100 pontos em uma única partida."
    },
    {
        nome: "James Harden",
        imagem: "assets/images/harden.jpg",
        pontos: 29507,
        descricao: "Conhecido pelo step-back de três pontos, habilidade ofensiva e temporadas de pontuação impressionantes."
    },
    {
        nome: "Shaquille O'Neal",
        imagem: "assets/images/shaq.jpg",
        pontos: 28596,
        descricao: "Um dos pivôs mais dominantes da NBA, conquistou quatro títulos com sua força e presença no garrafão."
    },
    {
        nome: "Carmelo Anthony",
        imagem: "assets/images/carmelo.jpg",
        pontos: 28289,
        descricao: "Um dos grandes especialistas em pontuação da NBA, com destaque por Denver Nuggets e New York Knicks."
    },
    {
        nome: "Moses Malone",
        imagem: "assets/images/moses.jpg",
        pontos: 27409,
        descricao: "Pivô histórico, três vezes MVP da NBA e campeão pelo Philadelphia 76ers em 1983."
    },
    {
        nome: "Elvin Hayes",
        imagem: "assets/images/hayes.jpg",
        pontos: 27313,
        descricao: "Grande ala-pivô da história, conhecido pela regularidade e pelo título conquistado com Washington em 1978."
    },
    {
        nome: "Russell Westbrook",
        imagem: "assets/images/westbrook.jpg",
        pontos: 27176,
        descricao: "Armador explosivo, MVP em 2017 e recordista de triplos-duplos na NBA."
    },
    {
        nome: "Hakeem Olajuwon",
        imagem: "assets/images/hakeem.jpg",
        pontos: 26946,
        descricao: "Lenda do Houston Rockets, bicampeão da NBA e conhecido pelos movimentos de pés chamados Dream Shake."
    },
    {
        nome: "Stephen Curry",
        imagem: "assets/images/curry.jpg",
        pontos: 26803,
        descricao: "Revolucionou o basquete com seus arremessos de três pontos e conquistou quatro títulos com o Golden State Warriors."
    },
    {
        nome: "DeMar DeRozan",
        imagem: "assets/images/derozan.jpg",
        pontos: 26793,
        descricao: "Conhecido pela habilidade nos arremessos de média distância e pela consistência ofensiva."
    },
    {
        nome: "Oscar Robertson",
        imagem: "assets/images/oscar.jpg",
        pontos: 26710,
        descricao: "Conhecido como Big O, foi um dos primeiros jogadores a registrar média de triplo-duplo em uma temporada."
    },
    {
        nome: "Dominique Wilkins",
        imagem: "assets/images/dominique.jpg",
        pontos: 26668,
        descricao: "Lenda do Atlanta Hawks, conhecido como Human Highlight Film por suas enterradas espetaculares."
    },
    {
        nome: "Tim Duncan",
        imagem: "assets/images/duncan.jpg",
        pontos: 26496,
        descricao: "Ídolo do San Antonio Spurs, conquistou cinco títulos da NBA e ficou conhecido pela eficiência e fundamentos."
    }
];

// Seleciona a área do ranking no HTML
const rankingLista = document.getElementById("ranking-lista");

// Organiza os jogadores pela pontuação
maioresPontuadores.sort((a, b) => b.pontos - a.pontos);

// Cria os cards automaticamente
maioresPontuadores.forEach((jogador, indice) => {

    const card = document.createElement("div");
    card.classList.add("ranking-card");

    if (indice < 3) {
        card.classList.add("ranking-destaque");
    }

    const botao = document.createElement("button");
    botao.type = "button";
    botao.classList.add("ranking-botao");

    const posicao = document.createElement("span");
    posicao.classList.add("ranking-posicao");
    posicao.textContent = `#${indice + 1}`;

     const foto = document.createElement("img");
     foto.classList.add("ranking-foto");
    foto.src = jogador.imagem;
    foto.alt = "Foto de " + jogador.nome;
    foto.loading = "lazy";

    const nome = document.createElement("span");
    nome.classList.add("ranking-nome");
    nome.textContent = jogador.nome;

    const pontos = document.createElement("span");
    pontos.classList.add("ranking-pontos");
    pontos.textContent =
        jogador.pontos.toLocaleString("pt-BR") + " PTS";

    const descricao = document.createElement("p");
    descricao.classList.add("ranking-descricao");
    descricao.textContent = jogador.descricao;
    descricao.hidden = true;

    botao.appendChild(posicao);
    botao.appendChild(foto);
    botao.appendChild(nome);
    botao.appendChild(pontos);

    // Mostra ou esconde a descrição ao clicar
    botao.addEventListener("click", function () {
        descricao.hidden = !descricao.hidden;
        botao.setAttribute(
            "aria-expanded",
            String(!descricao.hidden)
        );
    });

    botao.setAttribute("aria-expanded", "false");

    card.appendChild(botao);
    card.appendChild(descricao);

    rankingLista.appendChild(card);
});

// ABRIR E FECHAR O RANKING COMPLETO

const botaoRanking = document.getElementById("toggle-ranking");

botaoRanking.addEventListener("click", function () {

    const rankingAberto = !rankingLista.hidden;

    rankingLista.hidden = rankingAberto;

    botaoRanking.textContent = rankingAberto
        ? "Ver ranking completo ▼"
        : "Fechar ranking ▲";

    botaoRanking.setAttribute(
        "aria-expanded",
        String(!rankingAberto)
    );

});
