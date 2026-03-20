// import { gsap } from 'gsap'
import i18next from '../../store/i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ThemeMixin } from '../../store/theme'

@customElement('method-item')
export class MethodItem extends ThemeMixin(LitElement) {
  @property({ type: String }) lang = i18next.language
  @property({ type: String }) index = '000'
  @property({ type: String }) t = 'Add Title'
  @property({ type: String }) content = 'Add Content'
  @property({ type: Boolean }) open = false

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', () => {
      this.lang = i18next.language
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', () => {
      this.lang = i18next.language
    })
  }

  firstUpdated() {}

  render() {
    return html`
      <div
        class="${this.open
          ? 'col-span-3 bg-zinc-800'
          : 'bg-zinc-900'} flex aspect-square h-full flex-col justify-between rounded-[.25rem] p-6 xl:aspect-[2/1] xl:p-12"
      >
        <span class="mb-2 leading-none text-zinc-400"> ${this.index} </span>
        <h2
          class="text-[1.5rem] leading-none tracking-tighter text-zinc-50 xl:text-[2rem]"
        >
          ${this.t}
        </h2>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
