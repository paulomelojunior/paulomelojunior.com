import { gsap } from 'gsap'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import m1 from './mockup-1.webp'
import m2 from './mockup-2.webp'

@customElement('cases-section')
export class CasesSection extends LitElement {
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

  private initAnimation() {
    const casesElement = this.querySelector('#cases')
    const casesImages = this.querySelectorAll('#cases .cases')

    if (casesElement && casesImages.length > 0) {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        gsap.from(Array.from(casesImages), {
          scrollTrigger: {
            trigger: casesElement,
            start: 'top 100%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
            scrub: 2,
          },
          stagger: -0.1,
          y: '10rem',
        })
      })
    }
  }

  protected firstUpdated() {
    this.initAnimation()
  }

  private renderTitle(title: string) {
    const parts = title.split("<br class='block xl:hidden'>")
    if (parts.length > 1) {
      return html`
        ${parts[0]}
        <br class="block xl:hidden" />
        ${parts[1]}
      `
    }
    return title
  }

  render() {
    return html`
      <section id="cases" class="hidden xl:block">
        <div class="container">
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent xl:block"
          ></div>
          <div
            class="cases-background relative flex rounded-4xl bg-radial-[circle_at_bottom_center] from-zinc-900 2xl:h-[512px]"
          >
            <div class="hidden w-2/3 justify-center xl:flex">
              <span
                class="absolute bottom-0 left-0 flex gap-2 p-8 font-mono text-[.75rem] leading-none font-medium tracking-[.05em] text-zinc-600 uppercase"
              >
                2025 ${i18next.t('cases.project')}
              </span>
              <div
                class="pointer-events-none absolute bottom-0 overflow-hidden"
              >
                <img
                  class="cases absolute w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${m1}"
                  width="1264"
                  height="720"
                  alt="Dark mode mobile dashboard showing analytics overview with graphs, lead count, and campaign metrics on a tilted iPhone screen."
                />
                <img
                  class="cases w-[calc(1264px*0.8)] max-w-none 2xl:w-auto"
                  src="${m2}"
                  width="1264"
                  height="720"
                  alt="Mobile screen in dark mode showcasing an organized campaign list view, with project names, dates, and quick actions."
                />
              </div>
            </div>
            <div
              class="cases-content relative flex flex-1 flex-col p-20 xl:aspect-square xl:rounded-r-4xl 2xl:p-24"
            >
              <h2
                class="text-[2.5rem] leading-none tracking-tighter text-zinc-50 2xl:text-[3rem]"
              >
                ${this.renderTitle(i18next.t('cases.title'))}
              </h2>
              <p
                class="mt-8 mb-auto text-sm/loose text-pretty 2xl:text-base/loose"
              >
                ${i18next.t('cases.description')}
              </p>
              <a
                href="${i18next.t('links.lastProject.url')}"
                class="cta-button cta-button--accent flex w-full items-center justify-between gap-3 self-center py-4 ps-6"
              >
                ${i18next.t('cases.cta')}
                <svg
                  width="14"
                  height="14"
                  class="rotate-180"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13L2 6.99999M2 6.99999L8 1M2 6.99999L14 6.99999"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            class="hidden h-px w-full bg-linear-to-r from-transparent via-zinc-800 to-transparent xl:block"
          ></div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
