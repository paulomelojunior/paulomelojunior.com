import { gsap } from 'gsap'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import goBack from './go-back.svg'
import profile1x from './legacy/profile-1x.webp'
import profile2x from './legacy/profile-2x.webp'
import profile3x from './legacy/profile-3x.webp'
import s1 from './d1.png'
import s2 from './d2.png'
import s3 from './d3.png'

import { ThemeMixin } from '../../store/theme'

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
  firstUpdated() {
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

  render() {
    return html`
      <section class="hero" data-parallax-layers>
        <div
          class="container flex flex-col justify-between min-h-[calc(100svh-4rem)] pt-16"
        >
          <div class="flex flex-col md:items-center my-auto gap-12 px-5" data-parallax-layer="1">

            <div class="flex items-center gap-4 md:-mb-3">
              <img
                src="${profile1x}"
                srcset="${profile1x} 64w, ${profile2x} 96w, ${profile3x} 128w"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                decoding="async"
                loading="eager"
                alt="${i18next.t('about.picDescription')}"
                class="rounded-full size-14 md:size-16 bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="md:text-[1.25rem] text-white">
                  Paulo Melo Jr.
                </span>
                <span class="flex items-center gap-2 font-medium text-[.875rem] md:text-[1rem]">
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
            
            <div class="flex flex-col gap-4 md:gap-2 md:text-center">
              <h1 class="text-pretty text-zinc-50 font-semibold text-[2.5rem] leading-none tracking-[-0.06em] xl:text-[3rem] 2xl:text-[4rem] uppercase">
                ${i18next.t('about.content.title')}
              </h1>
              <h2 class="text-balance md:leading-none text-[1.25rem] xl:text-[1.5rem] 2xl:text-[2rem] text-zinc-200 tracking-[-0.02em] xl:font-light">
                ${i18next.t('about.content.subtitle')}
              </h2>
            </div>

            <div class="flex relative gap-2">
              <a
                href="${i18next.t('about.cta.url')}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 outline-8 outline-zinc-950"
              >
                ${i18next.t('about.cta.label')}
              </a>
              <a
                href="#section-praxis"
                class="hidden xl:flex rounded-full size-[44px] transition-color duration-200 bg-zinc-800 hover:bg-zinc-700 justify-center items-center outline-4 outline-zinc-950"
                title="Scroll page"
              >
                <img
                  src="${goBack}"
                  class="transition-opacity duration-500 -rotate-90"
                />
              </a>
            </div>

          </div>
          <div
            class="hidden px-5 xl:grid-cols-2 xl:gap-24 gap-6"
            data-parallax-layer="1"
          >
            <div class="xl:py-24 2xl:py-32">
              <p class="text-default">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${i18next.t('about.content.h1')}</mark
                >${i18next.t('about.content.p1')}
              </p>
            </div>
            <div class="xl:py-24 2xl:py-32">
              <p class="text-default">
                <mark
                  class="inline-block bg-transparent text-zinc-50"
                  >${i18next.t('about.content.h2')}</mark
                >${i18next.t('about.content.p2')}
              </p>
            </div>
          </div>
          <div
            class="container grid grid-cols-12 items-end ps-5 sm:ps-0"
            data-parallax-layer="2"
          >
            <div class="hidden xl:block col-span-12 xl:col-span-3">
              <img src="${s1}" class="aspect-[4/3] sm:aspect-[1/1] w-full object-cover mask-b-from-0% sm:mask-r-from-50% object-top rounded-tl-lg" />
            </div>
            <div class="hidden sm:block col-span-8 xl:col-span-6">
              <img src="${s2}" class="w-full object-cover object-top mask-b-from-75% rounded-t-lg" />
            </div>
            <div class="hidden sm:block col-span-4 xl:col-span-3">
              <img src="${s3}" class="aspect-[1/1] w-full object-cover mask-b-from-50% mask-l-from-0% object-top rounded-tr-lg" />
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
