import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../../store/app-mixin'
import p1 from './assets/1.webp'
import s0 from './assets/social-0.webp'
import s1 from './assets/social-1.webp'
import s2 from './assets/social-2.webp'
import s3 from './assets/social-3.webp'
import s4 from './assets/social-4.webp'
import s5 from './assets/social-5.gif'
import s6 from './assets/social-6.webp'
import s7 from './assets/social-7.webp'
import s8 from './assets/social-8.gif'
import s9 from './assets/social-5.webp'

@customElement('projects-multiplayer')
export class ProjectsMultiplayer extends AppMixin(LitElement) {
  render() {
    const contentHtml = `
      <p class="text-[.875rem]">
        ${this.t('multiplayer.description1')}
      </p>
      <p class="mb-3 text-[.875rem]">
        ${this.t('multiplayer.description2')}
      </p>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('multiplayer.metrics.audience.title')}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t('multiplayer.metrics.audience.subtitle')}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('multiplayer.metrics.facebook.title')}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t('multiplayer.metrics.facebook.subtitle')}
        </p>
      </div>
      <div class="my-3 grid gap-2">
        <h3 class="text-[1.25rem] leading-none text-zinc-50">
          ${this.t('multiplayer.metrics.youtube.title')}
        </h3>
        <p class="text-[.875rem] leading-none font-medium">
          ${this.t('multiplayer.metrics.youtube.subtitle')}
        </p>
      </div>
    `

    return html`
      <div id="multiplayer" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t('multiplayer.title')}"
          tags="${this.t('multiplayer.tags')}"
          year="${this.t('multiplayer.year')}"
          .contentHtml=${contentHtml}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${s0}" loading="lazy" />
          <img src="${s1}" loading="lazy" />
          <img src="${s3}" loading="lazy" />
          <img src="${s4}" loading="lazy" />
          <img src="${s8}" loading="lazy" />
          <img src="${s2}" loading="lazy" />
          <img src="${s7}" loading="lazy" />
          <img src="${s9}" loading="lazy" />
          <img src="${s6}" loading="lazy" />
          <img src="${s5}" loading="lazy" />
          <img
            class="col-span-2 border border-zinc-900"
            src="${p1}"
            loading="lazy"
          />
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
