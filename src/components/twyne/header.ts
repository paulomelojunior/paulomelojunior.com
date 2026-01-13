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
      <div class="flex flex-col items-start xl:gap-2 xl:px-14 px-5 py-16 pb-14 xl:pb-16">
        <div class="flex items-center gap-6">
          <img src="${logo}" class="h-14 border-r border-zinc-700 pr-6" />
          <h1
            class="xl:h-14 leading-none tracking-[-0.04em] text-[3rem] 2xl:text-[4rem] text-zinc-100"
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
