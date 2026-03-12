# Paulo Melo Jr. Portfolio

Personal portfolio website built with modern web technologies. A showcase of my work as a digital product designer and creative coder.

## Tech Stack

- **TypeScript** with strict mode
- **Lit** Web Components
- **Vite** Build tool
- **Tailwind CSS v4**
- **i18next** Internationalization
- **GSAP** Animations
- **Lenis** Smooth scrolling

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Type checking
npx tsc --noEmit

# Formatting
npx prettier --write .
npx prettier --check .
```

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark mode support
- Multi-language support (English & Portuguese)
- Smooth scroll animations
- SEO optimized
- PWA ready

## Project Structure

```
src/
├── components/          # Lit web components
├── language/            # i18n translations (en.json, pt.json)
├── store/               # Global state (theme)
├── main.ts              # Entry point
├── i18n.ts              # i18next config
└── seo.ts               # SEO utilities
```

## Deployment

Build output goes to `docs/` directory (configured for GitHub Pages).

## AGENTS.md

For AI agents working on this project, see [AGENTS.md](./AGENTS.md) for code style and technical guidelines.