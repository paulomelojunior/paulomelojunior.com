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
              content="Good design starts with a conversation."
            ></method-item>
            <method-item
              index="002"
              title=${this.t('method.2')}
              content="Craft and test ideas until it feels right."
            ></method-item>
            <method-item
              index="003"
              title=${this.t('method.3')}
              content="Bringing vision to life."
            ></method-item>
            <method-item
              index="004"
              title=${this.t('method.4')}
              content="Iterate, improve continuously."
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