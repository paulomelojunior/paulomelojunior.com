import { gsap } from 'gsap'
import { customElement } from 'lit/decorators.js'
import { LitElement, html } from 'lit'
import { AppMixin } from '../../store/app-mixin'
import arrow from './imgs/arrow.svg'
import p1x from './imgs/profile-1x.webp'
import s1 from './imgs/d1.webp'
import s2 from './imgs/d2.webp'
import s3 from './imgs/d3.webp'
import m1 from './imgs/m1.webp'

@customElement('hero-section')
export class HeroSection extends AppMixin(LitElement) {
  itemEntrance() {
    gsap.from('.hero', {
      paddingTop: 64,
    })
    document.querySelectorAll('[data-entrance]').forEach((triggerElement) => {
      const items = [
        {
          item: '4',
          opacity: '0',
          y: '20%',
          delay: 0.4,
          scale: 1.1,
          duration: 1,
        },
        {
          item: '5',
          opacity: '0',
          y: '20%',
          delay: 0,
          scale: 1.1,
          duration: 1.2,
        },
        { item: '3', opacity: '0', y: '0rem', delay: 0.2, duration: 1 },
        { item: '2', opacity: '0', y: '0rem', delay: 0.2, duration: 1 },
        { item: '1', opacity: '0', y: '0rem', delay: 0.2, duration: 1 },
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
            duration: itemObj.duration,
          },
          idx === 0 ? undefined : '<'
        )
      })
    })
  }

  heroParallax() {
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
          { layer: '1', y: '2.5rem', opacity: 0 },
          { layer: '2', y: '5rem', opacity: 0, filter: 'blur(1rem)' },
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
              filter: layerObj.filter,
            },
            idx === 0 ? undefined : '<'
          )
        })
      })
  }

  firstUpdated() {
    this.itemEntrance()
    this.heroParallax()
  }

  render() {
    return html`
      <section
        class="hero animate-fade-in before:content-none sm:before:content-['']"
        data-parallax-layers
        data-entrance
      >
        <div
          class="container flex min-h-[calc(100svh-4rem)] flex-col-reverse pt-12 sm:flex-col sm:justify-between sm:pt-18"
        >
          <div
            class="relative z-10 mx-5 mb-auto flex flex-col sm:my-auto sm:items-center sm:pt-16 sm:pb-20"
            data-parallax-layer="1"
          >
            <div data-entrance-item="3" class="mb-5 flex items-center gap-4">
              <img
                src="${p1x}"
                sizes="64px"
                height="64"
                width="64"
                fetchpriority="high"
                loading="eager"
                alt="${this.t('hero.picDescription')}"
                class="size-14 rounded-full bg-zinc-900 outline-4 outline-zinc-950"
              />
              <div class="grid gap-2 leading-none">
                <span class="text-white 2xl:text-[1.25rem]">
                  ${this.t('hero.name')}
                </span>
                <span
                  class="flex items-center gap-2 text-[.875rem] font-medium 2xl:text-[1rem]"
                >
                  <span class="relative flex size-3">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400"
                    ></span>
                    <span
                      class="relative m-0.5 inline-flex size-2 rounded-full bg-green-300"
                    ></span>
                  </span>
                  ${this.t('hero.status')}
                </span>
              </div>
            </div>

            <div
              data-entrance-item="2"
              class="mb-9 flex flex-col gap-2 md:text-center"
            >
              <h1
                data-split="heading"
                class="tracking-tightest text-[2.75rem] leading-none font-medium text-balance text-zinc-50 2xl:text-[5rem]"
              >
                ${this.t('hero.title')}
              </h1>
              <h2 class="text-[1.125rem] text-balance 2xl:text-[1.5rem]">
                ${this.t('hero.subtitle')}
              </h2>
            </div>

            <div data-entrance-item="1" class="relative flex gap-2">
              <a
                href="${this.t('hero.cta.url')}"
                class="cta-button cta-button--accent flex items-center gap-3 self-center px-6 py-4"
              >
                ${this.t('hero.cta.label')}
              </a>
              <a
                href="#section-praxis"
                class="transition-color hidden size-[48px] items-center justify-center rounded-full bg-zinc-900 outline-4 outline-zinc-950 duration-[200ms] hover:bg-zinc-800 active:scale-95"
                title="Scroll page"
              >
                <img
                  src="${arrow}"
                  class="-rotate-90 transition-opacity duration-500"
                />
              </a>
            </div>
          </div>
          <div
            class="col-span-12 container grid grid-cols-12 items-end"
            data-parallax-layer="2"
          >
            <div class="col-span-12 block bg-zinc-950 sm:hidden">
              <img
                data-entrance-item="1"
                class="aspect-[3/2] w-full rounded-t-4xl mask-b-from-50% object-cover object-center"
                src="${m1}"
              />
            </div>
            <div class="hidden bg-zinc-950 xl:col-span-3 xl:block">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tl-lg mask-b-from-50% object-cover object-top sm:mask-r-from-50% sm:mask-b-from-0%"
                src="${s1}"
                height="384"
                width="384"
              />
            </div>
            <div class="col-span-8 hidden bg-zinc-950 sm:block xl:col-span-6">
              <img
                data-entrance-item="4"
                class="max-h-[432px] w-full rounded-t-lg mask-b-from-75% object-cover object-top"
                src="${s2}"
                height="432"
                width="768"
              />
            </div>
            <div class="col-span-4 hidden bg-zinc-950 sm:block xl:col-span-3">
              <img
                data-entrance-item="5"
                class="aspect-square w-full rounded-tr-lg mask-b-from-50% mask-l-from-0% object-cover object-top"
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
