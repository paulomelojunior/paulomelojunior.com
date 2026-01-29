import { gsap } from 'gsap'
import i18next from '../../i18n'
import { LitElement, PropertyValues, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import e1 from './imgs/e1.png'
import e2 from './imgs/e2.png'
import e3 from './imgs/e3.png'
import e4 from './imgs/e4.png'
import e5 from './imgs/e5.png'

@customElement('twyne-mobile')
export class TwyneMobile extends LitElement {
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

  private screensMotion() {
    document
      .querySelectorAll('[data-parallax-layers]')
      .forEach((triggerElement) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#mobile-images',
            start: '0% 100%',
            end: '100% 0%',
            scrub: 0,
          },
        })
        const layers = [
          { layer: '1', ys: '30%', ye: '0%', opacity: .5 },
          { layer: '2', ys: '20%', ye: '5%', opacity: .75 },
          { layer: '3', ys: '10%', ye: '10%', opacity: 1 },
          { layer: '4', ys: '20%', ye: '5%', opacity: .75 },
          { layer: '5', ys: '30%', ye: '0%', opacity: .5 },
        ]
        layers.forEach((layerObj, idx) => {
          tl.fromTo(
            triggerElement.querySelectorAll(
              `[data-parallax-layer="${layerObj.layer}"]`
            ),
            {
              y: layerObj.ys,
              opacity: layerObj.opacity,
            },
            {
              y: layerObj.ye,
              opacity: 1,
              ease: 'none'
            },
            idx === 0 ? undefined : '<'
          )
        })
      })
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.screensMotion()
  }
  render() {    
    return html`
      <section id="mobile" class="mt-24 py-24 xl:mt-32 xl:py-32">
        <h2
          class="mb-16 xl:mb-32 text-center text-[2.5rem] leading-normal tracking-[-.02em] 2xl:text-[3rem] text-zinc-50"
        >
          ${unsafeHTML(i18next.t('twyne.mobile.t1'))}
        </h2>
        <div
          id="mobile-images"
          class="mx-auto grid max-w-[1920px] grid-cols-5 items-center justify-center gap-4 px-4"
          data-parallax-layers
        >
          <img src="${e2}" data-parallax-layer="1" class="mobile-screen" />
          <img src="${e1}" data-parallax-layer="2" class="mobile-screen" />
          <img src="${e3}" data-parallax-layer="3" class="mobile-screen" />
          <img src="${e4}" data-parallax-layer="4" class="mobile-screen" />
          <img src="${e5}" data-parallax-layer="5" class="mobile-screen" />
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
