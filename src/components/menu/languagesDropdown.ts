import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import i18next from '../../i18n'
import classNames from 'classnames'

@customElement('languages-dropdown')
export class LanguagesDropdown extends LitElement {
  @property({ type: Boolean }) langMenu = false
  @property({ type: String }) lang = i18next.language

  constructor() {
    super()
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      this.lang = savedLang
      i18next.changeLanguage(savedLang)
    }
  }

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
  }

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  toggleLangMenu() {
    this.langMenu = !this.langMenu
    // Fecha menu ao sair com mouse
    if (this.langMenu) {
      setTimeout(() => {
        const langMenuEl = this.renderRoot.querySelector<HTMLElement>("#langMenuEl");
        if (langMenuEl) {
          const handleMouseLeave = () => {
            this.langMenu = false
          }
          langMenuEl.removeEventListener("mouseleave", handleMouseLeave)
          langMenuEl.addEventListener("mouseleave", handleMouseLeave, { once: true })
        }
      }, 0)
    }
  }

  selectLanguage(lang: string) {
    i18next.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    this.lang = lang
    this.langMenu = false
  }

  render() {
    return html`
      <div class="relative h-12 flex items-center justify-center">
        <languages-button
          customClasses="${this.langMenu
            ? 'fill-brand-400 hover:fill-brand-300 hover:bg-brand-400/10'
            : 'fill-zinc-300 hover:bg-zinc-50/10 hover:fill-zinc-50'
          }"
          @click=${() => this.toggleLangMenu()}
          title="${this.lang === 'en'
            ? 'Mudar para português'
            : 'Change to english'
          }"
        ></languages-button>
        <ul
          id="langMenuEl"
          class="transition-all flex flex-col absolute font-medium gap-2 outline-1 outline-zinc-800 bg-zinc-900 right-0 top-full mt-2.5 p-2 rounded-[1.5rem]
            ${this.langMenu ? 'scale-100 blur-none' : 'opacity-0 invisible -translate-y-4 blur-sm'}"
        >
          <li>
            <button
              @click=${() => this.selectLanguage('en')}
              class=${classNames(
                "w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",
                this.lang === 'en'
                  ? 'bg-zinc-100 text-zinc-950 hover:bg-white'
                  : 'hover:bg-zinc-50/10 hover:text-zinc-50'
              )}
            >
              English
            </button>
          </li>
          <li>
            <button
              @click=${() => this.selectLanguage('pt')}
              class=${classNames(
                "w-full pt-2 pb-2.5 px-4 rounded-full text-[.875rem] leading-none transition-all active:scale-95 duration-[200ms]",
                this.lang === 'pt'
                  ? 'bg-zinc-100 text-zinc-950 hover:bg-white'
                  : 'hover:bg-zinc-50/10 hover:text-zinc-50'
              )}
            >
              Português
            </button>
          </li>
        </ul>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}