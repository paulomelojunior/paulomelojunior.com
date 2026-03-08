import './allugator'
import './damus'
import './header'
import './ifficient'
import './item'
import './menu'
import './multiplayer'
import './screens'
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'

@customElement('projects-index')
export class ProjectsIndex extends ThemeMixin(LitElement) {
  render() {
    return html`
      <section class="container px-4 pt-20 lg:pt-12">
        <projects-header></projects-header>
        <projects-ifficient></projects-ifficient>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-damus></projects-damus>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-allugator></projects-allugator>
        <div
          class="my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16"
        ></div>
        <projects-multiplayer></projects-multiplayer>
        <div
          class="mt-8 mb-16 h-px w-full bg-transparent bg-linear-to-r lg:mt-16 lg:mb-32"
        ></div>
        <cases-section></cases-section>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
