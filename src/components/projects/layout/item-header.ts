import { LitElement, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'

@customElement('item-header')
export class ItemHeader extends LitElement {
  @property({ type: String }) title: string = ''
  @property({ type: String }) tags: string = ''
  @property({ type: String }) year: string = '2025'
  @property({ type: String }) contentHtml: string = ''

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    const headerList = this.tags.split(',').map((item) => item.trim())
    const headerTags = headerList.map(
      (item) =>
        html`<span class="text-[.875rem] text-zinc-600">/</span
          ><span class="text-zinc-50">${item}</span>`
    )

    return html`
      <div
        class="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:grid lg:items-end lg:gap-8"
      >
        <div
          class="mb-6 flex flex-wrap gap-2 text-[.875rem] leading-none lg:mb-1"
        >
          <span class="text-brand-400"> ${this.year} </span>
          ${headerTags}
        </div>
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem]"
        >
          ${this.title}
        </h2>
        ${this.contentHtml
          ? html`<div
              class="mt-4 flex flex-col items-start gap-3 leading-loose text-balance lg:mt-0"
            >
              ${unsafeHTML(this.contentHtml)}
            </div>`
          : null}
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
