import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('twyne-impact')
export class TwyneImpact extends LitElement {
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
    const items = i18next.t('twyne.impact.l1', {
      returnObjects: true,
    }) as string[]
    return html`
      <div id="impact" class="container grid gap-10 px-6 pt-24 xl:pt-32 xl:px-24 2xl:px-32">
        <h2
          class="text-[2rem] lg:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-100"
        >
          ${unsafeHTML(i18next.t('twyne.impact.t1'))}
        </h2>
        <div class="grid gap-px lg:grid-cols-3 items-center rounded-4xl overflow-hidden">
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${i18next.t('twyne.numbers.t1')}
            </h3>
            <p class="text-pretty text-base/none">
              ${i18next.t('twyne.numbers.p1')}
            </p>
          </div>
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${i18next.t('twyne.numbers.t2')}
            </h3>
            <p class="text-pretty text-base/none">
              ${i18next.t('twyne.numbers.p2')}
            </p>
          </div>
          <div class="grid gap-2 text-center bg-zinc-900 py-12">
            <h3 class="text-[2rem] font-semibold leading-none text-zinc-50 tracking-[-0.04em]">
              ${i18next.t('twyne.numbers.t3')}
            </h3>
            <p class="text-pretty text-base/none">
              ${i18next.t('twyne.numbers.p3')}
            </p>
          </div>
        </div>
        <ul
          class="text-sm leading-loose lg:text-base 2xl:text-[1.25rem] text-zinc-100 grid lg:grid-cols-2 gap-4 lg:gap-0"
        >
          ${items.map(
            (item) =>
              html`<li
                class="flex items-baseline gap-2 lg:gap-4 before:text-zinc-700 before:content-['✦'] text-balance"
              >
                ${item}
              </li>`
          )}
        </ul>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
