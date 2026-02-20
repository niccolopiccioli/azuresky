# CLAUDE.md — AzureSky Airlines

Istruzioni per Claude Code quando lavora in questo progetto.

## Progetto

Sito web **frontend-only** per la compagnia aerea fittizia AzureSky Airlines.
Nessun framework, nessun bundler, nessun build step — HTML/CSS/JS puri.

## Regole di sviluppo

- **Nessun framework JS** (no React, Vue, Svelte). Solo Vanilla JS ES2022+.
- **Nessun CSS framework** (no Tailwind, Bootstrap). Solo CSS custom con Custom Properties.
- **Nessun bundler** (no Vite, Webpack). I file si servono direttamente.
- **Nessuna dipendenza npm**. Il sito deve girare aprendo `index.html` o via `python3 -m http.server`.

## Stile di codice

- CSS: BEM-like class naming, Custom Properties per tutti i colori/shadow/radius.
- JS: `'use strict'`, funzioni con nomi chiari, nessun `var`.
- Accessibilità: `aria-label` sui bottoni icon-only, `alt` sulle immagini, `label` su ogni campo form.
- Preferire `const` e destrutturazione. Evitare mutation inutile.

## Server di sviluppo

```bash
python3 -m http.server 8080
```

URL: `http://localhost:8080`

## Palette colori (CSS variables)

```
--blue:   #0071e3   (primary, Apple blue)
--black:  #1d1d1f   (testo principale)
--mid:    #6e6e73   (testo secondario)
--light:  #86868b   (testo terziari)
--border: #d2d2d7
--bg:     #f5f5f7   (sfondo sezioni alternate)
```

## Font

Font stack nativo Apple: `-apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', Arial, sans-serif`

## File principali

| File         | Responsabilità                              |
|--------------|---------------------------------------------|
| `index.html` | Struttura semantica HTML5                   |
| `style.css`  | Design system, layout, animazioni           |
| `script.js`  | Data, render funzioni, event handlers, init |

## Dati statici (in script.js)

- `destinations[]` — array di 12 destinazioni con region, price, duration
- `fleetData{}` — 3 aerei con specs
- `testimonials[]` — array di slide con 2 card ciascuna

Per aggiungere destinazioni: inserire un oggetto nell'array `destinations` rispettando la struttura esistente.
