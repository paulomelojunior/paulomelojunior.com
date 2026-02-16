// import { gsap } from 'gsap'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './item'

import { ThemeMixin } from '../../store/theme'

@customElement('method-section')
export class MethodSection extends ThemeMixin(LitElement) {
  @property({ type: String }) lang = i18next.language

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
      <section class="">
        <div class="container">
          <div class="*:contents grid grid-cols-2 md:grid-cols-4 rounded-4xl overflow-hidden gap-[2px]">
            <method-item
              index="001"
              t=${i18next.t('method.1')}
              content="It all begins with a no-stress chat. Without compromises."
            ></method-item>
            <method-item
              index="002"
              t=${i18next.t('method.2')}
              content="We analyze your brand and strategize a custom roadmap."
              ></method-item>
              <method-item
              index="003"
              t=${i18next.t('method.3')}
              content="Time to design and ask for feedback. We lock in and work."
            ></method-item>
            <method-item
              index="004"
              t=${i18next.t('method.4')}
              content="It's go-time! We launch your project, monitor its impact, and make adjustments to maximize performance."></method-item>
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
