// import { gsap } from 'gsap'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../store/app-mixin'
import './item'

@customElement('method-section')
export class MethodSection extends AppMixin(LitElement) {
  firstUpdated() {}

  render() {
    return html`
      <section class="">
        <div class="container">
          <div
            class="grid grid-cols-2 gap-[2px] overflow-hidden rounded-4xl px-0.5 *:contents md:grid-cols-4"
          >
            <method-item
              index="001"
              title=${this.t('method.1')}
              content="It all begins with a no-stress chat. Without compromises."
            ></method-item>
            <method-item
              index="002"
              title=${this.t('method.2')}
              content="We analyze your brand and strategize a custom roadmap."
            ></method-item>
            <method-item
              index="003"
              title=${this.t('method.3')}
              content="Time to design and ask for feedback. We lock in and work."
            ></method-item>
            <method-item
              index="004"
              title=${this.t('method.4')}
              content="It's go-time! We launch your project, monitor its impact, and make adjustments to maximize performance."
            ></method-item>
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
