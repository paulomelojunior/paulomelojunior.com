import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('progressive-blur')
export class ProgressiveBlur extends LitElement {
  @property({ type: Boolean }) reverse: boolean = false
  @property({ type: String }) customClass: string = ''

  render() {
    return html`
      <div class="progressive-blur ${this.reverse ? 'progressive-blur--reverse' : ''} ${this.customClass}">
        ${Array.from({ length: 6 }, () => html`<div></div>`)}
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
