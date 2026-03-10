import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('mobile-item')
export class MobileItem extends LitElement {
  @property({ type: String }) href: string = ''
  @property({ type: String }) label: string = ''
  @property({ type: String }) index: string = ''

  render() {
    return html`<div class="border-b border-zinc-800 xl:border-0">
      <a
        class="menu-item relative flex h-20 items-center px-5 text-[2rem] tracking-tighter text-zinc-100 xl:h-16"
        rel="noopener noreferrer"
        href="${this.href}"
      >
        ${this.label}
        <div
          class="absolute inset-0 flex items-center px-5 text-zinc-950 xl:rounded-full"
        >
          ${this.label}
        </div>
        <span
          class="absolute right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em] opacity-50 mix-blend-difference"
        >
          ${this.index}
        </span>
      </a>
    </div>`
  }

  createRenderRoot() {
    return this
  }
}
