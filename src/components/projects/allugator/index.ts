import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../../store/app-mixin'
import social1 from './assets/social-1.webp'
import social2 from './assets/social-2.webp'
import social3 from './assets/social-3.webp'
import social4 from './assets/social-4.webp'
import social5 from './assets/social-5.webp'
import social6 from './assets/social-6.webp'

@customElement('projects-allugator')
export class ProjectsAllugator extends AppMixin(LitElement) {
  render() {
    const contentHtml = `
      <p class="mb-3 text-[.875rem]">
        ${this.t('allugator.description')}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('allugator.metrics.valuation.title')}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t('allugator.metrics.valuation.subtitle')}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('allugator.metrics.users.title')}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t('allugator.metrics.users.subtitle')}</p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('allugator.metrics.daily.title')}
        </h3>
        <p class="text-[.875rem] leading-none">${this.t('allugator.metrics.daily.subtitle')}</p>
      </div>
    `

    return html`
      <div id="allugator" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t('allugator.title')}"
          tags="${this.t('allugator.tags')}"
          year="${this.t('allugator.year')}"
          .contentHtml=${contentHtml}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:grid-cols-3 lg:gap-4"
        >
          <img
            class="border border-zinc-900 mix-blend-screen"
            src="${social4}"
            loading="lazy"
          />
          <img src="${social6}" loading="lazy" />
          <img src="${social1}" loading="lazy" />
          <img
            class="mix-blend-screen lg:col-span-2 lg:row-span-2"
            src="${social2}"
            loading="lazy"
          />
          <img src="${social5}" loading="lazy" />
          <img class="border border-zinc-900" src="${social3}" loading="lazy" />
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
