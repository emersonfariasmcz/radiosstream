// Variáveis Globais
let dados = [];
const cardContainer = document.querySelector("#results-container");
const audioTag = document.getElementById('audio-tag');
const playBtnIcon = document.getElementById('icon-play');
const statusTag = document.getElementById('status-indicator');
const equalizer = document.getElementById('equalizer');

// Elementos visuais do Player
const playerImg = document.getElementById('player-logo');
const playerNome = document.getElementById('player-nome');
const playerCidade = document.getElementById('player-cidade');

// Inicialização
async function carregarDados() {
    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
        
        // Renderiza tudo inicialmente
        renderizarCards(dados);
        
        // Se houver rádios, carrega a primeira no player (sem tocar)
        if(dados.length > 0) {
            prepararPlayer(dados[0]);
        }
    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
        cardContainer.innerHTML = "<p>Erro ao carregar as rádios.</p>";
    }
}

// Função de Busca
function iniciarBusca() {
    let input = document.querySelector("#campo-pesquisa").value.toLowerCase();
    
    let resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(input) || 
        dado.descricao.toLowerCase().includes(input) ||
        dado.cidade.toLowerCase().includes(input)
    );
    
    renderizarCards(resultados);
}

// Renderiza a lista de cards
function renderizarCards(lista) {
    cardContainer.innerHTML = "";

    if (lista.length === 0) {
        cardContainer.innerHTML = "<p>Nenhuma rádio encontrada.</p>";
        return;
    }

    lista.forEach(radio => {
        let card = document.createElement("article");
        card.classList.add("card");
        
        // Ao clicar no card, chama a função para tocar a rádio
        card.onclick = () => tocarRadio(radio);

        card.innerHTML = `
            <img src="${radio.logo}" alt="${radio.nome}">
            <h2>${radio.nome}</h2>
            <p>${radio.cidade}</p>
            <div class="play-hint"><i class="fas fa-play"></i> Tocar Agora</div>
        `;
        cardContainer.appendChild(card);
    });
}

// Prepara o player com os dados da rádio (apenas visual e link)
function prepararPlayer(radio) {
    playerImg.src = radio.logo;
    playerNome.innerText = radio.nome;
    playerCidade.innerText = radio.cidade;
    audioTag.src = radio.stream;
}

// Ação de Tocar uma rádio vinda da lista
function tocarRadio(radio) {
    prepararPlayer(radio);
    togglePlayPause(true); // Força o play
    
    // Scroll suave até o player
    document.getElementById('player-area').scrollIntoView({ behavior: 'smooth' });
}

// Lógica de Play/Pause
function togglePlayPause(forcePlay = false) {
    if (audioTag.paused || forcePlay) {
        let playPromise = audioTag.play();
        
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Play com sucesso
                playBtnIcon.classList.remove('fa-play');
                playBtnIcon.classList.add('fa-pause');
                statusTag.innerText = "AO VIVO";
                statusTag.classList.add('on');
                equalizer.classList.add('active');
            })
            .catch(error => {
                console.error("Erro no play:", error);
                statusTag.innerText = "ERRO";
            });
        }
    } else {
        audioTag.pause();
        playBtnIcon.classList.remove('fa-pause');
        playBtnIcon.classList.add('fa-play');
        statusTag.innerText = "PAUSADO";
        statusTag.classList.remove('on');
        equalizer.classList.remove('active');
    }
}

// Controle de Volume
function setVolume() {
    let volumeInput = document.getElementById('volume').value;
    audioTag.volume = volumeInput;
}

// Permite buscar ao apertar Enter
document.getElementById('campo-pesquisa').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        iniciarBusca();
    }
});

// Inicia tudo
carregarDados();