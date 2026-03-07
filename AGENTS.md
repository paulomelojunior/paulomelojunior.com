# AGENTS.md

Agentic coding guidelines for pmjr.cc (Paulo Melo Jr. Portfolio)

## Project Overview

Static portfolio website built with:

- **TypeScript** with strict mode
- **Lit** web components
- **Vite** build tool
- **Tailwind CSS v4**
- **i18next** for internationalization
- **GSAP** for animations
- **Lenis** for smooth scrolling

## Commands

```bash
# Development
npm run dev              # Start Vite dev server on port 2121
npm run build            # Run TypeScript check + Vite build
npm run preview          # Preview production build locally

# Formatting
npx prettier --write .   # Format all files
npx prettier --check .   # Check formatting without writing
```

There are **no test commands** configured in this project.

## Code Style Guidelines

### General

- Use **Lit web components** with `@customElement` decorator
- Use **TypeScript** with strict mode enabled
- All TypeScript strict flags are enforced (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, etc.)

### Formatting (Prettier)

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Imports

Order imports as follows:

1. External npm packages (e.g., `lit`, `gsap`, `i18next`)
2. Relative imports from this project (e.g., `../../i18n`, `./store/theme`)

```typescript
// External
import { gsap } from 'gsap'
import i18next from 'i18n'

// Relative
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'

// Component-specific imports come last
import classNames from 'classnames'
```

### Component Structure

```typescript
import { html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('component-name')
export class ComponentName extends LitElement {
  @property({ type: String }) prop = 'default'
  @state() private _internalState = false

  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  firstUpdated() {
    // Initialization logic
  }

  render() {
    return html`...`
  }

  // Disable shadow DOM for this project
  createRenderRoot() {
    return this
  }
}
```

**Important**: Most components use `createRenderRoot() { return this }` to disable shadow DOM and allow global CSS/Tailwind to work.

### Naming Conventions

- **Files**: kebab-case (e.g., `menu-container.ts`, `languages-button.ts`)
- **Components**: PascalCase (e.g., `MenuContainer`, `LanguagesButton`)
- **Custom elements**: kebab-case (e.g., `<menu-container>`, `<languages-button>`)
- **CSS classes**: Tailwind utility classes + optional custom classes
- **Interfaces**: PascalCase with descriptive names (e.g., `ThemeComponent`)

### Types

- Always define explicit types for properties and state
- Use TypeScript interfaces for component APIs
- Enable strict mode in tsconfig.json

```typescript
interface ThemeComponent {
  dark: boolean
  toggleTheme(): void
}
```

### Error Handling

- Use `.catch()` for promise rejections
- Use try/catch for synchronous error-prone operations
- Display user-friendly error messages via `alert()` or custom UI

```typescript
navigator.clipboard
  .writeText(email)
  .then(() => {
    /* success */
  })
  .catch((error) => {
    alert(`Failed to copy email: ${error}`)
  })
```

### i18n (Internationalization)

- Use i18next for all translatable strings
- Translation files are in `src/language/` (en.json, pt.json)
- Always use `i18next.t('key')` or `<t>` tag in templates

```typescript
i18next.t('menu.praxis')
i18next.t('links.github.url')
```

### Tailwind CSS

- Use Tailwind v4 with `@tailwindcss/vite` plugin
- Use arbitrary values for dynamic styles (e.g., `h-[calc(100vh-64px)]`)
- Use CSS variables from the design system for colors, spacing

### Event Handling

- Use Lit's declarative event binding: `@click=${this.handler}`
- Always remove event listeners in `disconnectedCallback()`

```typescript
@click=${() => this.toggleMore()}
@languageChanged=${this.handleLanguageChange}
```

### State Management

- Use `@state()` for internal reactive state
- Use `@property()` for reactive properties passed from parent
- For global state, use store pattern (see `src/store/theme.ts`)

### Performance

- Minimize DOM queries; prefer Lit's reactive properties
- Use `requestUpdate()` sparingly when manually triggering updates
- Clean up event listeners and subscriptions in `disconnectedCallback()`

## File Organization

```
src/
├── components/
│   ├── component-name/
│   │   ├── index.ts          # Re-exports
│   │   └── element.ts        # Lit component
│   └── twyne/                # Sub-project pages
├── language/
│   ├── en.json
│   └── pt.json
├── store/
│   └── theme.ts              # Global theme store
├── main.ts                   # Entry point, imports all components
├── i18n.ts                   # i18next configuration
└── seo.ts                    # SEO utilities
```

## Build Output

- Output directory: `docs/` (configured for GitHub Pages)
- Multiple entry points: `index.html`, `projects.html`, `last-project.html`, `404.html`

## Common Patterns

### Theme Support (Dark Mode)

```typescript
import { ThemeMixin } from '../../store/theme'

export class MyComponent extends ThemeMixin(LitElement) {
  // Has access to this.dark and this.toggleTheme()
}
```

### Language Switching

```typescript
i18next.changeLanguage(newLang)
localStorage.setItem('lang', newLang)
```
