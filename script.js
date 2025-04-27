const games = [
     // Jogo em Destaque (único com featured: true)
     { id: "0ad", title: "0 A.D.", description: "Jogo histórico de estratégia em tempo real (RTS), gratuito e open-source, focado em guerras antigas e construção de impérios. Desenvolvido pela Wildfire Games, oferece jogabilidade profunda (500 a.C. a 1 a.C.).", imageUrl: "https://play0ad.com/wp-content/uploads/2018/05/Kushcitycenter1-1.jpg", linkUrl: "https://play0ad.com/", platforms: ["windows", "mac_os", "linux"], genres: ["RTS", "Histórico", "Estratégia"], featured: true },
     { id: "0ad", title: "0 A.D.", description: "Jogo histórico de estratégia em tempo real (RTS), gratuito e open-source, focado em guerras antigas e construção de impérios. Desenvolvido pela Wildfire Games, oferece jogabilidade profunda (500 a.C. a 1 a.C.).", imageUrl: "https://play0ad.com/wp-content/uploads/2018/05/Kushcitycenter1-1.jpg", linkUrl: "https://play0ad.com/", platforms: ["windows", "mac_os", "linux"], genres: ["RTS", "Histórico", "Estratégia"], featured: false },

     // --- Lista Expandida de Jogos ---
     { id: "wesnoth", title: "The Battle for Wesnoth", description: "Jogo de estratégia baseado em turnos aclamado, ambientado em alta fantasia. Possui dezenas de sagas single-player, multiplayer robusto e editor. Vasto conteúdo e comunidade ativa.", imageUrl: "https://www.wesnoth.org/images/sshots/wesnoth-1.18.0-1.jpg", linkUrl: "https://www.wesnoth.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Estratégia", "Turnos", "Fantasia"], featured: false },
     { id: "supertuxkart", title: "SuperTuxKart", description: "Divertido jogo de corrida de kart 3D arcade com mascotes open source. Vários modos, personagens, pistas, power-ups e multiplayer online. Ótimo para todas as idades.", imageUrl: "https://store-images.s-microsoft.com/image/apps.25925.13743014531495625.6f801632-fe97-4be3-8332-d1f9aa63ee54.0968cd8a-e9db-4a4e-966b-02ddcf9209d8?h=380", linkUrl: "https://supertuxkart.net/Main_Page", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Corrida", "Arcade", "Kart", "3D"], featured: false },
     { id: "luanti", title: "Luanti (Minetest)", description: "Engine de jogo voxel open-source robusta e altamente modificável (Lua API). Crie e jogue em mundos sandbox procedurais. Similar a Minecraft, mas com foco em extensibilidade.", imageUrl: "https://www.luanti.org/media/gallery/8.jpg", linkUrl: "https://www.luanti.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Sandbox", "Voxel", "Construção", "Sobrevivência", "Engine"], featured: false },
     { id: "xonotic", title: "Xonotic", description: "FPS de arena frenético e viciante, inspirado em Quake e Unreal Tournament. Jogabilidade focada em movimento ágil, vasta gama de armas e modos, totalmente livre.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Xonotic_0.8.2_rocket.jpg", linkUrl: "https://xonotic.org/", platforms: ["windows", "mac_os", "linux"], genres: ["FPS", "Arena Shooter", "Ação", "Sci-Fi"], featured: false },
     { id: "openra", title: "OpenRA", description: "Recriação moderna e open-source dos motores RTS clássicos da Westwood (C&C, Red Alert, Dune 2000). Traz melhorias de UI, multiplayer online e suporte a mods.", imageUrl: "https://www.openra.net/images/about/command-and-conquer.png", linkUrl: "https://www.openra.net/", platforms: ["windows", "mac_os", "linux"], genres: ["RTS", "Estratégia", "Clássico"], featured: false },
     { id: "openttd", title: "OpenTTD", description: "Simulador de negócios de transporte de código aberto baseado no clássico Transport Tycoon Deluxe. Construa redes de transporte (trem, estrada, aéreo, naval) e supere a concorrência.", imageUrl: "https://store-images.s-microsoft.com/image/apps.19866.13567236681264810.10813e6a-3ed1-4796-a590-c89ad82f8ad6.d1bf78a0-ed85-418f-88b5-6b580860aa6e?h=380", linkUrl: "https://www.openttd.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Simulação", "Gerenciamento", "Estratégia", "Transporte"], featured: false },
     { id: "cdda", title: "Cataclysm: DDA", description: "Roguelike de sobrevivência pós-apocalíptico incrivelmente profundo e complexo. Lute contra zumbis, mutantes e o ambiente hostil, crie itens, construa abrigos e explore um mundo vasto.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Cdda-farm-player-zombie-child.png", linkUrl: "https://cataclysmdda.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Roguelike", "Sobrevivência", "RPG", "Mundo Aberto", "Pós-apocalíptico"], featured: false },
     { id: "endlesssky", title: "Endless Sky", description: "Jogo 2D de comércio espacial, exploração e combate. Comece com uma nave simples e ganhe a vida como comerciante, caçador de recompensas, pirata ou participe de uma guerra civil.", imageUrl: "https://endless-sky.github.io/images/introduction/starting-ships.jpg", linkUrl: "https://endless-sky.github.io/", platforms: ["windows", "mac_os", "linux"], genres: ["Espacial", "Simulação", "Comércio", "Combate", "RPG", "2D"], featured: false },
     { id: "hedgewars", title: "Hedgewars", description: "Jogo de estratégia de artilharia baseado em turnos, cômico e gratuito, clone do Worms. Controle equipes de ouriços rosas e use dezenas de armas malucas para derrotar seus oponentes.", imageUrl: "https://www.hedgewars.org/files/fck_upload/image/screenshots/0_9_15-nature.png", linkUrl: "https://www.hedgewars.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Artilharia", "Estratégia", "Turnos", "Comédia", "2D"], featured: false },
     { id: "freeciv", title: "Freeciv", description: "Jogo de estratégia de construção de impérios gratuito e open-source, inspirado na série Sid Meier's Civilization. Desenvolva sua civilização da pré-história à era espacial.", imageUrl: "https://store-images.s-microsoft.com/image/apps.42035.14220611344161130.ce294571-c256-463f-877b-8c461bd30575.3ddb2de2-9dc9-4125-919d-08a0c2c27cd5?h=380", linkUrl: "http://www.freeciv.org/", platforms: ["windows", "mac_os", "linux"], genres: ["4X", "Estratégia", "Turnos", "Construção de Império"], featured: false },
     { id: "freedoom", title: "Freedoom", description: "Conteúdo livre (mapas, gráficos, música) para engines compatíveis com Doom. Permite jogar de forma totalmente livre e serve como base para mods. Não inclui a engine original.", imageUrl: "https://freedoom.github.io/img/screenshots/p1_4.png", linkUrl: "https://freedoom.github.io/", platforms: ["windows", "mac_os", "linux"], genres: ["FPS", "Clássico", "Modding", "Conteúdo"], featured: false },
     { id: "veloren", title: "Veloren", description: "RPG voxel multiplayer open-source inspirado em Cube World, Zelda: BOTW e Dwarf Fortress. Escrito em Rust, foca em exploração, combate e criação em mundo aberto procedural.", imageUrl: "https://static.wikitide.net/velorenwiki/8/86/Veloren_Title_Screen_Ingame.png", linkUrl: "https://veloren.net/", platforms: ["windows", "mac_os", "linux"], genres: ["RPG", "Voxel", "Multiplayer", "Mundo Aberto", "Aventura"], featured: false },
     { id: "flightgear", title: "FlightGear", description: "Simulador de voo sofisticado, gratuito e de código aberto. Oferece física realista, vasta seleção de aeronaves e cenários globais. Ideal para entusiastas da aviação.", imageUrl: "https://www.flightgear.org/_astro/fgfs-screen-070.CYA75v3C_ZB4hk2.webp", linkUrl: "https://www.flightgear.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Simulação", "Voo", "Realista"], featured: false },
     { id: "supertux", title: "SuperTux", description: "Clássico jogo de plataforma 2D inspirado em Super Mario Bros. Controle o pinguim Tux em sua jornada para resgatar Penny, coletando moedas e power-ups.", imageUrl: "https://www.supertux.org/images/0_6_0/0_6_0_5.png", linkUrl: "https://www.supertux.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Plataforma", "2D", "Clássico", "Aventura"], featured: false },
     { id: "pingus", title: "Pingus", description: "Jogo de puzzle inspirado em Lemmings, mas com pinguins! Guie um grupo de pinguins através de níveis perigosos, atribuindo-lhes diferentes habilidades.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Pingus.jpg", linkUrl: "https://pingus.seul.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Puzzle", "Estratégia", "Lemmings-like", "2D"], featured: false },
     { id: "assaultcube", title: "AssaultCube", description: "FPS multiplayer de ritmo acelerado, baseado no motor CUBE. Leve e rápido, roda em hardware antigo. Foco em combate realista em equipe e diversão arcade.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/AssaultCube_screenshot.png", linkUrl: "https://assault.cubers.net/", platforms: ["windows", "mac_os", "linux"], genres: ["FPS", "Ação", "Multiplayer", "Leve"], featured: false },
     { id: "stepmania", title: "StepMania", description: "Plataforma avançada de jogos de ritmo/dança (simulador de DDR). Suporta muitos tipos de jogos, temas customizáveis e vasta biblioteca de músicas criadas pela comunidade.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ad/StepMania_5.0.5_Demo.jpg", linkUrl: "https://www.stepmania.com/", platforms: ["windows", "mac_os", "linux"], genres: ["Ritmo", "Música", "Dança", "Simulador"], featured: false },
     { id: "fof", title: "Frets on Fire", description: "Jogo de ritmo musical onde você toca guitarra usando o teclado, similar a Guitar Hero. Suporta músicas customizadas e mods.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Fretsonfire4.png", linkUrl: "http://fretsonfire.sourceforge.net/", platforms: ["windows", "mac_os", "linux"], genres: ["Ritmo", "Música", "Guitarra", "Simulador"], featured: false },
     { id: "unknownhorizons", title: "Unknown Horizons", description: "Jogo 2D de estratégia em tempo real e simulação econômica com foco em construção de colônias e gerenciamento de recursos, inspirado na série Anno.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Unknown_horizons_3176.PNG", linkUrl: "https://unknown-horizons.org/", platforms: ["windows", "mac_os", "linux"], genres: ["City Builder", "Simulação", "Estratégia", "Economia", "2D", "RTS"], featured: false },
     { id: "warzone2100", title: "Warzone 2100", description: "RTS 3D de ficção científica com foco em personalização de unidades, artilharia e radar. Campanha extensa, multiplayer e desenvolvimento ativo.", imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1241950/ss_1592e25b90bfb4a184f922a622d1b3011c6f4216.1920x1080.jpg?t=1584419815", linkUrl: "https://wz2100.net/", platforms: ["windows", "mac_os", "linux"], genres: ["RTS", "Estratégia", "Sci-Fi", "3D", "Guerra"], featured: false },
     { id: "redeclipse", title: "Red Eclipse", description: "FPS de ficção científica com jogabilidade ágil focada em parkour. Oferece modos de jogo variados, edição de mapas e balanceamento.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Red_Eclipse_screenshot_%28Elara_1.4.1%29.png", linkUrl: "https://www.redeclipse.net/", platforms: ["windows", "mac_os", "linux"], genres: ["FPS", "Sci-Fi", "Parkour", "Ação", "Multiplayer"], featured: false },
     { id: "tome4", title: "Tales of Maj'Eyal", description: "Roguelike de fantasia tático e profundo com grande variedade de classes, raças e lore. Combate por turnos, exploração e progressão de personagem complexa.", imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/259680/ss_0f70e1ec5ad6a6854f4810ca259d5e7d8bddcb9e.1920x1080.jpg?t=1660605732", linkUrl: "https://te4.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Roguelike", "RPG", "Fantasia", "Turnos", "Tático"], featured: false },
     { id: "armagetronad", title: "Armagetron Advanced", description: "Jogo multiplayer 3D baseado no filme Tron. Controle uma 'light cycle' e tente fazer seus oponentes colidirem com sua trilha de luz. Altamente customizável.", imageUrl: "https://img.itch.zone/aW1hZ2UvNjgzNTYwLzM3NTkzNjIucG5n/original/UXuGPb.png", linkUrl: "http://armagetronad.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Arcade", "Ação", "Multiplayer", "Tron-like", "3D"], featured: false },
     { id: "teeworlds", title: "Teeworlds", description: "Jogo de tiro multiplayer 2D online com física maluca e personagens fofos. Armas variadas, gancho para movimentação e diversos modos de jogo.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Teeworlds_Screenshot_Jungle_0.6.1.png", linkUrl: "https://www.teeworlds.com/", platforms: ["windows", "mac_os", "linux"], genres: ["2D Shooter", "Multiplayer", "Ação", "Física", "Online"], featured: false },
     { id: "dcss", title: "Dungeon Crawl Stone Soup", description: "Roguelike clássico de exploração de masmorras gratuito e open-source. Conhecido por sua profundidade, design focado e acessibilidade (tiles e ASCII).", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dcss.0.21.webtiles.Elven-Halls.png", linkUrl: "https://crawl.develz.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Roguelike", "RPG", "Exploração de Masmorra", "Fantasia", "Turnos"], featured: false },
     { id: "flare", title: "Flare: Empyrean Campaign", description: "RPG de ação 2D isométrico, gratuito e open-source, com combate rápido e estilo inspirado em Diablo. Explore masmorras, colete itens e melhore seu personagem.", imageUrl: "https://flarerpg.org/wp-content/uploads/2018/03/empyrean_2.jpg", linkUrl: "https://flarerpg.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Action RPG", "RPG", "Fantasia", "Isométrico", "Hack and Slash"], featured: false },
     { id: "thedarkmod", title: "The Dark Mod", description: "Jogo de furtividade em primeira pessoa inspirado na série Thief, ambientado em um universo gótico steampunk. Totalmente gratuito e construído sobre o motor id Tech 4.", imageUrl: "https://www.thedarkmod.com/wp-content/uploads/2020/07/unknown-1536x800.png", linkUrl: "https://www.thedarkmod.com/", platforms: ["windows", "linux"], genres: ["Stealth", "FPS", "Ação", "Fantasia Sombria", "Immersive Sim"], featured: false },
     { id: "mindustry", title: "Mindustry", description: "Jogo híbrido de defesa de torre e simulação de fábrica com foco em gerenciamento de recursos e cadeias de suprimentos complexas. Defenda seu núcleo e conquiste territórios.", imageUrl: "https://mindustrygame.github.io/2.0d4f9a35.webp", linkUrl: "https://mindustrygame.github.io/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Tower Defense", "Simulação", "Estratégia", "Gerenciamento", "Sandbox"], featured: false },
     { id: "openrct2", title: "OpenRCT2", description: "Recriação de código aberto do clássico RollerCoaster Tycoon 2. Permite jogar o original com melhorias, correções de bugs e novas funcionalidades como multiplayer. ", imageUrl: "https://docs.openrct2.io/en/latest/_images/screenshot.png", linkUrl: "https://openrct2.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Simulação", "Gerenciamento", "Construção", "Parque de Diversões", "Tycoon"], featured: false },
     { id: "unvanquished", title: "Unvanquished", description: "FPS futurista de ritmo acelerado com elementos de RTS. Batalha entre humanos tecnologicamente avançados e alienígenas monstruosos, com foco em controle de mapa e construção de base.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Unvanquished-0.52-on-screen-tutorial.jpg", linkUrl: "https://unvanquished.net/", platforms: ["windows", "mac_os", "linux"], genres: ["FPS", "RTS", "Sci-Fi", "Ação", "Multiplayer", "Estratégia"], featured: false },
     { id: "nethack", title: "NetHack", description: "Um dos roguelikes mais antigos e influentes. Exploração de masmorras complexa com interações profundas e muitas surpresas. Interface gráfica (tiles) ou ASCII tradicional.", imageUrl: "https://dosgames.com/screens/nethack.gif", linkUrl: "https://www.nethack.org/", platforms: ["windows", "mac_os", "linux", "android"], genres: ["Roguelike", "RPG", "Exploração de Masmorra", "Fantasia", "Clássico", "ASCII"], featured: false },
     { id: "opentrac", title: "Stunt Rally", description: "Jogo de corrida de rally com mais de 170 pistas em diversos cenários e mais de 20 veículos. Possui editor de pistas e foco em física realista.", imageUrl: "https://i.ytimg.com/vi/Ar7TJMnOHlg/maxresdefault.jpg", linkUrl: "https://stuntrally.tuxfamily.org/", platforms: ["windows", "linux"], genres: ["Corrida", "Rally", "Simulação", "3D"], featured: false },
     { id: "triplea", title: "TripleA", description: "Motor de jogo de estratégia por turnos baseado em tabuleiro, inspirado em jogos como Axis & Allies e Risk. Suporta uma vasta gama de mapas e cenários criados pela comunidade (WWII, fantasia, sci-fi).", imageUrl: "https://user-images.githubusercontent.com/12397753/132109225-71e6c02d-425e-4b8d-9537-7ac66baebbfd.jpeg", linkUrl: "https://triplea-game.org/", platforms: ["windows", "mac_os", "linux"], genres: ["Estratégia", "Turnos", "Guerra", "Tabuleiro", "4X"], featured: false },
     { id: "megaglest", title: "MegaGlest", description: "Jogo de estratégia em tempo real 3D de código aberto ambientado em um mundo de fantasia. Escolha entre 7 facções (tecnologia, magia, egípcios, etc.) e lute em multiplayer ou contra IA.", imageUrl: "https://www.gamingonlinux.com/uploads/articles/tagline_images/21638489id9442gol.jpg", linkUrl: "https://megaglest.org/", platforms: ["windows", "linux"], genres: ["RTS", "Estratégia", "Fantasia", "3D", "Multiplayer"], featured: false },
     { id: "easyrpg", title: "EasyRPG Player", description: "Intérprete de jogos criados com RPG Maker 2000 e 2003. Permite jogar milhares de jogos clássicos e fan-made dessas engines em plataformas modernas.", imageUrl: "https://blog.easyrpg.org/wp-content/uploads/battle_rpg2k3.png", linkUrl: "https://easyrpg.org/", platforms: ["windows", "mac_os", "linux", "android", "web"], genres: ["Intérprete", "RPG", "JRPG", "RPG Maker", "Retro"], featured: false },
];

// --- Seletores de Elementos DOM ---
const gameGrid = document.getElementById('gameGrid');
const featuredGameSection = document.getElementById('featuredGame');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const platformFilter = document.getElementById('platformFilter');
const sortOrderSelect = document.getElementById('sortOrder');
const noGamesMessage = document.getElementById('noGamesMessage');
const modal = document.getElementById('gameModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalPlatforms = document.getElementById('modalPlatforms');
const modalGenres = document.getElementById('modalGenres');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

// --- Funções ---

/**
 * Gera o HTML para um ícone de plataforma, usando um arquivo SVG externo.
 * @param {string} platform Nome da plataforma (ex: 'windows', 'linux').
 * @returns {string} String HTML para o ícone.
 */
function getPlatformIconHTML(platform) {
    const lowerPlatform = platform.toLowerCase();
    const iconFileMap = {
        windows: 'windows.svg',
        mac_os: 'apple.svg',
        apple: 'apple.svg', // Alias para mac_os
        linux: 'linux.svg',
        android: 'android.svg',
        web: 'web.svg'
        // Adicione mais mapeamentos se necessário (ex: 'web', 'bsd', etc.)
    };
    const iconFilename = iconFileMap[lowerPlatform];

    // Capitaliza o nome da plataforma para o título (tooltip) e texto (no modal)
    const title = platform.charAt(0).toUpperCase() + platform.slice(1);

    if (!iconFilename) {
         // Fallback: Mostra apenas o texto se não houver ícone mapeado
         return `<span class="platform-icon" title="${title}"><span class="platform-text">${title}</span></span>`;
    }

    // Retorna o HTML com a tag <img> para o SVG
    return `<span class="platform-icon" title="${title}">
              <img src="${iconFilename}" alt="${title}" class="platform-svg-icon" aria-hidden="true">
              <span class="platform-text">${title}</span>
            </span>`;
}

/**
 * Cria um elemento de tag (div) para gêneros ou plataformas no modal.
 * @param {string} text Texto da tag (nome do gênero ou plataforma).
 * @param {string} type Tipo da tag ('genre' ou 'platform').
 * @returns {HTMLElement} O elemento div da tag criado.
 */
 function createTagElement(text, type) {
     const tag = document.createElement('div');
     tag.classList.add('tag', type); // Adiciona classes 'tag' e o tipo específico
     if (type === 'platform') {
         // Para plataformas, usa a função que gera o HTML do ícone
         tag.innerHTML = getPlatformIconHTML(text);
     } else {
         // Para gêneros, apenas define o texto
         tag.textContent = text;
     }
     return tag;
 }

/**
 * Renderiza a seção do jogo em destaque.
 * @param {object | undefined} game O objeto do jogo a ser destacado ou undefined.
 */
function renderFeaturedGame(game) {
    if (!game) {
        featuredGameSection.style.display = 'none'; // Esconde a seção se não houver jogo em destaque
        return;
    }
    // Define o HTML interno da seção de destaque
     featuredGameSection.innerHTML = `
        <img src="${game.imageUrl}" alt="Destaque: ${game.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x180/1b2838/c7d5e0?text=Imagem+N/D'; this.alt='Imagem indisponível';">
        <div class="featured-game-content">
            <h2>${game.title}</h2>
            <p>${game.description.split('[')[0].trim()}</p> <!-- Pega a descrição antes de possíveis citações -->
             <div class="card-actions">
                 <!-- Botão "Mais Detalhes" sem a classe 'details' para ter estilo azul -->
                 <style>
                .cta-button-a {
                    border: none;
                    border-radius: 6px;
                    color: #273A56;
                    background-color: #66C0F4;
                    font-weight: bold;
                    /* Adicione uma transição suave para o hover */
                    transition: background-color 0.3s ease;
                    cursor: pointer; /* Indica que é clicável */
                    padding: 10px;
                    font-size: 18px;
                }

                .cta-button-a:hover {
                    background-color: #55B4E9; /* Um tom um pouco diferente ou mais escuro */
                    /* Outros estilos de hover, se desejar, como color, transform, etc. */
                }
                </style>

                <!-- O seu botão permanece quase igual, apenas remova os estilos inline que agora estão na classe CSS -->
                <button class="cta-button-a" onclick="openModal('${game.id}')">Mais Detalhes</button>
                 <a href="${game.linkUrl}" class="cta-button" target="_blank" rel="noopener noreferrer">Visitar Site</a>
             </div>
         </div>`;
      featuredGameSection.style.display = 'flex'; // Garante que a seção esteja visível
}

/**
 * Cria e retorna um elemento de card para um jogo específico.
 * @param {object} game Objeto do jogo.
 * @param {number} index Índice do jogo (para animação escalonada).
 * @returns {HTMLElement} O elemento article do card do jogo.
 */
function renderGameCard(game, index) {
    const card = document.createElement('article');
    card.classList.add('game-card');
    card.dataset.gameId = game.id; // Armazena o ID no dataset para fácil acesso
    card.style.animationDelay = `${index * 0.05}s`; // Adiciona um delay para a animação de entrada

    // Gera o HTML para todas as plataformas e gêneros
    const platformsHTML = game.platforms.map(p => getPlatformIconHTML(p)).join('');
    const genresHTML = game.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');

    // Define o HTML interno do card
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${game.imageUrl}" alt="Imagem de ${game.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/310x190/1b2838/c7d5e0?text=Imagem+N/D'; this.alt='Imagem indisponível';">
            <div class="platforms">${platformsHTML}</div>
        </div>
        <div class="game-card-content">
            <div>
                <h3>${game.title}</h3>
                <div class="genres">${genresHTML}</div>
                <p class="description-preview">${game.description.split('[')[0].trim()}</p> <!-- Pega a descrição antes de possíveis citações -->
            </div>
            <div class="card-actions">
                <button class="cta-button details" onclick="openModal('${game.id}')">Mais Detalhes</button>
                <a href="${game.linkUrl}" class="cta-button" target="_blank" rel="noopener noreferrer">Visitar Site</a>
            </div>
        </div>`;
    return card;
}

/**
 * Limpa e renderiza a grade de jogos com base nos jogos filtrados.
 * @param {Array<object>} gamesToRender Array de objetos de jogos a serem exibidos.
 */
function renderGamesGrid(gamesToRender) {
    gameGrid.innerHTML = ''; // Limpa a grade atual
     if (gamesToRender.length === 0) {
         noGamesMessage.style.display = 'block'; // Mostra a mensagem se não houver jogos
     }
     else {
         noGamesMessage.style.display = 'none'; // Esconde a mensagem se houver jogos
         // Cria e adiciona um card para cada jogo
         gamesToRender.forEach((game, index) => {
             const card = renderGameCard(game, index);
             gameGrid.appendChild(card);
         });
     }
}

/**
 * Filtra e ordena os jogos com base nos controles e atualiza a exibição.
 */
function updateDisplay() {
     // Obtém os valores atuais dos controles
     const searchTerm = searchInput.value.toLowerCase().trim();
     const selectedGenre = genreFilter.value;
     const selectedPlatform = platformFilter.value;
     const sortOrder = sortOrderSelect.value;

     // Filtra os jogos
     let filteredGames = games.filter(game => {
         // Sempre exclui o jogo marcado como 'featured' da grade principal
         if (game.featured) return false;

         // Verifica se o jogo corresponde aos critérios de filtro
         const titleMatch = game.title.toLowerCase().includes(searchTerm);
         const genreMatch = selectedGenre === "" || game.genres.includes(selectedGenre); // Vazio significa todos os gêneros
         const platformMatch = selectedPlatform === "" || game.platforms.includes(selectedPlatform); // Vazio significa todas as plataformas

         return titleMatch && genreMatch && platformMatch;
     });

     // Ordena os jogos filtrados
     filteredGames.sort((a, b) => {
         if (sortOrder === 'title-asc') {
             return a.title.localeCompare(b.title); // Ordena A-Z
         } else if (sortOrder === 'title-desc') {
             return b.title.localeCompare(a.title); // Ordena Z-A
         }
         return 0; // Nenhuma ordenação específica
     });

     // Renderiza a grade com os jogos filtrados e ordenados
     renderGamesGrid(filteredGames);
 }

 /**
  * Popula as opções dos seletores de filtro (gênero e plataforma).
  */
 function populateFilters() {
     const allGenres = new Set();
     const allPlatforms = new Set();
     // Coleta todos os gêneros e plataformas únicas de TODOS os jogos (incluindo o destaque)
     games.forEach(game => {
         game.genres.forEach(genre => allGenres.add(genre));
         game.platforms.forEach(platform => allPlatforms.add(platform));
     });

     // Limpa as opções existentes (exceto a primeira "Todos")
     genreFilter.innerHTML = '<option value="">Todos os Gêneros</option>';
     platformFilter.innerHTML = '<option value="">Todas as Plataformas</option>';

     // Adiciona as opções de gênero ordenadas
     const sortedGenres = Array.from(allGenres).sort((a, b) => a.localeCompare(b)); // Ordena alfabeticamente
     sortedGenres.forEach(genre => {
         const option = document.createElement('option');
         option.value = genre;
         option.textContent = genre;
         genreFilter.appendChild(option);
     });

     // Adiciona as opções de plataforma ordenadas
     const sortedPlatforms = Array.from(allPlatforms).sort((a, b) => a.localeCompare(b)); // Ordena alfabeticamente
      sortedPlatforms.forEach(platform => {
          const option = document.createElement('option');
          option.value = platform;
          // Capitaliza a primeira letra para exibição
          option.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
          platformFilter.appendChild(option);
      });
 }

/**
 * Abre o modal com os detalhes de um jogo específico.
 * Função é atribuída a `window` para ser acessível pelo `onclick` no HTML.
 * @param {string} gameId O ID do jogo a ser exibido no modal.
 */
 window.openModal = function(gameId) {
     // Encontra o jogo pelo ID
     const game = games.find(g => g.id === gameId);
     if (!game) return; // Sai se o jogo não for encontrado

     // Preenche os elementos do modal com os dados do jogo
     modalTitle.textContent = game.title;
     modalImage.src = game.imageUrl;
     modalImage.alt = `Imagem de ${game.title}`;
     // Define um fallback para a imagem do modal também
     modalImage.onerror = function() {
        this.onerror=null; // Previne loop infinito
        this.src='https://via.placeholder.com/700x320/1b2838/c7d5e0?text=Imagem+Indisponível';
        this.alt='Imagem indisponível';
     };
     // Substitui quebras de linha por <br> para exibição correta no HTML
     modalDescription.innerHTML = game.description.replace(/\n/g, '<br>');
     modalLink.href = game.linkUrl;

     // Limpa e popula as tags de plataforma
     modalPlatforms.innerHTML = '';
     game.platforms.forEach(p => modalPlatforms.appendChild(createTagElement(p, 'platform')));

     // Limpa e popula as tags de gênero
     modalGenres.innerHTML = '';
     game.genres.forEach(g => modalGenres.appendChild(createTagElement(g, 'genre')));

     // Exibe o modal
     modal.style.display = "block";
     document.body.style.overflow = 'hidden'; // Impede o scroll da página ao fundo
     modal.focus(); // Foca o modal para acessibilidade (permite fechar com Esc)
 }

/**
 * Fecha o modal.
 * Função é atribuída a `window` para ser acessível pelo `onclick` no HTML.
 */
 window.closeModal = function() {
     modal.style.display = "none"; // Esconde o modal
     document.body.style.overflow = 'auto'; // Restaura o scroll da página
 }

 // --- Event Listeners ---

 // Fecha o modal se o clique for no fundo escuro (fora do modal-content)
 modal.addEventListener('click', (event) => {
     if (event.target === modal) {
         closeModal();
     }
 });

 // Fecha o modal ao pressionar a tecla Escape
 modal.addEventListener('keydown', (event) => {
     if (event.key === 'Escape') {
         closeModal();
     }
 });

 // Executa quando o DOM estiver completamente carregado
 document.addEventListener('DOMContentLoaded', () => {
     // Encontra e renderiza o jogo em destaque
     const featuredGame = games.find(g => g.featured);
     renderFeaturedGame(featuredGame);

     // Popula os filtros
     populateFilters();

     // Renderiza a grade inicial (com filtros padrão)
     updateDisplay();

     // Adiciona listeners aos controles para atualizar a exibição quando mudarem
     searchInput.addEventListener('input', updateDisplay);
     genreFilter.addEventListener('change', updateDisplay);
     platformFilter.addEventListener('change', updateDisplay);
     sortOrderSelect.addEventListener('change', updateDisplay);
 });
