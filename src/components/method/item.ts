// import { gsap } from 'gsap'
import i18next from '../../i18n'
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

  firstUpdated() {

  }

  render() {
    return html`
			<div class="aspect-square xl:aspect-[2/1] p-6 xl:p-12 flex flex-col rounded-[.125rem] justify-between h-full ${this.open ? 'col-span-3 bg-zinc-800' : 'bg-zinc-900'}">
				<span class="leading-none mb-2 text-zinc-600">
					${this.index}
				</span>
				<h2 class="text-[1.5rem] xl:text-[2rem] leading-none text-zinc-50 tracking-[-0.02rem]">
					${this.t}
				</h2>
			</div>
    `
  }

  createRenderRoot() {
    return this
  }
}
