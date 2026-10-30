# Victor Gabriel Arvellos — Portfólio Editorial A24

Aplicação web completa, responsiva e autoral de portfólio para **Victor Gabriel Arvellos (Software Engineer / Full Stack Developer)**, concebida com base na linguagem visual e minimalista da produtora cinematográfica **A24** e inspirada na arquitetura de navegação de mídia física de [a24.raviklaassens.com](https://a24.raviklaassens.com).

---

## ✦ Conceito & Adaptação da Linguagem Cinemática

| Elemento Original de Cinema | Adaptação para Engenharia de Software |
| :--- | :--- |
| **Catálogo de Filmes / Discos** | **Repositório de Sistemas & Projetos de Software** |
| **Elenco & Direção (Cast & Crew)** | **Stack Tecnológica** (TypeScript, React, Node.js, Python, PostgreSQL, Go) |
| **Crítica Especializada / Laurels de Festivais** | **Review Técnico & Avaliação do Código** (Auditoria de latência, concorrência, microsserviços) |
| **Trailer / Lançamento nos Cinemas** | **Live Demo & Código Fonte no GitHub** |
| **Lombada & Estojo Jewel Case** | **Estojo físico com disco holográfico interativo 3D** |

---

## ✦ Principais Funcionalidades

1. **Palco Interativo de Mídia Física (Inspirado no layout do Ravi Klaassens)**:
   - Apresentação em perspectiva 3D do estojo do projeto com disco óptico giratório deslizante e reflexo holográfico iridescente.
   - Navegação fluida entre os lançamentos por botões, scrubbers de paginação ou **pelas setas do teclado (`←` e `→`)**.
   - Reprodução de clique mecânico suave e chimes via **Web Audio API** nativa (sem dependência de arquivos externos).

2. **Catálogo Editorial em Grade**:
   - Cards com proporção de pôster cinematográfico 35mm.
   - Puxada editorial de avaliação do código com aspas e louros.
   - Chips de Stack Tecnológica com tipografia monospace de precisão (`JetBrains Mono`).
   - Links diretos com redirecionamento limpo para **GitHub** e **Live Demo**.

3. **Sistema Completo de Gerenciamento de Projetos (CRUD no Navegador)**:
   - **Adicionar Novo Projeto**: Modal interativo completo com validação de dados.
   - **Editar Projeto Existente**: Atualize título, ano, stack, avaliação, links ou troque o tema visual.
   - **Excluir Projeto**: Confirmação segura para remoção do arquivo.
   - **Persistência Automática em LocalStorage**: Suas alterações ficam salvas no navegador.
   - **Restaurar Padrões**: Botão de restauração rápida para recarregar os projetos originais curados a qualquer momento.

4. **Estética Visual Refinada**:
   - Fundo escuro profundo (`#0a0a0a`).
   - Linhas finas de demarcação (*hairline borders* em `#222`).
   - Tipografia de alta costura em caixa alta para títulos (`Cinzel`), corpo editorial em serif (`Cormorant Garamond`) e especificações em monospace técnico (`JetBrains Mono`).
   - Camada de granulado de película 35mm em canvas dinâmico (com opção de ligar/desligar).

---

## ✦ Projetos Pré-Carregados de Exemplo

1. **NEXUS HYPERGRAPH (2026)**
   - *Categoria*: Distributed Systems
   - *Stack*: TypeScript, Rust, Node.js, WebSockets, Redis, PostgreSQL
   - *Review Técnico*: *"★ 5.0 — Arquitetura de microsserviços impecável com concorrência massiva e latência sub-5ms em produção."*

2. **CHRONOS KERNEL (2025)**
   - *Categoria*: FinTech & Core Backend
   - *Stack*: Go, React 19, Next.js, Kafka, PostgreSQL, Docker, AWS
   - *Review Técnico*: *"★ 4.9 — Alta resiliência transacional; processamento assíncrono de milhões de transações sem perda de integridade."*

3. **AETHER SYNAPSE (2024)**
   - *Categoria*: AI & Full Stack
   - *Stack*: Python, FastAPI, React, PyTorch, TailwindCSS, Milvus, Docker
   - *Review Técnico*: *"★ 5.0 — Pipeline de inferência neural ultra-otimizado com quantized embeddings e interface editorial elegante."*

---

## ✦ Como Executar

### Opção 1: Abrir diretamente no Navegador
Por ser construído em padrões web modernos e autônomos, basta dar **dois cliques em `index.html`** ou arrastá-lo para qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local via Node.js
```bash
# Iniciar servidor estático local na porta 3000
npm start
# ou
npx serve .
```
Acesse em seu navegador: `http://localhost:3000`

---

## ✦ Estrutura de Arquivos

```
vitao/
├── index.html        # Estrutura semântica, cabeçalhos, palco e modais
├── style.css         # Variáveis A24, tipografia, disco 3D, film grain e bordas
├── app.js            # Store LocalStorage, Web Audio API, gerenciamento CRUD e render
├── package.json      # Metadados do projeto e scripts de execução
└── README.md         # Documentação e guia do sistema
```
