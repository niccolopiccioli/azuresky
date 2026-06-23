# AzureSky Airlines

Brand landing page for **AzureSky Airlines** — a modern airline concept built with vanilla HTML5, CSS3, and JavaScript (ES2022).

Apple-inspired aesthetic with glassmorphism, smooth animations, and responsive layout.

## Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 (landmark roles, native forms) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `backdrop-filter`, `clamp()` |
| Script | Vanilla JS ES2022 — `IntersectionObserver`, `requestAnimationFrame` |
| Fonts | `-apple-system`, Inter |

## Sections

- **Navbar** — sticky with glassmorphism on scroll
- **Hero** — animated airplane, stars, animated counters
- **Search** — flight search form with validation
- **Destinations** — filterable grid by continent (12 destinations)
- **Services** — 6 service cards with hover effects
- **Fleet** — tab switcher with 3 aircraft models
- **CTA Banner** — gradient promotional section
- **Testimonials** — auto-sliding carousel with dot navigation
- **Contact** — contact form
- **Footer** — links, social, legal

## Getting Started

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Key CSS

- `backdrop-filter: blur()` — frosted glass effect
- CSS Custom Properties — design token system
- `clamp()` — fluid typography
- Custom `cubic-bezier` — spring animations
- `@keyframes` — native animations (airplane, stars)

## Key JavaScript

- `IntersectionObserver` — scroll reveals, animated counters
- `requestAnimationFrame` — smooth counter animation
- `data-*` attributes — destination filtering, fleet tabs
- Event delegation with proper cleanup
- Keyboard navigation (Enter/Space on filter buttons)
- Mouse parallax on hero section
