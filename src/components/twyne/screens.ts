import gsap from 'gsap'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import d0 from '../twyne/imgs/d0.png'
import d2 from '../twyne/imgs/d2.png'
import d3 from '../twyne/imgs/d3.png'

@customElement('twyne-screens')
export class TwyneScreens extends LitElement {
  // Reativo porque aparece no template
  @property({ type: String }) lang = i18next.language
  @property({ type: Number }) currentIndex = 0

  // State interno
  private screens!: NodeListOf<HTMLImageElement>
  private updateScreens!: () => void
  private abortController = new AbortController()

  // ------------------------
  // LIFECYCLE
  // ------------------------

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', this.handleLanguageChange)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', this.handleLanguageChange)
    this.abortController.abort()
  }

  firstUpdated() {
    this.initCarousel()
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('lang')) {
      this.updateComplete.then(() => {
        this.initCarousel()
      })
    }
  }

  // ------------------------
  // HANDLERS
  // ------------------------

  private handleLanguageChange = () => {
    this.lang = i18next.language
  }

  private handlePrev = () => {
    if (!this.screens?.length) return

    this.currentIndex =
      (this.currentIndex - 1 + this.screens.length) %
      this.screens.length

    this.updateScreens()
  }

  private handleNext = () => {
    if (!this.screens?.length) return

    this.currentIndex =
      (this.currentIndex + 1) %
      this.screens.length

    this.updateScreens()
  }

  // ------------------------
  // CORE
  // ------------------------

  private initCarousel() {
    // Mata listeners antigos
    this.abortController.abort()
    this.abortController = new AbortController()

    this.screens = this.querySelectorAll<HTMLImageElement>(
      '.carrossel img'
    )

    if (!this.screens.length) return

    // Garante índice válido
    this.currentIndex = Math.min(
      this.currentIndex,
      this.screens.length - 1
    )

    this.updateScreens = () => {
      this.screens.forEach((img, idx) => {
        const isActive = idx === this.currentIndex

        gsap.to(img, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 100,
          duration: 0.4,
          delay: isActive ? 0.2 : 0,
          ease: 'power2.out',
          onStart: () => {
            if (isActive) img.classList.remove('invisible')
          },
          onComplete: () => {
            if (!isActive) img.classList.add('invisible')
          },
        })
      })
    }

    this.updateScreens()

    const prevBtn = this.querySelector<HTMLButtonElement>(
      'button[data-prev]'
    )
    const nextBtn = this.querySelector<HTMLButtonElement>(
      'button[data-next]'
    )

    const { signal } = this.abortController

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', this.handlePrev, { signal })
      nextBtn.addEventListener('click', this.handleNext, { signal })
    }
  }

  // ------------------------
  // TEMPLATE
  // ------------------------

  render() {
    return html`
      <section class="relative mt-24 xl:mt-32">
        <div class="container">
          <div class="carrossel relative overflow-hidden">
            <img
              src="${d0}"
              width="1728"
              height="976"
              class="relative rounded-[.5rem]"
            />
            <img
              src="${d2}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
            <img
              src="${d3}"
              width="1728"
              height="976"
              class="invisible absolute left-0 top-0 rounded-[.5rem]"
            />
          </div>

          <div class="absolute inset-0">
            <div
              class="sticky -inset-x-4 top-[calc(100dvh-15rem)] isolate flex h-60 items-end justify-center after:absolute after:inset-0 after:z-10 after:bg-linear-to-t after:from-zinc-950 after:content-['']"
            >
              <progressive-blur></progressive-blur>

              <div class="relative z-20 flex gap-px pb-2">
                <button
                  data-prev
                  class="flex items-center gap-4 rounded-s-full bg-zinc-100/10 py-3 pe-4 ps-5 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Prev
                </button>

                <span
                  class="flex items-center justify-center bg-zinc-50/5 px-4 font-mono text-[.75rem] font-medium uppercase leading-none tracking-[.05em]"
                >
                  ${this.currentIndex + 1} / ${this.screens?.length ?? 3}
                </span>

                <button
                  data-next
                  class="flex items-center gap-4 rounded-e-full bg-zinc-100/10 py-3 pe-5 ps-4 text-[.75rem] uppercase leading-none tracking-[.05em] text-zinc-50 transition-all hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  // Light DOM
  createRenderRoot() {
    return this
  }
}
