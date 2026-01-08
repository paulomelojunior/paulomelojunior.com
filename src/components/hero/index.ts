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
          class="container flex min-h-[calc(100svh-4rem)] flex-col justify-end pt-12 2xl:justify-end xl:pt-0"
        >
          <div
            class="flex flex-col 2xl:items-center px-5 xl:pt-24 2xl:pt-32 my-auto"
            data-parallax-layer="1"
          >
            <div class="flex items-center gap-4 mb-6 md:mb-10 2xl:-ms-6">
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
                class="rounded-full size-16 bg-zinc-900 -rotate-2 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="text-[1.25rem] text-white"> Paulo Melo Jr. </span>
                <span class="flex items-center gap-2 text-[1rem]">
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
            <h1
              class="text-pretty bg-linear-to-t/oklch from-zinc-200 to-zinc-50 bg-clip-text text-[2.5rem] leading-none tracking-[-0.06em] 2xl:text-center text-transparent xl:text-[3rem] 2xl:text-[4rem] xl:uppercase"
            >
              <span class="block md:hidden">
                ${i18next.t('about.content.m1')}
              </span>
              <span class="block md:hidden">
                ${i18next.t('about.content.m2')}
              </span>
              <span class="hidden md:block">
                ${i18next.t('about.content.d1')}
              </span>
              <span class="hidden md:block">
                ${i18next.t('about.content.d2')}
              </span>
            </h1>
            <div class="flex gap-2 pb-0 pt-10 md:pb-16 md:pt-12">
              <a
                href="${i18next.t('links.lastProject.url')}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 outline-8 outline-zinc-950"
              >
                ${i18next.t('links.lastProject.label')}
              </a>
              <a
                href="#section-praxis"
                class="rounded-full size-[44px] transition-color duration-200 bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center outline-4 outline-zinc-950"
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
            <div class="block sm:hidden xl:block col-span-12 xl:col-span-3">
              <img src="${s1}" class="aspect-[4/3] sm:aspect-[1/1] w-full object-cover mask-b-from-50% sm:mask-r-from-50% object-top rounded-tl-lg" />
            </div>
            <div class="hidden sm:block col-span-8 xl:col-span-6">
              <img src="${s2}" class="w-full object-cover object-top mask-b-from-50% rounded-t-lg" />
            </div>
            <div class="hidden sm:block col-span-4 xl:col-span-3">
              <img src="${s3}" class="aspect-[1/1] w-full object-cover mask-b-from-50% mask-l-from-50% object-top rounded-tr-lg" />
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
