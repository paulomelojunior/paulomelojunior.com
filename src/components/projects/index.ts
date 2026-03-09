import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'
import './layout/header'
import './layout/item-header'
import './layout/menu'
import './allugator'
import './damus'
import './ifficient'
import './multiplayer'

@customElement('projects-index')
export class ProjectsIndex extends ThemeMixin(LitElement) {
  render() {
    return html`
      <section class="container">
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
          class="hidden lg:block my-8 h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:my-16 lg:mb-32"
        ></div>
        <cases-section></cases-section>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
