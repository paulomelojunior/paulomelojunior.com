import i18next from '../../store/i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

@customElement('twyne-goal')
export class TwyneGoal extends LitElement {
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
      <section id="goal" class="container px-6 py-24 lg:p-24 2xl:p-32">
        <div class="grid-cols-4 justify-center lg:grid">
          <div
            class="col-span-2 col-start-2 flex flex-col justify-center xl:aspect-square"
          >
            <h2
              class="mb-10 text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
            >
              ${i18next.t('twyne.goal.t1')}
            </h2>
            <p class="text-default mb-8 leading-loose">
              ${unsafeHTML(i18next.t('twyne.goal.p1'))}
            </p>
            <p class="text-default leading-loose">
              ${i18next.t('twyne.goal.p2')}
            </p>
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
