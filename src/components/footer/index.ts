import { gsap } from 'gsap'
import i18next from '../../i18n'
import { LitElement, html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { customElement, property } from 'lit/decorators.js'
import logo from './logo.svg?raw'

@customElement('footer-section')
export class FooterSection extends LitElement {
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
      'Publish to polish.'
    ]
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }

  protected firstUpdated() {
    const navList = this.querySelector('#menu')

    if (!navList) return

    const navItems = {
      instagram: {
        label: i18next.t('links.instagram.label'),
        url: i18next.t('links.instagram.url'),
      },
      github: {
        label: i18next.t('links.github.label'),
        url: i18next.t('links.github.url'),
      },
      linkedin: {
        label: i18next.t('links.linkedin.label'),
        url: i18next.t('links.linkedin.url'),
      },
      email: {
        label: i18next.t('links.email.label'),
        url: i18next.t('links.email.url'),
      },
    }

    const navValues = Object.values(navItems)

    navValues.forEach((e, i) => {
      const indexStr = (i + 1).toString().padStart(2, '0')
      const navItem = `
				<div class="border-b border-zinc-800 lg:border-0">
					<a target="_blank" class="menu-item py-6 px-5 xl:py-3 flex text-zinc-50 relative" rel="noopener noreferrer" href="${e.url}">
						${e.label}
						<div class="absolute flex inset-0 py-6 px-5 xl:py-3 text-zinc-950 lg:rounded-full">
							${e.label}
						</div>
						<span class="lg:hidden absolute opacity-50 mix-blend-difference right-6 bottom-6 font-mono text-[.75rem] tracking-wider">
							${e.label === 'Email' ? 'hello@pmjr.cc' : indexStr}
						</span>
					</a>
				</div>`
      navList.insertAdjacentHTML('beforeend', navItem)
    })

    this.initMenuAnimation()
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

  render() {
    return html`
      <footer
        id="section-connect"
        class="footer relative z-10 h-lvh overflow-hidden before:content-none lg:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center"
        >
          <div
            id="menu"
            class="flex tracking-tight flex-1 flex-col flex-wrap gap-0 text-[2rem] lg:flex-row leading-none lg:items-baseline lg:justify-center lg:gap-8 lg:text-[2.5rem]"
          >
            <span
              class="flex h-20 items-center px-5 lg:p-0 text-zinc-600 me-5"
            >
              ${i18next.t('connect.title')}
            </span>
            <span
              class="hidden lg:flex stroke-brand-400"
            >
              ${unsafeHTML(`${logo}`)}
            </span>
          </div>
        </div>
        <div class="absolute z-50 inset-x-0 bottom-0 w-full flex gap-2 justify-center px-5 pt-[10px] pb-[14px] font-mono text-[.625rem] font-semibold uppercase bg-zinc-950 tracking-widest">
          <span> [c] ${this.currentYear() || '2026'} Paulo Melo Jr. </span>
          <span class="text-zinc-600 hidden md:inline"> / </span>
          <span class="hidden md:inline"> ${this.getRandomQuote() || 'To define is to limit.'} </span>
        </div>
      </footer>
    `
  }

  createRenderRoot() {
    return this
  }
}
