import i18next from '../../i18n'
import { gsap } from 'gsap'
import { LitElement, PropertyValues, html } from 'lit'
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
    this.updateJourneyContent()
  }

  private updateJourneyContent() {
    const journeyElement = document.querySelector('#job') as HTMLElement

    if (!journeyElement) {
      return
    }

    // Limpa o conteúdo existente
    journeyElement.innerHTML = ''

    // Recria o conteúdo com o novo idioma
    const journeyItems = this.getJourneyItems()
    const journeyValues = Object.values(journeyItems)

    // Adiciona o cabeçalho da jornada
    const journeyHeader = this.createJourneyHeader()
    journeyElement.insertAdjacentHTML('beforeend', journeyHeader)

    journeyValues.forEach((item) => {
      const journeyItemHTML = this.createJourneyItemHTML(item)
      journeyElement.insertAdjacentHTML('beforeend', journeyItemHTML)
    })
  }

  private getJourneyItems(): Record<string, JourneyItem> {
    return {
      1: {
        hide: false,
        custom: 'text-brand-400',
        start: '2019',
        end: '2025',
        title: i18next.t('journey.t4'),
        description: i18next.t('journey.p4'),
        more: undefined,
      },
      2: {
        hide: false,
        start: '2018',
        end: '2019',
        title: i18next.t('journey.t3'),
        description: i18next.t('journey.p3'),
        more: i18next.t('journey.m3'),
        custom: undefined,
      },
      3: {
        hide: false,
        start: '2016',
        end: '2018',
        title: i18next.t('journey.t2'),
        description: i18next.t('journey.p2'),
        more: i18next.t('journey.m2'),
        custom: undefined,
      },
      4: {
        hide: false,
        start: '2015',
        end: '2016',
        title: i18next.t('journey.t1'),
        description: i18next.t('journey.p1'),
        custom: undefined,
        more: undefined,
      },
    }
  }

  private createJourneyHeader(): string {
    return `
      <h2
        class="text-pretty text-[2.5rem] leading-none tracking-[-0.06em] xl:text-[3rem] 2xl:text-[4rem] text-zinc-50 px-5 xl:px-20 2xl:px-32"
      >
        ${i18next.t('journey.t0')}
      </h2>
      <div class="flex items-center lg:justify-end order-1 lg:order-0 px-5 xl:px-20 2xl:px-32">
        <a
          href="/Paulo Melo Jr. - Currículo.pdf"
          target="_blank"
          class="cta-button cta-button--accent flex items-center gap-4 py-3 pe-4 ps-6 text-[1rem] leading-none"
        >
          ${this.lang === 'en' ? 'Download my resume' : 'Baixar meu currículo'}
          <svg
            alt="${this.lang === 'en' ? 'Download' : 'Baixar'}"
            width="20px"
            height="20px"
            stroke-width="1.75"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V22M12 22L15.5 18.5M12 22L8.5 18.5"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    `
  }

  private createJourneyItemHTML(item: JourneyItem): string {
    const hideClass = item.hide ? 'hidden xl:flex' : 'flex'
    const customClass = item.custom ? ` class="${item.custom}"` : ''

    return `
      <div class="${hideClass} job relative flex-col gap-4 px-5 xl:px-20 2xl:px-32">
        <span class="font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-500 mb-2">
          ${item.start} &bull; <span${customClass}>${item.end}</span>
        </span>
        <h2 class="text-[1.5rem] 2xl:text-[2rem] xl:leading-none text-zinc-50 tracking-[-.04em]">
          ${item.title}
        </h2>
        <p class="text-sm/loose lg:text-base/loose text-pretty">
          ${item.description}
        </p>
      </div>
    `
  }

  private handleJourneyItems() {
    let mm = gsap.matchMedia()
  
    mm.add('(min-width: 1024px)', () => {
      gsap.from('#job > *', {
        scrollTrigger: {
          trigger: '.job',
          start: '0% 100%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: '10rem',
        stagger: 0.1,
      })
    })
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const journeyElement = this.querySelector('#job') as HTMLElement
    const journeyItems = this.getJourneyItems()
    const journeyValues = Object.values(journeyItems)

    const journeyHeader = this.createJourneyHeader()
    journeyElement.insertAdjacentHTML('beforeend', journeyHeader)

    journeyValues.forEach((item) => {
      const journeyItemHTML = this.createJourneyItemHTML(item)
      journeyElement.insertAdjacentHTML('beforeend', journeyItemHTML)
    })

    this.handleJourneyItems()
  }

  render() {
    return html`
      <section id="section-journey">
        <div
          class="lg:py-16 xl:py-24 2xl:py-32"
        >
          <div
            id="job"
            class="container grid gap-y-16 overflow-hidden py-16 lg:grid-cols-2 xl:gap-y-32"
          ></div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
