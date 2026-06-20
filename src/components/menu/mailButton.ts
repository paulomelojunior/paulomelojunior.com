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
      'flex px-3 gap-2 text-zinc-50 text-sm items-center h-8 pb-px leading-none rounded-full whitespace-nowrap active:scale-95'
    )

    return html`<button class="${classList} menu-item group/item relative">
      <div
        class="${classList} pointer-events-none absolute inset-0 justify-center font-medium"
        aria-hidden="true"
      >
        <span class="tracking-normal text-zinc-950">
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
