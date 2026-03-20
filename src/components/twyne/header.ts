import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../store/app-mixin'
import logo from './imgs/logo.svg'

@customElement('twyne-header')
export class TwyneHeader extends AppMixin(LitElement) {
  render() {
    return html`
      <div
        class="flex flex-col items-start px-5 py-12 pt-8 xl:gap-2 xl:px-14 xl:py-14 xl:pt-16"
      >
        <div class="flex items-center gap-6">
          <img
            src="${logo}"
            class="h-14 border-r border-zinc-700 pr-6"
            alt="Twyne"
          />
          <h1
            class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
          >
            ${this.t('twyne.t2')}
          </h1>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
