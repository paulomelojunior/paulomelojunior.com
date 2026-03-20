# AGENTS.md

Agentic coding guidelines for pmjr.cc (Paulo Melo Jr. Portfolio)

## Project Overview

Static portfolio website with TypeScript, Lit web components, Vite, Tailwind CSS v4, i18next, GSAP, and Lenis.

## Commands

```bash
# Development
pnpm dev              # Start Vite dev server on port 2121
pnpm build            # Run TypeScript check + Vite build
pnpm preview          # Preview production build locally

# Type checking (included in build)
npx tsc --noEmit      # TypeScript strict type checking

# Formatting
npx prettier --write .   # Format all files
npx prettier --check .  # Check formatting without writing
```

No test commands configured in this project.

## Code Style

### TypeScript

- Strict mode enabled with all strict flags (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, etc.)
- Use explicit types for all properties and function parameters
- Enable `experimentalDecorators` and `useDefineForClassFields: false` in tsconfig

### Prettier

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Imports Order

1. External npm packages (lit, gsap, i18next)
2. Relative project imports (../../store/theme)
3. Component-specific (classnames)

### Naming

- Files: kebab-case (`menu-container.ts`)
- Components: PascalCase (`MenuContainer`)
- Custom elements: kebab-case (`<menu-container>`)
- Interfaces: PascalCase (`ThemeComponent`)

### Component Structure

```typescript
import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('component-name')
export class ComponentName extends LitElement {
  @property({ type: String }) prop = 'default'
  @state() private _internalState = false

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  firstUpdated() {}

  render() {
    return html`...`
  }

  createRenderRoot() {
    return this
  }
}
```

**Important**: Use `createRenderRoot() { return this }` to disable shadow DOM.

### Error Handling

- Use `.catch()` for promises
- Use try/catch for sync operations
- Show user-friendly messages via `alert()` or custom UI

### i18n

- Use i18next for all translatable strings
- Translation files: `src/language/en.json`, `src/language/pt.json`
- Use `i18next.t('key')` in components

### Tailwind CSS

- Use Tailwind v4 with `@tailwindcss/vite` plugin
- Use arbitrary values: `h-[calc(100vh-64px)]`
- Define `--font-sans` in `@theme` block when changing fonts

### Event Handling

- Use Lit's declarative: `@click=${this.handler}`
- Remove listeners in `disconnectedCallback()`

### State Management

- `@state()` for internal reactive state
- `@property()` for parent-passed props
- Store pattern for global state (`src/store/theme.ts`)

## File Organization

```
src/
├── components/
│   └── component-name/
│       ├── index.ts          # Re-exports
│       └── element.ts        # Lit component
├── language/
│   ├── en.json
│   └── pt.json
├── store/
│   └── theme.ts              # Global theme store
├── main.ts
├── i18n.ts
└── seo.ts
```

## Build Output

- Output: `docs/` (GitHub Pages)
- Entry points: `index.html`, `projects.html`, `last-project.html`, `404.html`

## Common Patterns

### Theme (Dark Mode)

```typescript
import { ThemeMixin } from '../../store/theme'

export class MyComponent extends ThemeMixin(LitElement) {
  // Has this.dark and this.toggleTheme()
}
```

### Language Switching

```typescript
i18next.changeLanguage(newLang)
localStorage.setItem('lang', newLang)
```

### GSAP Animation

```typescript
import { gsap } from 'gsap'

firstUpdated() {
  gsap.from(this, { opacity: 0, duration: 0.5 })
}
```