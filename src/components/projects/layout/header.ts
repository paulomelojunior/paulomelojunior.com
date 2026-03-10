import i18next from '../../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('projects-header')
export class ProjectsHeader extends LitElement {
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
      <div class="mx-5 pt-22 pb-5 lg:pt-32 lg:pb-2">
        <h1
          class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
        >
          ${unsafeHTML(i18next.t('featured.title'))}
        </h1>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
