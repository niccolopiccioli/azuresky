# AzureSky Airlines — Website

Sito web moderno per la compagnia aerea **AzureSky Airlines**, realizzato con HTML5, CSS3 e JavaScript vanilla puro, con estetica ispirata ad Apple.

## Stack tecnologico

| Layer      | Tecnologia                                                    |
|------------|---------------------------------------------------------------|
| Markup     | HTML5 semantico (landmark roles, form nativo)                 |
| Stile      | CSS3 — Custom Properties, Grid, Flexbox, `backdrop-filter`    |
| Script     | Vanilla JS ES2022 — `IntersectionObserver`, `requestAnimationFrame` |
| Font       | Sistema nativo (`-apple-system`, `BlinkMacSystemFont`, Inter) |
| Server     | Python 3 `http.server` (sviluppo locale)                      |

## Struttura del progetto

```
prova1/
├── index.html     # Struttura HTML
├── style.css      # Design system Apple-inspired
├── script.js      # Logica interattiva
├── README.md      # Questo file
└── CLAUDE.md      # Istruzioni per Claude Code
```

## Sezioni del sito

- **Navbar** — sticky con effetto glassmorphism allo scroll
- **Hero** — animazione aereo in volo, stelle, contatori animati
- **Search** — form di ricerca voli con validazione
- **Destinations** — grid filtrabile per continente (12 destinazioni)
- **Services** — 6 card servizi con hover effect
- **Fleet** — tab switcher con 3 modelli di aereo
- **CTA Banner** — offerta con gradiente
- **Testimonials** — slider automatico con dot navigation
- **Contact** — form di contatto
- **Footer** — link, social, legal

## Come avviare

```bash
cd /home/nicco/Code/prova1
python3 -m http.server 8080
```

Poi apri `http://localhost:8080` nel browser.

## Features CSS moderne

- `backdrop-filter: blur()` — effetto frosted glass
- CSS Custom Properties — design token system
- CSS Grid + Flexbox — layout adattivo
- `clamp()` — tipografia fluida
- `cubic-bezier` custom — animazioni spring
- `@keyframes` — animazioni nativo (aereo, stelle, sfondo)

## Features JS moderne

- `IntersectionObserver` — reveal on scroll, contatori
- `requestAnimationFrame` — counter animation smooth
- `performance.now()` — timing preciso animazioni
- `data-*` attributes — filtri destinazioni, tab fleet
- Event delegation e cleanup corretto
- Keyboard navigation (Enter/Space sui filter btn)
- Parallax su mousemove in hero
