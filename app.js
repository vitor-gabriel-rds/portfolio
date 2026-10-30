/**
 * VICTOR GABRIEL ARVELLOS — A24 EDITORIAL SOFTWARE ARCHIVE
 * Sistema de Gerenciamento, Navegação e Interatividade de Portfólio
 * Inspirado na estética de a24.raviklaassens.com
 */

// =============================================================================
// 1. DADOS INICIAIS PRÉ-CARREGADOS (DEFAULT ARCHIVE)
// =============================================================================
const DEFAULT_PROJECTS = [
  {
    id: "vga-proj-tcc",
    catalogNumber: "VGA-ENG-001",
    title: "NANA & MIMI (TCC)",
    subtitle: "PLATAFORMA E-COMMERCE DE MODA INFANTIL • TRABALHO DE CONCLUSÃO DE CURSO",
    year: "2026",
    category: "TCC & E-Commerce",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Node.js", "SPA Architecture", "State Management"],
    review: "★ 5.0 — Projeto Principal de Conclusão de Curso (TCC). Arquitetura SPA moderna, experiência do usuário fluida e vitrine comercial interativa.",
    reviewer: "Banca Examinadora de TCC • Avaliação Técnica e Acadêmica",
    rating: 5.0,
    description: "Trabalho de Conclusão de Curso (TCC) focado no desenvolvimento de uma plataforma completa de e-commerce voltada para o segmento de moda infantil (Nana & Mimi / Coleção Pequenos Campeões). A aplicação conta com navegação reativa em Single Page Application, vitrine com categorização dinâmica de coleções (conjuntos infantis, modelos e faixas de preço), gerenciamento de carrinho de compras em tempo real, painel de usuário e interface responsiva otimizada para alta conversão.",
    githubUrl: "",
    liveDemoUrl: "https://tccatualizacao.vercel.app/",
    architectureHighlight: "Single Page Application reativa com gerenciamento centralizado de estado e catálogo sob demanda",
    metrics: {
      throughput: "100% Responsivo",
      latency: "< 40ms Render",
      availability: "99.9% Vercel",
      coverage: "Nota Máxima TCC"
    },
    posterTheme: "gold",
    customImageUrl: "assets/projects/tcc-nana-mimi.png"
  },
  {
    id: "vga-proj-entregador",
    catalogNumber: "VGA-ENG-002",
    title: "NA PELE DO ENTREGADOR",
    subtitle: "SIMULADOR PEDAGÓGICO DE SOCIOLOGIA DA GIG ECONOMY",
    year: "2026",
    category: "Simulador & EdTech",
    stack: ["JavaScript", "HTML5", "CSS3 Moderno", "Web Audio API", "Game Engine", "Sociologia do Trabalho"],
    review: "★ 5.0 — Experiência provocativa e imersiva que traduz dinâmicas algorítmicas e a precarização do trabalho em mecânicas lúdicas de impacto pedagógico.",
    reviewer: "Projeto Educativo de Sociologia do Trabalho",
    rating: 5.0,
    description: "Simulador pedagógico e jogo interativo de tomada de decisão sobre a uberização e a precarização na gig economy. O usuário vivencia uma jornada de 12 horas como entregador de aplicativo, escolhendo entre modais de trabalho (moto alugada ou bicicleta própria) e enfrentando eventos críticos como gestão algorítmica arbitrária, chuva torrencial, quebra de veículo, metas opacas e ausência de direitos CLT. Conta com efeitos sonoros via Web Audio API e glossário sociológico integrado.",
    githubUrl: "",
    liveDemoUrl: "https://na-pele-do-entregador.vercel.app/",
    architectureHighlight: "Máquina de estados finitos com simulação de eventos estocásticos e síntese de áudio web",
    metrics: {
      throughput: "60 FPS Game Loop",
      latency: "Instantâneo",
      availability: "100% Web Native",
      coverage: "Simulação Completa"
    },
    posterTheme: "monolith",
    customImageUrl: "assets/projects/na-pele-do-entregador.png"
  },
  {
    id: "vga-proj-cinecatalogo",
    catalogNumber: "VGA-ENG-003",
    title: "CINECATÁLOGO",
    subtitle: "GERENCIADOR DE FILMES EM MEMÓRIA & API FULL STACK",
    year: "2026",
    category: "Full Stack & APIs",
    stack: ["Node.js", "Express", "MongoDB In-Memory", "Mongoose", "JavaScript", "Dark UI / CSS3"],
    review: "★ 4.9 — Aplicação completa com backend ágil em memória, endpoints RESTful eficientes, busca instantânea e interface dark mode cinematográfica.",
    reviewer: "Full Stack Systems & API Benchmark Review",
    rating: 4.9,
    description: "Aplicação web completa para gerenciamento e exploração de catálogo de filmes com backend Node.js e banco de dados MongoDB em memória (In-Memory). Implementa operações CRUD completas, filtragem por gênero, busca instantânea por múltiplos campos (título, diretor, gênero) e ordenação dinâmica (recentes, ano e ordem alfabética). Interface moderna com visual cinematográfico.",
    githubUrl: "",
    liveDemoUrl: "https://filmes-ad.vercel.app/",
    architectureHighlight: "CRUD completo com Mongoose, banco de dados em memória e endpoints RESTful",
    metrics: {
      throughput: "In-Memory Engine",
      latency: "< 15ms Query",
      availability: "Vercel Serverless",
      coverage: "CRUD Completo"
    },
    posterTheme: "noir",
    customImageUrl: "assets/projects/cinecatalogo.png"
  },
  {
    id: "vga-proj-fastshop",
    catalogNumber: "VGA-ENG-004",
    title: "FAST SHOP — VITRINE DIGITAL",
    subtitle: "CATÁLOGO INTERATIVO DE ELETRÔNICOS E ELETRODOMÉSTICOS",
    year: "2026",
    category: "Front-End & UI",
    stack: ["React", "Vite", "JavaScript", "TailwindCSS", "Component-Driven", "Responsive UI"],
    review: "★ 4.8 — Interface limpa, responsiva e focada na experiência de navegação e visualização de produtos e ofertas de varejo.",
    reviewer: "Front-End Engineering & UX Audit",
    rating: 4.8,
    description: "Aplicação front-end desenvolvida com React e Vite simulando a vitrine virtual interativa da Fast Shop. O sistema permite alternar com agilidade entre as categorias de 'Eletrônicos' e 'Eletrodomésticos', exibindo produtos em destaque com preços formatados e diagramação limpa e moderna focada em conversão e usabilidade.",
    githubUrl: "",
    liveDemoUrl: "https://ad1trigustavo.vercel.app/",
    architectureHighlight: "Componentização modular em React com renderização condicional e build ultra-rápido com Vite",
    metrics: {
      throughput: "Vite Bundled",
      latency: "< 30ms TTFB",
      availability: "99.9% Vercel",
      coverage: "100% Responsivo"
    },
    posterTheme: "silver",
    customImageUrl: "assets/projects/fast-shop.png"
  }
];

// =============================================================================
// 2. GERENCIADOR DE ESTADO E LOCALSTORAGE
// =============================================================================
const STORAGE_KEY = "vga_a24_software_archive_v2";

class ArchiveStore {
  constructor() {
    this.projects = this.load();
    this.currentStageIndex = 0;
    this.activeFilter = "ALL";
    this.searchQuery = "";
  }

  load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const hasOldDummies = parsed.some(p => p.id === "vga-proj-1" || p.title === "NEXUS HYPERGRAPH");
          if (!hasOldDummies) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn("Erro ao carregar do LocalStorage:", e);
    }
    // Caso não exista ou tenha projetos antigos, salva os padrões atualizados
    this.save(DEFAULT_PROJECTS);
    return [...DEFAULT_PROJECTS];
  }

  save(projects) {
    this.projects = projects;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error("Falha ao salvar no LocalStorage:", e);
    }
  }

  getAll() {
    return [...this.projects];
  }

  getFiltered() {
    let list = this.projects;

    if (this.activeFilter !== "ALL") {
      list = list.filter(p => p.category.toLowerCase().includes(this.activeFilter.toLowerCase()));
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchSubtitle = (p.subtitle || "").toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchReview = p.review.toLowerCase().includes(q);
        const matchStack = p.stack.some(s => s.toLowerCase().includes(q));
        const matchCategory = p.category.toLowerCase().includes(q);
        const matchYear = String(p.year).includes(q);
        return matchTitle || matchSubtitle || matchDesc || matchReview || matchStack || matchCategory || matchYear;
      });
    }

    return list;
  }

  getById(id) {
    return this.projects.find(p => p.id === id);
  }

  add(projectData) {
    const nextNum = this.projects.length + 1;
    const catNum = `VGA-ENG-${String(nextNum).padStart(3, "0")}`;
    const newProject = {
      id: "vga-proj-" + Date.now(),
      catalogNumber: catNum,
      ...projectData
    };
    this.projects.unshift(newProject);
    this.save(this.projects);
    return newProject;
  }

  update(id, updatedData) {
    const index = this.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.projects[index] = {
        ...this.projects[index],
        ...updatedData
      };
      this.save(this.projects);
      return this.projects[index];
    }
    return null;
  }

  delete(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    this.save(this.projects);
    if (this.currentStageIndex >= this.projects.length) {
      this.currentStageIndex = Math.max(0, this.projects.length - 1);
    }
  }

  reset() {
    this.save(DEFAULT_PROJECTS);
    this.currentStageIndex = 0;
  }
}

// Instância global do repositório
const store = new ArchiveStore();

// =============================================================================
// 3. SISTEMA DE ÁUDIO WEB AUDIO API (SONS CINEMATOGRÁFICOS SUTIS)
// =============================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playChime(640, 0.08);
    }
    return this.enabled;
  }

  playMechanicalClick() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    } catch (e) {}
  }

  playChime(freq = 520, duration = 0.25) {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }
}

const soundEngine = new SoundEngine();

// =============================================================================
// 4. GERADOR DE PÔSTERES GEOMÉTRICOS & MINIMALISTAS EM SVG
// =============================================================================
function generatePosterSvg(title, year, catalogNumber, theme = "monolith") {
  const safeTitle = (title || "SYSTEM").toUpperCase();
  const safeCat = catalogNumber || "VGA-ENG";

  const themes = {
    monolith: {
      bg: "#0c0d0f",
      primary: "#e5e7eb",
      accent: "#3b82f6",
      grid: "rgba(255, 255, 255, 0.06)"
    },
    gold: {
      bg: "#0e0d0b",
      primary: "#fef3c7",
      accent: "#c5a059",
      grid: "rgba(197, 160, 89, 0.08)"
    },
    emerald: {
      bg: "#0b0f0d",
      primary: "#ecfdf5",
      accent: "#10b981",
      grid: "rgba(16, 185, 129, 0.08)"
    },
    cyber: {
      bg: "#0f0b12",
      primary: "#f5d0fe",
      accent: "#a855f7",
      grid: "rgba(168, 85, 247, 0.08)"
    },
    noir: {
      bg: "#080808",
      primary: "#ffffff",
      accent: "#71717a",
      grid: "rgba(255, 255, 255, 0.04)"
    }
  };

  const t = themes[theme] || themes.monolith;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 540" width="100%" height="100%" class="generative-art">
      <defs>
        <pattern id="grid-${safeCat}" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${t.grid}" stroke-width="0.8"/>
        </pattern>
        <linearGradient id="grad-${safeCat}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.35"/>
          <stop offset="50%" stop-color="transparent" stop-opacity="0"/>
          <stop offset="100%" stop-color="${t.accent}" stop-opacity="0.15"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="${t.bg}"/>
      <rect width="100%" height="100%" fill="url(#grid-${safeCat})"/>
      <rect width="100%" height="100%" fill="url(#grad-${safeCat})"/>

      <!-- Framing Hairlines -->
      <rect x="18" y="18" width="364" height="504" fill="none" stroke="${t.primary}" stroke-opacity="0.2" stroke-width="1"/>
      <line x1="18" y1="52" x2="382" y2="52" stroke="${t.primary}" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="18" y1="460" x2="382" y2="460" stroke="${t.primary}" stroke-opacity="0.15" stroke-width="1"/>

      <!-- Header typography -->
      <text x="32" y="40" fill="${t.primary}" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="3" opacity="0.8">A24 SOFTWARE ARCHIVE</text>
      <text x="368" y="40" text-anchor="end" fill="${t.accent}" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="2">${safeCat}</text>

      <!-- Center Geometric Abstraction -->
      <g transform="translate(200, 240)">
        <!-- Outer concentric rings -->
        <circle r="110" fill="none" stroke="${t.primary}" stroke-width="1" stroke-dasharray="4,6" opacity="0.3"/>
        <circle r="75" fill="none" stroke="${t.accent}" stroke-width="1.2" opacity="0.6"/>
        <circle r="40" fill="none" stroke="${t.primary}" stroke-width="1" opacity="0.4"/>
        
        <!-- Crosshairs -->
        <line x1="-120" y1="0" x2="120" y2="0" stroke="${t.primary}" stroke-width="0.7" opacity="0.25"/>
        <line x1="0" y1="-120" x2="0" y2="120" stroke="${t.primary}" stroke-width="0.7" opacity="0.25"/>
        
        <!-- Polygon architectural core -->
        <polygon points="0,-50 43,25 -43,25" fill="none" stroke="${t.primary}" stroke-width="1.5" opacity="0.85"/>
        <polygon points="0,50 -43,-25 43,-25" fill="none" stroke="${t.accent}" stroke-width="1.2" opacity="0.65"/>
        <circle r="6" fill="${t.primary}"/>
      </g>

      <!-- Main Title (A24 Poster Style) -->
      <text x="32" y="420" fill="${t.primary}" font-family="'Cinzel', serif" font-weight="700" font-size="20" letter-spacing="4">${safeTitle.substring(0, 20)}</text>
      
      <!-- Footer Colophon -->
      <text x="32" y="482" fill="${t.primary}" font-family="'JetBrains Mono', monospace" font-size="8.5" letter-spacing="2" opacity="0.75">DIRECTED BY V. G. ARVELLOS</text>
      <text x="32" y="496" fill="${t.accent}" font-family="'JetBrains Mono', monospace" font-size="8" letter-spacing="1.5" opacity="0.9">RELEASED ${year} • SYSTEM AUDITED</text>
      <text x="368" y="496" text-anchor="end" fill="${t.primary}" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="2" opacity="0.6">35MM / 4K</text>
    </svg>
  `;
}

// Laurel Wreath SVG Icon Helper
function getLaurelSvg(className = "w-5 h-5") {
  return `
    <svg class="${className}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-2c-1.66 0-3-1.34-3-3s1.34-3 3-3v-2c-2.76 0-5 2.24-5 5s2.24 5 5 5zm5.5-2c0 1.38-1.12 2.5-2.5 2.5v2c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5v2c1.38 0 2.5 1.12 2.5 2.5z" opacity="0.2"/>
      <path d="M7 6c.55 1.5 1.5 2.5 3 3-1.5.5-2.5 1.5-3 3-.5-1.5-1.5-2.5-3-3 1.5-.5 2.5-1.5 3-3zm10 0c.55 1.5 1.5 2.5 3 3-1.5.5-2.5 1.5-3 3-.5-1.5-1.5-2.5-3-3 1.5-.5 2.5-1.5 3-3z"/>
    </svg>
  `;
}

function getCinematicLaurelWreath() {
  return `
    <svg class="w-8 h-8 text-amber-300 opacity-90 inline-block mr-2" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M24 44C16 38 10 28 10 16C14 16 18 19 21 24C19 17 21 11 25 7C29 11 31 17 29 24C32 19 36 16 40 16C40 28 34 38 24 44Z"/>
      <circle cx="25" cy="7" r="1.5" fill="currentColor"/>
    </svg>
  `;
}

// =============================================================================
// 5. TOAST NOTIFICATIONS
// =============================================================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  
  const icon = type === "success" ? "✓" : type === "danger" ? "✕" : "ℹ";
  toast.innerHTML = `
    <span class="text-amber-400 font-bold">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  soundEngine.playMechanicalClick();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =============================================================================
// 6. RENDERIZADORES DE INTERFACE (STAGE SHOWCASE & GRID ARCHIVE)
// =============================================================================

/**
 * Renderiza o Palco Interativo de Mídia Física (Inspirado em a24.raviklaassens.com)
 */
function renderStage() {
  const stageWrapper = document.getElementById("media-stage-mount");
  const stageDetailsMount = document.getElementById("stage-details-mount");
  const stageCounter = document.getElementById("stage-counter");
  const stageDots = document.getElementById("stage-indicators");

  if (!stageWrapper || !stageDetailsMount) return;

  const allProjects = store.getAll();
  if (allProjects.length === 0) {
    stageWrapper.innerHTML = `
      <div class="py-20 text-center text-neutral-500 font-tech-mono">
        [ ARQUIVO VAZIO • CLIQUE EM "+ NOVO PROJETO" PARA ADICIONAR ]
      </div>
    `;
    stageDetailsMount.innerHTML = "";
    return;
  }

  // Garante índice válido
  if (store.currentStageIndex >= allProjects.length) {
    store.currentStageIndex = 0;
  }
  const current = allProjects[store.currentStageIndex];

  // Atualiza Contador (ex: 01 / 03)
  if (stageCounter) {
    stageCounter.innerText = `${String(store.currentStageIndex + 1).padStart(2, "0")} / ${String(allProjects.length).padStart(2, "0")}`;
  }

  // Gera poster visual
  const posterVisual = current.customImageUrl 
    ? `<img src="${current.customImageUrl}" alt="${current.title}" class="w-full h-full object-cover object-top">`
    : generatePosterSvg(current.title, current.year, current.catalogNumber, current.posterTheme || "monolith");

  const isTcc = current.id === "vga-proj-tcc" || (current.category && current.category.includes("TCC")) || (current.title && current.title.includes("TCC"));

  // Renderiza Estojo e Disco Físico com efeito holográfico
  stageWrapper.innerHTML = `
    <div class="media-stage-wrapper relative flex items-center justify-center p-4">
      
      <!-- Disco Óptico (Sai de trás do estojo no hover ou animação) -->
      <div class="optical-disc" id="stage-optical-disc">
        <div class="disc-spindle-clear"></div>
        <div class="disc-text-ring">
          <span>${current.catalogNumber} • ${isTcc ? '★ PROJETO PRINCIPAL (TCC)' : '2026 ARCHIVE'}</span>
        </div>
      </div>

      <!-- Estojo Físico (Jewel Case / Sleeve) -->
      <div class="media-case rounded-none overflow-hidden ${isTcc ? 'ring-2 ring-amber-400/50 shadow-[0_30px_70px_rgba(197,160,89,0.2)]' : ''}" onclick="openDetailsModal('${current.id}')">
        <div class="w-full h-full relative">
          ${posterVisual}
          
          <!-- Selo Reflexivo da Lombada / Borda A24 -->
          <div class="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
          
          <!-- Badge sutil de clique -->
          <div class="absolute bottom-4 right-4 bg-black/80 backdrop-blur border border-white/20 px-2 py-1 text-[9px] font-tech-mono uppercase tracking-widest text-neutral-300">
            INSPECT CASE ℹ
          </div>

          ${isTcc ? `
            <div class="absolute top-3 right-3 bg-amber-400 text-black px-2 py-0.5 text-[9px] font-tech-mono font-bold uppercase tracking-wider shadow-lg">
              ★ TCC PRINCIPAL
            </div>
          ` : ''}
        </div>
      </div>

    </div>
  `;

  // Renderiza Painel Lateral de Informações Editoriais
  const stackChips = current.stack.map(st => `
    <span class="inline-block px-2.5 py-1 text-[11px] font-tech-mono uppercase bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors">
      ${st}
    </span>
  `).join("");

  stageDetailsMount.innerHTML = `
    <div class="space-y-6">
      
      <!-- Categoria & Catálogo -->
      <div class="flex flex-wrap items-center gap-3 text-xs font-tech-mono text-neutral-400">
        <span class="text-amber-400 font-semibold">[ ${current.catalogNumber} ]</span>
        <span>•</span>
        <span class="uppercase tracking-widest text-neutral-300">${current.category}</span>
        <span>•</span>
        <span class="text-neutral-500">ANO ${current.year}</span>
        ${isTcc ? `<span class="px-2.5 py-1 text-[10px] font-bold bg-amber-400 text-black uppercase tracking-wider ml-auto">★ PROJETO PRINCIPAL (TCC)</span>` : ''}
      </div>

      <!-- Título em Alta Caixa Editorial A24 -->
      <div>
        <h2 class="text-3xl md:text-5xl font-editorial-title font-bold text-white tracking-widest leading-none">
          ${current.title}
        </h2>
        ${current.subtitle ? `
          <p class="mt-2 text-xs md:text-sm font-tech-mono tracking-wider text-neutral-400 uppercase">
            ${current.subtitle}
          </p>
        ` : ''}
      </div>

      <!-- Laurel Wreath & Review Técnico (Adaptado de críticas de cinema) -->
      <div class="p-4 bg-neutral-950/80 border-l-2 border-amber-400/80 border-y border-r border-neutral-800/60">
        <div class="flex items-start gap-3">
          <span class="text-amber-400 text-2xl font-serif">❝</span>
          <div>
            <blockquote class="font-editorial-serif text-lg md:text-xl text-neutral-200 italic leading-snug">
              ${current.review}
            </blockquote>
            <p class="mt-2 text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500">
              — ${current.reviewer || "Software Architecture Review"}
            </p>
          </div>
        </div>
      </div>

      <!-- Sinopse do Sistema / Descrição Técnica -->
      <div>
        <h3 class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500 mb-2">
          // ESPECIFICAÇÕES DE ENGENHARIA & ARQUITETURA
        </h3>
        <p class="text-sm font-editorial-sans text-neutral-300 leading-relaxed">
          ${current.description}
        </p>
      </div>

      <!-- Stack Tecnológica (Substituindo Elenco / Direção) -->
      <div>
        <h3 class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500 mb-2">
          // STACK TECNOLÓGICA (CAST & CREW)
        </h3>
        <div class="flex flex-wrap gap-1.5">
          ${stackChips}
        </div>
      </div>

      <!-- Ações Diretas: Live Demo, GitHub, Inspecionar e Editar -->
      <div class="pt-4 flex flex-wrap items-center gap-3 border-t border-neutral-900">
        ${current.liveDemoUrl ? `
          <a href="${current.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn-a24-primary" onclick="soundEngine.playMechanicalClick()">
            <span>ACESSAR PROJETO NO VERCEL</span>
            <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        ` : ''}

        ${current.githubUrl ? `
          <a href="${current.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-a24-outline" onclick="soundEngine.playMechanicalClick()">
            <span>REPOSITÓRIO GITHUB</span>
            <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </a>
        ` : ''}

        <button onclick="openEditModal('${current.id}')" class="btn-a24-ghost ml-auto text-xs" title="Editar este projeto">
          ✎ EDITAR
        </button>
      </div>

    </div>
  `;

  // Atualiza indicadores de paginação (dots/pills)
  if (stageDots) {
    stageDots.innerHTML = allProjects.map((p, idx) => `
      <button 
        onclick="setStageIndex(${idx})" 
        class="h-1.5 transition-all duration-300 ${idx === store.currentStageIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-700 hover:bg-neutral-500'}"
        title="${p.title}"
      ></button>
    `).join("");
  }
}

/**
 * Renderiza o Grid Editorial Completo de Projetos (Com Filtro e Busca)
 */
function renderGrid() {
  const gridContainer = document.getElementById("projects-grid-mount");
  const countBadge = document.getElementById("projects-count-badge");
  if (!gridContainer) return;

  const filtered = store.getFiltered();

  if (countBadge) {
    countBadge.innerText = `EXIBINDO [ ${filtered.length} ] DE [ ${store.getAll().length} ] ARQUIVOS`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center border border-dashed border-neutral-800 p-8">
        <p class="font-tech-mono text-sm text-neutral-400 uppercase tracking-widest">Nenhum projeto encontrado para o filtro atual.</p>
        <button onclick="clearFilters()" class="btn-a24-outline mt-4">
          LIMPAR FILTROS
        </button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map((project, index) => {
    const isTcc = project.id === "vga-proj-tcc" || (project.category && project.category.includes("TCC")) || (project.title && project.title.includes("TCC"));

    const posterVisual = project.customImageUrl
      ? `<img src="${project.customImageUrl}" alt="${project.title}" class="w-full h-full object-cover object-top">`
      : generatePosterSvg(project.title, project.year, project.catalogNumber, project.posterTheme || "monolith");

    const stackChips = project.stack.slice(0, 4).map(s => `
      <span class="text-[10px] font-tech-mono text-neutral-400 bg-neutral-900/90 px-2 py-0.5 border border-neutral-800">
        ${s}
      </span>
    `).join("");

    const cardBorder = isTcc ? 'border-amber-500/50 shadow-[0_0_25px_rgba(197,160,89,0.15)] ring-1 ring-amber-500/30' : '';

    return `
      <article class="editorial-poster-card flex flex-col justify-between group ${cardBorder}">
        
        <!-- Header do Card -->
        <div class="p-4 border-b border-neutral-900 flex items-center justify-between text-[10px] font-tech-mono text-neutral-400">
          <span class="text-amber-400/90 font-semibold">${project.catalogNumber}</span>
          ${isTcc 
            ? `<span class="px-2 py-0.5 bg-amber-400/20 text-amber-300 border border-amber-400/50 font-bold uppercase tracking-wider">★ PROJETO PRINCIPAL (TCC)</span>`
            : `<span class="uppercase tracking-wider truncate max-w-[150px]">${project.category}</span>`
          }
          <span>${project.year}</span>
        </div>

        <!-- Área Visual / Capa do Filme-Projeto -->
        <div class="poster-visual-wrapper cursor-pointer relative" onclick="openDetailsModal('${project.id}')">
          ${posterVisual}
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
          ${isTcc ? `
            <div class="absolute bottom-2 left-2 bg-black/85 backdrop-blur border border-amber-400/60 text-amber-300 px-2 py-0.5 text-[9px] font-tech-mono font-bold uppercase tracking-wider">
              DESTAQUE TCC
            </div>
          ` : ''}
        </div>

        <!-- Conteúdo do Pôster -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          
          <div>
            <h3 class="font-editorial-title text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
              ${project.title}
            </h3>
            ${project.subtitle ? `
              <p class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-400 mt-1 line-clamp-1">
                ${project.subtitle}
              </p>
            ` : ''}
          </div>

          <!-- Review Técnico / Avaliação de Código -->
          <div class="py-2.5 px-3 bg-neutral-950 border border-neutral-800/80 rounded-none">
            <p class="font-editorial-serif text-sm italic text-neutral-300 leading-snug line-clamp-2">
              "${project.review}"
            </p>
            <p class="mt-1 text-[9px] font-tech-mono uppercase tracking-widest text-neutral-500">
              — ${project.reviewer || "Code Review Audit"}
            </p>
          </div>

          <!-- Stack Tecnológica (Chips) -->
          <div class="flex flex-wrap gap-1">
            ${stackChips}
            ${project.stack.length > 4 ? `
              <span class="text-[10px] font-tech-mono text-neutral-500 px-1 py-0.5">
                +${project.stack.length - 4}
              </span>
            ` : ''}
          </div>

          <!-- Barra de Ações do Card -->
          <div class="pt-3 border-t border-neutral-900 flex items-center justify-between">
            <div class="flex items-center gap-2">
              ${project.liveDemoUrl ? `
                <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-tech-mono text-white hover:text-amber-400 flex items-center gap-1 transition-colors font-semibold" title="Acessar Projeto no Vercel">
                  <span>ACESSAR PROJETO</span> ↗
                </a>
              ` : ''}
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-tech-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors ml-2" title="Código GitHub">
                  <span>CODE</span> ↗
                </a>
              ` : ''}
            </div>

            <div class="flex items-center gap-2">
              <button onclick="openEditModal('${project.id}')" class="text-xs font-tech-mono text-neutral-400 hover:text-white transition-colors" title="Editar projeto">
                [ EDIT ]
              </button>
              <button onclick="confirmDelete('${project.id}')" class="text-xs font-tech-mono text-neutral-500 hover:text-red-400 transition-colors" title="Excluir projeto">
                ✕
              </button>
            </div>
          </div>

        </div>

      </article>
    `;
  }).join("");
}

// =============================================================================
// 7. CONTROLE DO PALCO (STAGE NAVIGATION)
// =============================================================================
function nextStage() {
  const all = store.getAll();
  if (all.length === 0) return;
  store.currentStageIndex = (store.currentStageIndex + 1) % all.length;
  soundEngine.playMechanicalClick();
  renderStage();
}

function prevStage() {
  const all = store.getAll();
  if (all.length === 0) return;
  store.currentStageIndex = (store.currentStageIndex - 1 + all.length) % all.length;
  soundEngine.playMechanicalClick();
  renderStage();
}

function setStageIndex(idx) {
  const all = store.getAll();
  if (idx >= 0 && idx < all.length) {
    store.currentStageIndex = idx;
    soundEngine.playMechanicalClick();
    renderStage();
  }
}

// =============================================================================
// 8. MODAL DE EDIÇÃO / CRIAÇÃO DE PROJETOS (CRUD CMS)
// =============================================================================
let currentEditingId = null;

function openCreateModal() {
  currentEditingId = null;
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const form = document.getElementById("project-form");
  const deleteBtn = document.getElementById("modal-delete-btn");

  if (!modal || !form) return;

  form.reset();
  document.getElementById("form-id").value = "";
  document.getElementById("form-year").value = new Date().getFullYear();
  document.getElementById("form-rating").value = "5.0";
  document.getElementById("form-theme").value = "monolith";

  modalTitle.innerText = "ADICIONAR PROJETO AO ARQUIVO";
  if (deleteBtn) deleteBtn.classList.add("hidden");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  soundEngine.playMechanicalClick();
}

function openEditModal(id) {
  const project = store.getById(id);
  if (!project) return;

  currentEditingId = id;
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const form = document.getElementById("project-form");
  const deleteBtn = document.getElementById("modal-delete-btn");

  if (!modal || !form) return;

  // Preenche campos
  document.getElementById("form-id").value = project.id;
  document.getElementById("form-title").value = project.title || "";
  document.getElementById("form-subtitle").value = project.subtitle || "";
  document.getElementById("form-year").value = project.year || "2026";
  document.getElementById("form-category").value = project.category || "Full Stack";
  document.getElementById("form-stack").value = (project.stack || []).join(", ");
  document.getElementById("form-review").value = project.review || "";
  document.getElementById("form-reviewer").value = project.reviewer || "";
  document.getElementById("form-rating").value = project.rating || "5.0";
  document.getElementById("form-description").value = project.description || "";
  document.getElementById("form-github").value = project.githubUrl || "";
  document.getElementById("form-demo").value = project.liveDemoUrl || "";
  document.getElementById("form-theme").value = project.posterTheme || "monolith";
  document.getElementById("form-image").value = project.customImageUrl || "";

  modalTitle.innerText = `EDITAR ARQUIVO [ ${project.catalogNumber || project.title} ]`;
  if (deleteBtn) deleteBtn.classList.remove("hidden");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  soundEngine.playMechanicalClick();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  soundEngine.playMechanicalClick();
}

function handleProjectFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById("form-id").value;
  const title = document.getElementById("form-title").value.trim();
  const subtitle = document.getElementById("form-subtitle").value.trim();
  const year = document.getElementById("form-year").value.trim() || String(new Date().getFullYear());
  const category = document.getElementById("form-category").value.trim() || "Full Stack";
  const stackInput = document.getElementById("form-stack").value.trim();
  const review = document.getElementById("form-review").value.trim();
  const reviewer = document.getElementById("form-reviewer").value.trim() || "Lead Code Auditor";
  const rating = parseFloat(document.getElementById("form-rating").value) || 5.0;
  const description = document.getElementById("form-description").value.trim();
  const githubUrl = document.getElementById("form-github").value.trim();
  const liveDemoUrl = document.getElementById("form-demo").value.trim();
  const posterTheme = document.getElementById("form-theme").value || "monolith";
  const customImageUrl = document.getElementById("form-image").value.trim();

  // Validação simples
  if (!title) {
    alert("Por favor, preencha o título do projeto.");
    return;
  }

  // Quebra stack por vírgulas
  const stack = stackInput
    ? stackInput.split(",").map(s => s.trim()).filter(Boolean)
    : ["TypeScript", "React", "Node.js"];

  const projectPayload = {
    title,
    subtitle,
    year,
    category,
    stack,
    review: review || "★ 5.0 — Código auditado com arquitetura limpa e alta resiliência.",
    reviewer,
    rating,
    description: description || "Projeto de software de alta performance desenvolvido por Victor Gabriel Arvellos.",
    githubUrl,
    liveDemoUrl,
    posterTheme,
    customImageUrl
  };

  if (id) {
    // Atualiza
    store.update(id, projectPayload);
    showToast(`Projeto "${title}" atualizado no arquivo com sucesso!`, "success");
  } else {
    // Adiciona novo
    store.add(projectPayload);
    showToast(`Novo projeto "${title}" publicado no arquivo!`, "success");
  }

  closeProjectModal();
  renderStage();
  renderGrid();
}

function confirmDelete(id) {
  const project = store.getById(id);
  if (!project) return;

  const confirmed = confirm(`Tem certeza que deseja excluir o projeto "${project.title}" do arquivo? Esta ação é irreversível no LocalStorage.`);
  if (confirmed) {
    store.delete(id);
    showToast(`Projeto "${project.title}" excluído do arquivo.`, "danger");
    renderStage();
    renderGrid();
  }
}

function handleDeleteFromModal() {
  if (currentEditingId) {
    confirmDelete(currentEditingId);
    closeProjectModal();
  }
}

// =============================================================================
// 9. MODAL DE INSPEÇÃO TÉCNICA DETALHADA (COLOPHON & TECH SPECS)
// =============================================================================
function openDetailsModal(id) {
  const project = store.getById(id);
  if (!project) return;

  const modal = document.getElementById("details-modal");
  const mount = document.getElementById("details-modal-mount");
  if (!modal || !mount) return;

  const isTcc = project.id === "vga-proj-tcc" || (project.category && project.category.includes("TCC")) || (project.title && project.title.includes("TCC"));

  const posterVisual = project.customImageUrl
    ? `<img src="${project.customImageUrl}" alt="${project.title}" class="w-full h-full object-cover object-top">`
    : generatePosterSvg(project.title, project.year, project.catalogNumber, project.posterTheme || "monolith");

  const stackChips = project.stack.map(st => `
    <span class="inline-block px-3 py-1 text-xs font-tech-mono uppercase bg-neutral-900 border border-neutral-700 text-neutral-200">
      ${st}
    </span>
  `).join("");

  mount.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      
      <!-- Coluna Visual / Pôster -->
      <div class="md:col-span-5 relative border border-neutral-800">
        <div class="aspect-[16/11] md:aspect-[3/4] overflow-hidden relative">
          ${posterVisual}
          ${isTcc ? `
            <div class="absolute top-3 left-3 bg-amber-400 text-black px-2 py-0.5 text-[10px] font-tech-mono font-bold uppercase tracking-wider shadow-md">
              ★ PROJETO PRINCIPAL (TCC)
            </div>
          ` : ''}
        </div>
        <div class="p-3 bg-neutral-950 border-t border-neutral-800 flex justify-between text-[10px] font-tech-mono text-neutral-500 uppercase">
          <span>SPEC SHEET: ${project.catalogNumber}</span>
          <span>FORMAT: PRODUCTION READY</span>
        </div>
      </div>

      <!-- Coluna Editorial & Detalhes -->
      <div class="md:col-span-7 space-y-6">
        
        <div>
          <div class="flex items-center gap-3 text-xs font-tech-mono text-amber-400 mb-1">
            <span>[ ${project.catalogNumber} // RELEASE ${project.year} ]</span>
            ${isTcc ? `<span class="px-2 py-0.5 bg-amber-400 text-black font-bold text-[9px] uppercase tracking-wider">PROJETO PRINCIPAL</span>` : ''}
          </div>
          <h2 class="text-3xl md:text-4xl font-editorial-title font-bold text-white tracking-widest">
            ${project.title}
          </h2>
          <p class="text-xs font-tech-mono uppercase tracking-widest text-neutral-400 mt-1">
            ${project.category} • DESENVOLVIDO POR VICTOR GABRIEL ARVELLOS
          </p>
        </div>

        <!-- Pull-Quote / Review Técnico -->
        <div class="p-4 bg-neutral-950 border-l-2 border-amber-400 border-y border-r border-neutral-800">
          <p class="font-editorial-serif text-lg text-neutral-200 italic">
            "${project.review}"
          </p>
          <p class="mt-2 text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500">
            — AUDITORIA: ${project.reviewer || "Software Architecture Review"}
          </p>
        </div>

        <!-- Sinopse Detalhada -->
        <div>
          <h4 class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500 mb-2">// RELATÓRIO DE ARQUITETURA</h4>
          <p class="text-sm font-editorial-sans text-neutral-300 leading-relaxed">
            ${project.description}
          </p>
        </div>

        <!-- Stack Tecnológica Completa -->
        <div>
          <h4 class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500 mb-2">// STACK TECNOLÓGICA & FERRAMENTAS</h4>
          <div class="flex flex-wrap gap-1.5">
            ${stackChips}
          </div>
        </div>

        <!-- Métricas / Benchmarks se houver -->
        ${project.metrics ? `
          <div>
            <h4 class="text-[10px] font-tech-mono uppercase tracking-widest text-neutral-500 mb-2">// BENCHMARKS DE PRODUÇÃO</h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              ${Object.entries(project.metrics).map(([k, v]) => `
                <div class="p-2.5 bg-neutral-900/60 border border-neutral-800">
                  <div class="text-[9px] font-tech-mono text-neutral-500 uppercase">${k}</div>
                  <div class="text-xs font-tech-mono text-white font-semibold mt-0.5">${v}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Botões de Ação -->
        <div class="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-3">
          ${project.liveDemoUrl ? `
            <a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="btn-a24-primary">
              ACESSAR PROJETO NO VERCEL ↗
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-a24-outline">
              REPOSITÓRIO GITHUB ↗
            </a>
          ` : ''}
          <button onclick="closeDetailsModal(); openEditModal('${project.id}')" class="btn-a24-ghost ml-auto text-xs">
            ✎ EDITAR
          </button>
        </div>

      </div>

    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  soundEngine.playMechanicalClick();
}

function closeDetailsModal() {
  const modal = document.getElementById("details-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  soundEngine.playMechanicalClick();
}

// =============================================================================
// 10. FILTROS & BUSCA
// =============================================================================
function setFilter(category, buttonEl) {
  store.activeFilter = category;
  soundEngine.playMechanicalClick();

  // Atualiza classes ativas nos botões
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.classList.remove("bg-white", "text-black", "font-semibold");
    btn.classList.add("bg-transparent", "text-neutral-400");
  });

  if (buttonEl) {
    buttonEl.classList.remove("bg-transparent", "text-neutral-400");
    buttonEl.classList.add("bg-white", "text-black", "font-semibold");
  }

  renderGrid();
}

function handleSearch(query) {
  store.searchQuery = query;
  renderGrid();
}

function clearFilters() {
  store.activeFilter = "ALL";
  store.searchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const allBtn = document.querySelector('[data-filter="ALL"]');
  setFilter("ALL", allBtn);
}

// =============================================================================
// 11. REDEFINIÇÃO PARA OS PADRÕES (RESET TO DEFAULTS)
// =============================================================================
function resetArchive() {
  const confirmed = confirm("Deseja restaurar os 4 projetos originais (TCC Nana & Mimi, Na Pele do Entregador, CineCatálogo, Fast Shop)? Quaisquer edições manuais serão redefinidas.");
  if (confirmed) {
    store.reset();
    showToast("Arquivo restaurado para os 4 projetos originais!", "info");
    renderStage();
    renderGrid();
  }
}

// =============================================================================
// 12. ANIMAÇÃO DE FILM GRAIN EM CANVAS
// =============================================================================
function initFilmGrain() {
  const canvas = document.getElementById("grain-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });

  let width = 0;
  let height = 0;
  let animationFrameId = null;
  let isRunning = true;

  function resize() {
    width = canvas.width = window.innerWidth / 2;
    height = canvas.height = window.innerHeight / 2;
  }

  function generateNoise() {
    if (!isRunning) return;
    const imgData = ctx.createImageData(width, height);
    const buffer = new Uint32Array(imgData.data.buffer);
    const len = buffer.length;

    for (let i = 0; i < len; i++) {
      // Valor de ruído monocromático
      const color = (Math.random() * 255) | 0;
      buffer[i] = (255 << 24) | (color << 16) | (color << 8) | color;
    }

    ctx.putImageData(imgData, 0, 0);

    // Throttle suave de frames para economizar bateria e CPU
    setTimeout(() => {
      animationFrameId = requestAnimationFrame(generateNoise);
    }, 1000 / 24); // 24 FPS cinematográfico
  }

  window.addEventListener("resize", resize);
  resize();
  generateNoise();

  window.toggleGrain = function() {
    isRunning = !isRunning;
    canvas.style.display = isRunning ? "block" : "none";
    if (isRunning) generateNoise();
    showToast(isRunning ? "Film Grain 35mm ativado" : "Film Grain desativado");
  };
}

// =============================================================================
// 13. RELÓGIO EDITORIAL (LIVE CLOCK)
// =============================================================================
function startLiveClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("pt-BR", { hour12: false });
    clockEl.innerText = `${timeStr} BRT`;
  }

  update();
  setInterval(update, 1000);
}

// =============================================================================
// 14. INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render inicial
  renderStage();
  renderGrid();
  startLiveClock();
  initFilmGrain();

  // Listeners dos botões de navegação do palco
  const nextBtn = document.getElementById("stage-next-btn");
  const prevBtn = document.getElementById("stage-prev-btn");
  if (nextBtn) nextBtn.addEventListener("click", nextStage);
  if (prevBtn) prevBtn.addEventListener("click", prevStage);

  // Navegação por teclado (Setas Esquerda / Direita)
  window.addEventListener("keydown", (e) => {
    // Apenas se nenhum modal ou input estiver aberto
    const modalOpen = !document.getElementById("project-modal").classList.contains("hidden") ||
                      !document.getElementById("details-modal").classList.contains("hidden");
    const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);

    if (modalOpen || isTyping) {
      if (e.key === "Escape") {
        closeProjectModal();
        closeDetailsModal();
      }
      return;
    }

    if (e.key === "ArrowRight") {
      nextStage();
    } else if (e.key === "ArrowLeft") {
      prevStage();
    }
  });

  // Som toggle
  const soundToggleBtn = document.getElementById("sound-toggle-btn");
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      const enabled = soundEngine.toggle();
      const soundStatusText = document.getElementById("sound-status-text");
      const soundBars = document.getElementById("sound-bars-indicator");
      if (soundStatusText) {
        soundStatusText.innerText = enabled ? "AUDIO: ON" : "AUDIO: OFF";
      }
      if (soundBars) {
        soundBars.style.opacity = enabled ? "1" : "0.3";
      }
      showToast(enabled ? "Efeitos sonoros ativados" : "Áudio silenciado");
    });
  }

  // Formulário de Criação/Edição
  const form = document.getElementById("project-form");
  if (form) {
    form.addEventListener("submit", handleProjectFormSubmit);
  }

  // Busca em tempo real
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });
  }
});
