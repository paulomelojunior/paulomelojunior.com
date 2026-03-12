import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import logo from './imgs/logo.svg'

@customElement('twyne-header')
export class TwyneHeader extends LitElement {
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
        class="flex flex-col items-start px-5 py-12 pt-8 xl:gap-2 xl:px-14 xl:py-14 xl:pt-16"
      >
        <div class="flex items-center gap-6">
          <img
            src="${logo}"
            class="h-14 border-r border-zinc-700 pr-6"
            alt="Twyne"
          />
          <h1
            class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
          >
            ${i18next.t('twyne.t2')}
          </h1>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
