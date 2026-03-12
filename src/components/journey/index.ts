import i18next from '../../i18n'
import { LitElement, PropertyValues, html, nothing } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'

import { ThemeMixin } from '../../store/theme'

interface JourneyItem {
  hide: boolean
  start: string
  end: string
  title: string
  description: string
  custom?: string
  more?: string
}

@customElement('journey-section')
export class JourneySection extends ThemeMixin(LitElement) {
  @property({ type: String }) lang = i18next.language

  private get journeyItems(): JourneyItem[] {
    return [
      {
        hide: false,
        custom: 'text-brand-400',
        start: '2019',
        end: '2025',
        title: i18next.t('journey.t4'),
        description: i18next.t('journey.p4'),
      },
      {
        hide: false,
        start: '2018',
        end: '2019',
        title: i18next.t('journey.t3'),
        description: i18next.t('journey.p3'),
        more: i18next.t('journey.m3'),
      },
      {
        hide: false,
        start: '2016',
        end: '2018',
        title: i18next.t('journey.t2'),
        description: i18next.t('journey.p2'),
        more: i18next.t('journey.m2'),
      },
      {
        hide: false,
        start: '2015',
        end: '2016',
        title: i18next.t('journey.t1'),
        description: i18next.t('journey.p1'),
      },
    ]
  }

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
    this.requestUpdate()
  }

  private renderJourneyHeader() {
    return html`
      <h2
        class="px-5 text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:px-20 xl:text-[3rem] 2xl:px-32 2xl:text-[4rem]"
      >
        ${i18next.t('journey.t0')}
      </h2>
      <div
        class="order-1 flex items-center px-5 lg:order-0 lg:justify-end xl:px-20 2xl:px-32"
      >
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button cta-button--accent flex items-center px-6 py-4 text-[1rem] leading-none"
        >
          ${this.lang === 'en' ? 'Download my resume' : 'Baixar meu currículo'}
        </a>
      </div>
    `
  }

  private renderJourneyItem(item: JourneyItem) {
    if (item.hide) {
      return html`<div class="hidden xl:flex"></div>`
    }
    return html`
      <div class="job relative flex flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span
          class="mb-2 font-mono text-[.75rem] leading-none font-medium tracking-tighter text-zinc-400"
        >
          ${item.start} &bull;
          <span class=${item.custom ?? ''}>${item.end}</span>
        </span>
        <h2
          class="text-[1.5rem] tracking-tighter text-zinc-50 xl:leading-none 2xl:text-[2rem]"
        >
          ${unsafeHTML(item.title)}
        </h2>
        <p class="text-sm/loose text-pretty lg:text-base/loose">
          ${item.description}
        </p>
        ${item.more
          ? html`<span class="text-default mt-1 hidden text-xs"
              >${item.more}</span
            >`
          : nothing}
      </div>
    `
  }

  // private handleJourneyItems() {
  //   let mm = gsap.matchMedia()

  //   mm.add('(min-width: 1024px)', () => {
  //     gsap.from('#job > .job', {
  //       scrollTrigger: {
  //         trigger: '.job',
  //         start: '0% 100%',
  //         toggleActions: 'play none none reverse',
  //       },
  //       opacity: 0,
  //       y: '10rem',
  //       stagger: 0.1,
  //     })
  //   })
  // }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    // this.handleJourneyItems()
  }

  render() {
    return html`
      <section id="section-journey">
        <div class="lg:py-16 xl:py-24 2xl:my-16 2xl:py-48">
          <div
            id="job"
            class="container grid gap-y-16 overflow-hidden pt-14 lg:grid-cols-2 lg:pt-0 xl:gap-y-32"
          >
            ${this.renderJourneyHeader()}
            ${this.journeyItems.map((item) => this.renderJourneyItem(item))}
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
