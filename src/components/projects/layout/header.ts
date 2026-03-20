import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { AppMixin } from '../../../store/app-mixin'

@customElement('projects-header')
export class ProjectsHeader extends AppMixin(LitElement) {
  render() {
    return html`
      <div class="mx-5 pt-22 pb-5 lg:pt-32 lg:pb-2">
        <h1
          class="text-[3rem] leading-none tracking-tighter text-zinc-50 2xl:text-[4rem]"
        >
          ${unsafeHTML(this.t('featured.title'))}
        </h1>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
