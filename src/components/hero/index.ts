import { gsap } from 'gsap'
import { customElement, property } from 'lit/decorators.js'
import { LitElement, html } from 'lit'
import { ThemeMixin } from '../../store/theme'
import i18next from '../../i18n'
import arrow from './imgs/arrow.svg'
import p1x from './imgs/profile-1x.webp'
import s1 from './imgs/d1.webp'
import s2 from './imgs/d2.webp'
import s3 from './imgs/d3.webp'

@customElement('hero-section')
export class HeroSection extends ThemeMixin(LitElement) {
  @property({ type: String }) lang = i18next.language

  connectedCallback() {
    super.connectedCallback()
    i18next.on('languageChanged', () => {
      this.lang = i18next.language
    })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    i18next.off('languageChanged', () => {
      this.lang = i18next.language
    })
  }

  private itemEntrance() {
    gsap.from('.hero',
      {
        paddingTop: 64,
      }
    );
    document
      .querySelectorAll('[data-entrance]')
      .forEach((triggerElement) => {
        const items = [
          { item: '4', opacity: '0', y: '0%', delay: .4, scale: 1.1, duration: 1 },
          { item: '5', opacity: '0', y: '0%', delay: 0, scale: 1.1, duration: 1.2 },
          { item: '3', opacity: '0', y: '0rem', delay: .2, duration: 1 },
          { item: '2', opacity: '0', y: '0rem', delay: .2, duration: 1 },
          { item: '1', opacity: '0', y: '0rem', delay: .2, duration: 1 },
        ]
        const tl = gsap.timeline()
        items.forEach((itemObj, idx) => {
          tl.from(
            triggerElement.querySelectorAll(
              `[data-entrance-item="${itemObj.item}"]`
            ),
            {
              y: itemObj.y,
              opacity: itemObj.opacity,
              delay: itemObj.delay,
              scale: itemObj.scale,
              duration: itemObj.duration
            },
            idx === 0 ? undefined : '<'
          )
        })
      })
  }

  private heroParallax() {
    document
      .querySelectorAll('[data-parallax-layers]')
      .forEach((triggerElement) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: '0% 0%',
            end: '100% 0%',
            scrub: 0,
          },
        })
        const layers = [
          { layer: '1', y: '5rem' },
          { layer: '2', y: '10rem', opacity: 0, filter: 'blur(1rem)' }
        ]
        layers.forEach((layerObj, idx) => {
          tl.to(
            triggerElement.querySelectorAll(
              `[data-parallax-layer="${layerObj.layer}"]`
            ),
            {
              y: layerObj.y,
              ease: 'none',
              opacity: layerObj.opacity,
              filter: layerObj.filter
            },
            idx === 0 ? undefined : '<'
          )
        })
      })
  }

  firstUpdated() {
    this.heroParallax();
    this.itemEntrance();
  }

  render() {
    return html`
      <section class="hero before:animate-(--animate-fade-in)" data-parallax-layers data-entrance>
        <div
          class="container flex flex-col justify-between min-h-[calc(100svh-4rem)] pt-16"
        >
          <div class="flex flex-col items-center my-auto pt-12 pb-16 gap-10 md:gap-12" data-parallax-layer="1">
            <div data-entrance-item="3" class="flex items-center gap-4 -mb-2 md:-mb-3">
              <img
                src="${p1x}"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                loading="eager"
                alt="${i18next.t('about.picDescription')}"
                class="rounded-full size-14 2xl:size-16 bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="2xl:text-[1.25rem] text-white">
                  Paulo Melo Jr.
                </span>
                <span class="flex items-center gap-2 font-medium text-[.875rem] 2xl:text-[1rem]">
                  <span class="relative flex size-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                    ></span>
                    <span
                      class="relative m-0.5 inline-flex size-2 rounded-full bg-green-300"
                    ></span>
                  </span>
                  ${i18next.t('about.status')}
                </span>
              </div>
            </div>
            
            <div data-entrance-item="2" class="flex flex-col gap-2 text-center">
              <h1 data-split="heading" class="text-pretty text-zinc-50 font-semibold text-[2rem] leading-none tracking-[-0.06em] xl:text-[2.75rem] 2xl:text-[4rem] uppercase">
                ${i18next.t('about.content.title')}
              </h1>
              <h2 class="text-balance leading-none text-[1rem] 2xl:text-[1.5rem] text-zinc-200">
                ${i18next.t('about.content.subtitle')}
              </h2>
            </div>

            <div data-entrance-item="1" class="flex relative gap-2">
              <a
                href="${i18next.t('about.cta.url')}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 outline-4 outline-zinc-950"
              >
                ${i18next.t('about.cta.label')}
              </a>
              <a
                href="#section-praxis"
                class="hidden lg:flex rounded-full size-[44px] transition-color duration-[200ms] bg-zinc-800 hover:bg-zinc-700 justify-center items-center outline-4 outline-zinc-950 active:scale-95"
                title="Scroll page"
              >
                <img
                  src="${arrow}"
                  class="transition-opacity duration-500 -rotate-90"
                />
              </a>
            </div>
          </div>
          <div
            class="container grid grid-cols-12 items-end ps-5 sm:ps-0"
            data-parallax-layer="2"
          >
            <div class="block sm:hidden xl:block col-span-12 xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full object-cover mask-b-from-50% sm:mask-b-from-0% sm:mask-r-from-50% object-top rounded-tl-lg bg-zinc-900"
                src="${s1}"
                height="384"
                width="384"
              />
              </div>
            <div class="hidden sm:block col-span-8 xl:col-span-6">
              <img
                data-entrance-item="4"
                class="w-full max-h-[432px] object-cover object-top mask-b-from-75% rounded-t-lg bg-zinc-900"
                src="${s2}"
                height="432"
                width="768"
              />
            </div>
            <div class="hidden sm:block col-span-4 xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full object-cover mask-b-from-50% mask-l-from-0% object-top rounded-tr-lg bg-zinc-900"
                src="${s3}"
                height="384"
                width="384"
              />
            </div>
          </div>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
