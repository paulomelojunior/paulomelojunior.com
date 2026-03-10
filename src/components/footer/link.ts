import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('footer-link')
export class FooterLink extends LitElement {
  @property({ type: String }) url = ''
  @property({ type: String }) label = ''
  @property({ type: String }) index = '000'
  @property({ type: String }) target = '_blank'
  @property({ type: String }) rel = 'noopener noreferrer'

  render() {
    return html`
      <a
        href="${this.url}"
        target="${this.target}"
        rel="${this.rel}"
        class="group relative flex h-20 items-center border-b border-zinc-900 px-5 text-zinc-50 transition-colors duration-400 group-hover/item:text-zinc-700 hover:text-white lg:h-auto lg:border-0 lg:bg-transparent"
      >
        ${this.label}
        <div
          class="bg-brand-400 pointer-events-none absolute -bottom-6 left-1/2 hidden w-4 -translate-x-1/2 translate-y-8 -rotate-180 justify-center rounded-full opacity-0 transition-[opacity_transform_width] duration-400 group-hover:w-6 group-hover:translate-y-0 group-hover:rotate-180 group-hover:opacity-100 lg:flex"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="size-4 fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9385 8.60896C13.9091 8.20693 14.9494 8 16 8C14.9494 8 13.9091 7.79307 12.9385 7.39104C11.9679 6.989 11.086 6.39972 10.3431 5.65685C9.60028 4.91399 9.011 4.03207 8.60896 3.06147C8.20693 2.09086 8 1.05057 8 0C8 2.12173 7.15714 4.15657 5.65685 5.65686C4.15656 7.15715 2.12173 8 0 8C1.05057 8 2.09086 8.20693 3.06147 8.60896C4.03207 9.011 4.91399 9.60028 5.65686 10.3431C6.39972 11.086 6.989 11.9679 7.39104 12.9385C7.79307 13.9091 8 14.9494 8 16C8 14.9494 8.20693 13.9091 8.60896 12.9385C9.011 11.9679 9.60028 11.086 10.3431 10.3431C11.086 9.60028 11.9679 9.011 12.9385 8.60896Z"
            />
          </svg>
        </div>
        <span
          class="absolute right-6 bottom-6 font-mono text-[.75rem] tracking-wider opacity-50 mix-blend-difference lg:hidden"
        >
          ${this.index}
        </span>
      </a>
    `
  }

  createRenderRoot() {
    return this
  }
}
