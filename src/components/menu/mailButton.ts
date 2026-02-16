import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import classNames from 'classnames'

@customElement('mail-button')
export class MailButton extends LitElement {
  @property({ type: String }) href: string = ''
  @property({ type: String }) label: string = ''
  @property({ type: String }) hover: string = ''

  render() {
    const classList = classNames(
      'flex px-3 tracking-wide gap-2 text-zinc-50 text-[.75rem] uppercase items-center py-2.5 leading-none rounded-full whitespace-nowrap font-medium active:scale-95'
    )

    return html`<button class="menu-item group/item ${classList} relative">
      <div
        class="${classList} pointer-events-none absolute inset-0 justify-center"
        aria-hidden="true"
      >
        <span class="text-zinc-950">
          ${this.hover ? this.hover : this.label}
        </span>
      </div>
      ${this.label}
    </button>`
  }

  createRenderRoot() {
    return this
  }
}