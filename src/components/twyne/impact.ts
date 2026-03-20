import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { AppMixin } from '../../store/app-mixin'

@customElement('twyne-impact')
export class TwyneImpact extends AppMixin(LitElement) {
  render() {
    const items = this.t('twyne.impact.l1' as Parameters<typeof this.t>[0], {
      returnObjects: true,
    }) as string[]
    return html`
      <div
        id="impact"
        class="container grid gap-10 px-6 pt-24 xl:px-24 xl:pt-32 2xl:px-32"
      >
        <h2
          class="text-[2rem] leading-none tracking-tighter text-zinc-50 lg:text-[2.5rem] 2xl:text-[3rem]"
        >
          ${unsafeHTML(this.t('twyne.impact.t1'))}
        </h2>
        <div
          class="grid items-center gap-px overflow-hidden rounded-4xl lg:grid-cols-3"
        >
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t('twyne.numbers.t1')}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t('twyne.numbers.p1')}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t('twyne.numbers.t2')}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t('twyne.numbers.p2')}
            </p>
          </div>
          <div class="grid gap-2 bg-zinc-900 py-12 text-center">
            <h3
              class="text-[2rem] leading-none font-semibold tracking-tighter text-zinc-50"
            >
              ${this.t('twyne.numbers.t3')}
            </h3>
            <p class="text-base/none text-pretty">
              ${this.t('twyne.numbers.p3')}
            </p>
          </div>
        </div>
        <ul
          class="grid gap-4 text-sm leading-loose text-zinc-50 lg:grid-cols-2 lg:gap-0 lg:text-base 2xl:text-[1.25rem]"
        >
          ${items.map(
            (item) =>
              html`<li
                class="flex items-baseline gap-2 text-balance before:text-zinc-700 before:content-['✦'] lg:gap-4"
              >
                ${item}
              </li>`
          )}
        </ul>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
