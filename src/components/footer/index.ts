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

  private initScrambleText() {
    const copyrightElement = this.querySelector('#copyright')
    const copyrightSpan = this.querySelector('.copyright span')

    if (copyrightElement && copyrightSpan) {
      copyrightElement.addEventListener('mouseenter', () => {
        gsap.to(copyrightSpan, {
          duration: 1,
          scrambleText: {
            text: 'Made by a human being',
            chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            speed: 0.1,
          },
        })
      })

      copyrightElement.addEventListener('mouseleave', () => {
        gsap.to(copyrightSpan, {
          duration: 0.5,
          scrambleText: {
            text: 'Copyright',
            chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            speed: 0.1,
          },
        })
      })
    }
  }

  protected firstUpdated() {
    const navList = this.querySelector('#menu')

    if (!navList) return

    const navItems = {
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
					<a target="_blank" class="menu-item h-20 lg:h-16 px-5 lg:pt-1 flex items-center text-zinc-100 relative" rel="noopener noreferrer" href="${e.url}">
						${e.label}
						<div class="absolute flex items-center px-5 pt-1 inset-0 lg:rounded-full text-zinc-950">
							${e.label}
						</div>
						<span class="lg:hidden absolute opacity-50 mix-blend-difference right-6 bottom-6 font-mono text-[.75rem] tracking-[0.05em]">
							${e.label === 'Email' ? 'hello@pmjr.cc' : indexStr}
						</span>
					</a>
				</div>`
      navList.insertAdjacentHTML('beforeend', navItem)
    })

    this.initScrambleText()
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
        class="footer relative z-10 h-lvh overflow-hidden rounded-t-4xl before:content-none lg:before:content-['']"
      >
        <div
          id="footerLinks"
          class="relative z-10 flex h-full flex-1 items-center pb-24 lg:pb-0"
        >
          <div
            id="menu"
            class="flex flex-1 flex-col flex-wrap gap-0 text-[2rem] tracking-[-0.04em] lg:flex-row lg:items-baseline lg:justify-center lg:gap-4 lg:text-[2.5rem]"
          >
            <span
              class="flex h-20 items-center px-5 lg:p-0 text-zinc-600 me-5"
            >
              ${i18next.t('connect.title')}
            </span>
            <span
              class="hidden lg:flex items-center self-center relative px-2 stroke-brand-400"
            >
              ${unsafeHTML(`${logo}`)}
            </span>
          </div>
        </div>
        <div class="absolute z-50 inset-x-0 bottom-0 h-12 w-full flex items-center gap-2 justify-center px-5 font-mono text-[.625rem] font-semibold uppercase bg-zinc-950 tracking-[0.1em]">
            <span> [c] 2025 Paulo melo Jr. </span>
            <span class="text-zinc-600"> / </span>
            <span> Made by a human being </span>
          </div>
      </footer>
    `
  }

  createRenderRoot() {
    return this
  }
}
