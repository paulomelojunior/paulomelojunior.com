import i18next from '../../i18n'
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
      <div class="pt-12 pb-4 lg:pb-8">
        <div class="flex items-center gap-6">
          <h1
            class="text-[2rem] leading-none tracking-tight text-zinc-50 lg:text-[3rem] 2xl:text-[4rem]"
          >
            ${unsafeHTML(i18next.t('featured.title'))}
          </h1>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
