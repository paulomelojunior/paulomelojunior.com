import { gsap } from 'gsap'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { AppMixin } from '../../store/app-mixin'
import './link'

@customElement('footer-section')
export class FooterSection extends AppMixin(LitElement) {
  private currentYear() {
    return new Date().getFullYear()
  }

  private getRandomQuote() {
    const quotes = [
      'Stay hungry, stay foolish.',
      'Get off zero.',
      'No great thing is created suddenly.',
      'Where the mind goes the body will follow.',
      'To define is to limit.',
      'Publish to polish.',
      'Made by human.',
    ]
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }

  private initMenuAnimation() {
    const footerElement = this.querySelector('footer')
    const menuElement = this.querySelector('#menu')
    const menuItems = this.querySelectorAll('#menu > *')

    if (footerElement && menuElement && menuItems.length > 0) {
      gsap.from(Array.from(menuItems), {
        scrollTrigger: {
          trigger: footerElement,
          start: 'top 50%',
          end: 'top 0%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        stagger: 0.1,
        y: '5rem',
      })
    }
  }

  protected firstUpdated() {
    this.initMenuAnimation()
  }

  render() {
    return html`
      <footer
        id="section-connect"
        class="footer md:from-brand-800 md:via-brand-900 relative z-10 h-lvh overflow-hidden md:bg-linear-0 md:from-[5rem] md:via-60% md:to-zinc-950 lg:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center"
        >
          <div
            id="menu"
            class="group/item container flex flex-1 flex-col flex-wrap text-[2rem] leading-none tracking-tighter lg:max-w-full lg:flex-row lg:items-baseline lg:justify-center lg:text-[2.5rem]"
          >
            <span
              class="mx-5 flex h-20 items-center text-zinc-400 transition-colors duration-400 group-hover/item:text-zinc-400 lg:p-0"
            >
              ${this.t('connect.title')}
            </span>
            <footer-link
              url=${this.t('links.github.url')}
              label=${this.t('links.github.label')}
              index="001"
            ></footer-link>

            <footer-link
              url=${this.t('links.linkedin.url')}
              label=${this.t('links.linkedin.label')}
              index="002"
            ></footer-link>

            <footer-link
              url=${this.t('links.email.url')}
              label=${this.t('links.email.label')}
              index="hello@pmjr.cc"
            ></footer-link>
          </div>
        </div>
        <div
          class="lg:bg-brand-800 absolute inset-x-0 bottom-0 z-50 flex w-full justify-center gap-2 px-5 pt-2.5 pb-3.5 font-mono text-[.625rem] tracking-widest uppercase"
        >
          <span> [c] ${this.currentYear() || '2026'} Paulo Melo Jr. </span>
          <span class="hidden text-zinc-400 md:inline"> / </span>
          <span class="hidden md:inline">
            ${this.getRandomQuote() || 'To define is to limit.'}
          </span>
        </div>
      </footer>
    `
  }

  createRenderRoot() {
    return this
  }
}
