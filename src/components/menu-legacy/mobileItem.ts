import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('mobile-item')
export class MobileItem extends LitElement {
  @property({ type: String }) href: string = ''
  @property({ type: String }) label: string = ''

  render() {
    return html`<div class="border-b border-zinc-900 xl:border-0">
      <a
        target="_blank"
        class="menu-item text-brand-900 relative flex h-20 items-center px-5 pt-1 text-zinc-100 xl:h-16"
        rel="noopener noreferrer"
        href="${this.href}"
      >
        ${this.label}
        <div
          class="absolute inset-0 flex items-center px-5 pt-1 text-zinc-950 xl:rounded-full"
        >
          ${this.label}
        </div>
      </a>
    </div>`
  }

  createRenderRoot() {
    return this
  }
}
