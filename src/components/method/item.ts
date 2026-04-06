// import { gsap } from 'gsap'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { AppMixin } from '../../store/app-mixin'

@customElement('method-item')
export class MethodItem extends AppMixin(LitElement) {
  @property({ type: String }) index = '000'
  @property({ type: String }) title = 'Add Title'
  @property({ type: String }) content = 'Add Content'
  @property({ type: Boolean }) open = false

  firstUpdated() {}

  render() {
    return html`
      <div
        class="${this.open
          ? 'col-span-3 bg-zinc-800'
          : 'bg-zinc-900'} flex aspect-square h-full flex-col rounded-[.25rem] p-5 xl:aspect-video xl:p-10"
      >
        <span class="mb-2 leading-none text-zinc-500"> ${this.index} </span>
        <h2
          class="mt-auto mb-2 text-[1.5rem] leading-none tracking-tighter text-zinc-50 xl:text-[2rem]"
        >
          ${this.title}
        </h2>
        <p class="text-default hidden">${this.content}</p>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
