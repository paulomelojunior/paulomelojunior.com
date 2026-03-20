import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../../store/app-mixin'
import pic1 from './assets/1.webp'
import pic2 from './assets/2.webp'
import pic3 from './assets/3.webp'
import pic4 from './assets/4.webp'
import pic5 from './assets/5.webp'

@customElement('projects-damus')
export class ProjectsDamus extends AppMixin(LitElement) {
  private renderDescription() {
    return `${this.t('damus.description1')}`
  }

  render() {
    const contentHtml = `
      <p class="text-[.875rem]">
        ${this.renderDescription()}
      </p>
      <p class="text-[.875rem]">
        ${this.t('damus.description2')}
      </p>
    `

    return html`
      <div id="damus" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${this.t('damus.title')}"
          tags="${this.t('damus.tags')}"
          year="${this.t('damus.year')}"
          .contentHtml=${contentHtml}
        ></item-header>
        <div
          class="grid grid-cols-2 gap-2 *:rounded-[.5rem] lg:col-span-2 lg:gap-4"
        >
          <img src="${pic1}" loading="lazy" class="border border-zinc-900" />
          <img src="${pic2}" loading="lazy" />
          <img src="${pic3}" loading="lazy" />
          <img src="${pic5}" loading="lazy" />
          <img
            class="col-span-2 border border-zinc-900"
            src="${pic4}"
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
