import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('projects-fail')
export class ProjectsFail extends LitElement {
  @property({ type: String }) lang = i18next.language

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

  render() {
    return html`
      <div
        class="hero flex h-dvh flex-col items-center justify-center gap-16 p-8 text-center text-[1.5rem] text-zinc-100 lg:hidden text-balance"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="fill-red-400" viewBox="0 0 256 256">
          <path d="M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L56,60.69V216a24,24,0,0,0,24,24h96a24,24,0,0,0,23.82-21.11l2.26,2.49a8,8,0,1,0,11.84-10.76ZM184,216a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V78.29l112,123.2ZM68.7,24a8,8,0,0,1,8-8H176a24,24,0,0,1,24,24V150.83a8,8,0,1,1-16,0V40a8,8,0,0,0-8-8H76.7A8,8,0,0,1,68.7,24Z"></path>
        </svg>
        ${this.lang === 'pt'
          ? html`Desculpe, esta página ainda não está disponível para telas pequenas.`
          : html`Sorry, this page isn't available for small screens yet.`}
        <a
          href="/"
          class="flex items-center gap-4 rounded-full bg-zinc-100 py-3 pe-6 ps-4 text-[1rem] font-medium leading-none text-zinc-950"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
              stroke="black"
              stroke-width="1.75"
            />
          </svg>
          Go back
        </a>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
