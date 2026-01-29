import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import a1 from './imgs/a1.png'
import a2 from './imgs/a2.png'
import a3 from './imgs/a3.png'
import a4 from './imgs/a4.png'
import b1 from './imgs/b1.png'
import b2 from './imgs/b2.png'
import b3 from './imgs/b3.png'
import b4 from './imgs/b4.png'
import b5 from './imgs/b5.png'
import b6 from './imgs/b6.png'
import b7 from './imgs/b7.png'

gsap.registerPlugin(ScrollTrigger)

@customElement('twyne-proposal')
export class TwyneProposal extends LitElement {
  @property({ type: String }) lang = i18next.language

  // Referência para as animações
  private componentAnimations: gsap.core.Tween[] = []

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
    this.cleanupAnimations()
  }

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  private setupComponentAnimations(): void {
    const componentsImgs = this.renderRoot.querySelectorAll('img')

    componentsImgs.forEach((img) => {
      const animation = gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: '0% 100%',
          end: '0% 50%',
          toggleActions: 'play none none reverse',
        },
        scale: 1,
        opacity: 0,
        filter: 'blur(1rem)',
        duration: 1,
        y: '20%',
      })

      this.componentAnimations.push(animation)
    })
  }

  private cleanupAnimations(): void {
    this.componentAnimations.forEach((animation) => {
      if (animation) {
        animation.kill()
      }
    })
    this.componentAnimations = []
  }

  firstUpdated() {
    this.setupComponentAnimations()
  }

  private renderProposalList(): unknown {
    const proposalList = i18next.t('twyne.proposal.l1', {
      returnObjects: true,
    }) as string[]

    return html`
      <ul
        class="leading-loose 2xl:text-[1.25rem] text-zinc-50 flex flex-col gap-4 lg:gap-0"
      >
        ${proposalList.map(
          (item) => html`
            <li
              class="flex items-baseline gap-2 lg:gap-4 before:text-zinc-700 before:content-['✦'] text-balance"
            >
              ${item}
            </li>
          `
        )}
      </ul>
    `
  }

  private renderComponentGrid(): unknown {
    return html`
      <div class="flex flex-col gap-2 lg:gap-4 items-center">
        <div class="flex gap-4">
          <div class="hidden lg:flex flex-col gap-4">
            <img
              src="${b1}"
              height="425"
              width="216"
              loading="lazy"
              alt="Component B1"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
            <img
              src="${b3}"
              height="216"
              width="216"
              loading="lazy"
              alt="Component B3"
              class="w-[calc(216px*0.8)] xl:w-auto"
            />
          </div>
          <img
            src="${b2}"
            height="660"
            width="560"
            loading="lazy"
            alt="Component B2"
            class="w-[calc(560px*0.8)] xl:w-auto"
          />
        </div>
        <div class="hidden lg:flex gap-4">
          <img
            src="${b7}"
            height="218"
            width="280"
            loading="lazy"
            alt="Component B7"
            class="w-[calc(280px*0.8)] xl:w-auto"
          />
          <img
            src="${b5}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B5"
            class="w-[calc(240px*0.8)] xl:w-auto"
            />
          <img
            src="${b6}"
            height="218"
            width="240"
            loading="lazy"
            alt="Component B6"
            class="w-[calc(240px*0.8)] xl:w-auto"
          />
        </div>
        <img
          src="${b4}"
          height="448"
          width="792"
          loading="lazy"
          alt="Component B4"
          class="w-[calc(792px*0.8)] xl:w-auto"
        />
      </div>
    `
  }

  private renderComponentColumn(): unknown {
    return html`
      <div class="grid gap-2 lg:gap-4">
        <img
          src="${a1}"
          height="264"
          width="480"
          loading="lazy"
          alt="Component A1"
          class="w-[calc(480px*0.8)] xl:w-auto"
          />
        <img
          src="${a2}"
          height="248"
          width="480"
          loading="lazy"
          alt="Component A2"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${a3}"
          height="492"
          width="480"
          loading="lazy"
          alt="Component A3"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
        <img
          src="${a4}"
          height="296"
          width="480"
          loading="lazy"
          alt="Component A4"
          class="w-[calc(480px*0.8)] xl:w-auto"
        />
      </div>
    `
  }

  private renderComponentsSection(): unknown {
    return html`
      <div
        id="components"
        class="relative px-2 lg:p-0 flex flex-col lg:flex-row lg:min-h-[1088px] xl:min-h-[1348px] items-center justify-center gap-2 lg:gap-4"
      >
        <style>
          #components img {
            border-radius: 0.25rem;
          }
        </style>
        ${this.renderComponentGrid()} ${this.renderComponentColumn()}
      </div>
    `
  }

  render() {
    return html`
      <section id="proposal">
        <div
          class="container hidden h-px w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent lg:block"
        ></div>
        <div class="container rounded-t-4xl px-6 pb-24 lg:py-24 2xl:p-32">
          <h2
            class="mb-10 text-[2rem] lg:text-[2.5rem] leading-none tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
          >
            ${i18next.t('twyne.proposal.t1')}
          </h2>
          <div class="flex flex-col gap-8 lg:grid grid-cols-2">
            ${this.renderProposalList()}
            <p class="text-default text-pretty">
              ${i18next.t('twyne.proposal.p1')}
            </p>
          </div>
        </div>
        ${this.renderComponentsSection()}
        <twyne-impact></twyne-impact>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
