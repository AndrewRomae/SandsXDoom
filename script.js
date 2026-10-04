/**
 * SANDS X DOOM (SxD) - REFORMULATED ENGINE (OPÇÃO 2: RAIZ DO PROJETO)
 * Fonte de Lore: Bíblia Audiovisual de Sands X Doom
 */

const CHARACTERS_DATA = {
    ivo: {
        name: "Ivo",
        subtitle: "O Protagonista",
        image: "ivo.png",
        sections: [
            {
                title: "Descrição Narrativa & Lore",
                content: "Ivo é o protagonista do jogo, personagem no qual o jogador controla. Desde bebê, Ivo esconde seu rosto com alguma coisa."
            },
            {
                title: "Características Físicas",
                list: [
                    "11 anos",
                    "Possui cabelo longo",
                    "Pele bronzeada",
                    "Possui trejeitos de felino"
                ]
            },
            {
                title: "Mecânica em Jogo",
                list: [
                    "Ao apertar E, Ivo usa de ampulhetas para inverter sua gravidade.",
                    "Ao apertar C, Ivo solta um miado aleatório."
                ]
            }
        ]
    },
    sentinela: {
        name: "Sentinela",
        subtitle: "Apelido: Alarminho",
        image: "sentinela.png",
        sections: [
            {
                title: "Descrição Narrativa",
                content: "Alarminho é um apelido dado por Ivo aos sentinelas com base em sua função. Sentinelas são crocodilos anões medrosos e paranoicos, que entram em desespero gritando com qualquer coisa. Além disso, são alarmes de segurança biológicos da Pirâmide."
            },
            {
                title: "Mecânica em Jogo",
                content: "Quando Ivo se aproxima de um sentinela, ele grita, ativando o bloco de flecha mais próximo, fazendo-o disparar uma flecha."
            }
        ]
    },
    nadia: {
        name: "Nadia",
        subtitle: "Habitante dos Jarros",
        image: "nadia.png",
        sections: [
            {
                title: "Descrição Narrativa",
                content: "Nadias são cobras com sérios problemas de controle emocional e impaciência. Vivem em jarros e a coisa que mais detestam é serem acordadas ou terem sua privacidade violada."
            },
            {
                title: "Mecânica em Jogo",
                content: "Quando Ivo encosta em um jarro e pressiona a tecla Q, ele abre o jarro, fazendo a Nadia que estava lá dentro sair e subir em linha reta verticalmente. Quando a Nadia encosta em um bloco, ela o racha com seu veneno, fazendo-o poder ser destruído com uma flecha de blocos de flecha."
            }
        ]
    },
    prisma: {
        name: "Prisma",
        subtitle: "Espelhos-Escaravelhos",
        image: "prisma.png",
        sections: [
            {
                title: "Descrição Narrativa",
                content: "Prismas são Espelhos-Escaravelhos, basicamente besouros com espelhos nos lugares das asas. Estão sempre parados sonhando e imaginando um futuro melhor, mas nunca concretizam nenhum de seus sonhos, talvez pelo peso em suas costas…"
            },
            {
                title: "Mecânica em Jogo",
                content: "Sempre que uma flecha encosta em algum de seus espelhos, ela é refletida."
            }
        ]
    },
    mumias: {
        name: "Múmias",
        subtitle: "Habitantes das Paredes",
        image: "mumias.png",
        sections: [
            {
                title: "Descrição Narrativa",
                content: "São seres tão tímidos que vivem constantemente dentro das paredes, mas estão sempre dispostos para um abraço. Pena que devido às suas más habilidades sociais, quase sempre resulta em velório - o que não é novidade para elas."
            },
            {
                title: "Mecânica em Jogo",
                content: "Múmias são basicamente os espinhos de SxD, são obstáculos que se Ivo encostar, morre."
            }
        ]
    },
    imogen: {
        name: "Imogen",
        subtitle: "Avó de Ivo",
        image: "imogen.png",
        sections: [
            {
                title: "Papel na História",
                content: "Ela é a peça central do jogo. Ivo entra na Pirâmide por conta dela."
            },
            {
                title: "Características Físicas",
                list: [
                    "Possui mais de 67 anos",
                    "Usa uma caixa com rosto de falcão, similar à de Ivo",
                    "Usa óculos redondos",
                    "Possui cabelos brancos e de tamanho mediano"
                ]
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initCharacterSystem();
});

function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }
}

function initCharacterSystem() {
    const thumbs = document.querySelectorAll(".thumb-btn");
    const displayContainer = document.getElementById("characterDisplay");

    renderCharacter("ivo", displayContainer);

    thumbs.forEach(btn => {
        btn.addEventListener("click", () => {
            thumbs.forEach(t => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });

            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");

            const charKey = btn.getAttribute("data-char");
            renderCharacter(charKey, displayContainer);
        });
    });
}

function renderCharacter(key, container) {
    const char = CHARACTERS_DATA[key];
    if (!char) return;

    container.style.opacity = "0";

    setTimeout(() => {
        let sectionsHTML = "";

        char.sections.forEach(sec => {
            sectionsHTML += `<div class="char-section-block">
                <h4>${sec.title}</h4>`;
            
            if (sec.content) {
                sectionsHTML += `<p>${sec.content}</p>`;
            }

            if (sec.list && sec.list.length > 0) {
                sectionsHTML += `<ul>`;
                sec.list.forEach(item => {
                    sectionsHTML += `<li>${item}</li>`;
                });
                sectionsHTML += `</ul>`;
            }

            sectionsHTML += `</div>`;
        });

        container.innerHTML = `
            <div class="char-portrait-box">
                <img src="${char.image}" alt="${char.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'color:#a09283; font-size:0.8rem; text-align:center;\\'>[ Sprite: ${char.name} ]</div>';">
            </div>
            <div class="char-details">
                <div class="char-header">
                    <h3>${char.name}</h3>
                    <span class="char-subtitle">${char.subtitle}</span>
                </div>
                ${sectionsHTML}
            </div>
        `;

        container.style.opacity = "1";
    }, 150);
}