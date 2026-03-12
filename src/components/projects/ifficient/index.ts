import i18next from '../../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import home from './assets/homepage-preview.webp'
import e1 from './assets/e1.webp'
import e2 from './assets/e2.webp'
import e3 from './assets/e3.webp'
import p0 from './assets/homepage-0.webp'
import p1 from './assets/homepage-1.webp'
import p2 from './assets/homepage-2.webp'
import p3 from './assets/homepage-3.webp'
import p4 from './assets/homepage-4.webp'
import p5 from './assets/homepage-5.webp'
import p6 from './assets/homepage-6.webp'
import p7 from './assets/homepage-7.webp'
import p8 from './assets/homepage-8.webp'
import './zoom'

const homepageImages = [
  { src: p0, width: 1920, height: 1136, class: 'rounded-t-[.5rem]' },
  { src: p1, width: 1920, height: 800 },
  { src: p2, width: 1920, height: 800 },
  { src: p3, width: 1920, height: 800 },
  { src: p4, width: 1920, height: 800 },
  { src: p5, width: 1920, height: 800 },
  { src: p6, width: 1920, height: 800 },
  { src: p7, width: 1920, height: 800 },
  { src: p8, width: 1920, height: 236, class: 'rounded-b-[.5rem]' },
]

@customElement('projects-ifficient')
export class ProjectsIfficient extends LitElement {
  @property({ type: String }) lang = i18next.language

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
  }

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  private openZoom = () => {
    const el = document.createElement('img-zoom') as HTMLElement & {
      images: typeof homepageImages
    }
    el.images = homepageImages
    document.body.appendChild(el)
  }

  render() {
    const contentHtml = `
      <p class="text-[.875rem]">
        ${i18next.t('ifficient.description1')}
      </p>
      <p class="text-[.875rem]">
        ${i18next.t('ifficient.description2')}
      </p>
      <a
        href="${i18next.t('links.lastProject.url')}"
        class="cta-button cta-button--accent inline-flex items-center gap-4 mt-3 lg:mt-7 px-6"
      >
        ${i18next.t('ifficient.cta')}
      </a>
    `

    return html`
      <div id="ifficient" class="mx-5 py-8 lg:grid lg:grid-cols-3 lg:py-16">
        <item-header
          title="${i18next.t('ifficient.title')}"
          tags="${i18next.t('ifficient.tags')}"
          .contentHtml=${contentHtml}
        ></item-header>
        <div class="grid gap-4 *:rounded-[.75rem] lg:col-span-2">
          <div
            class="group relative aspect-video cursor-pointer overflow-hidden border-2 border-zinc-800 before:absolute before:inset-0 before:transition-colors before:duration-200 hover:before:bg-zinc-950/50 before:hover:opacity-1"
            @click=${this.openZoom}
          >
            <img
              id="ifficient-homepage"
              class="w-full"
              src="${home}"
              alt="Ifficient homepage"
            />
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100/15 px-5 py-3 text-[1rem] leading-[20px] font-medium text-zinc-50 opacity-0 backdrop-blur transition-all duration-200 group-hover:opacity-100 hover:bg-zinc-100/30"
            >
              ${i18next.t('ifficient.fullView')}
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2 *:rounded-[.75rem] lg:gap-4">
            <img
              src="${e2}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 1"
            />
            <img
              src="${e1}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 2"
            />
            <img
              src="${e3}"
              loading="lazy"
              decoding="async"
              alt="Ifficient screenshot 3"
            />
          </div>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
