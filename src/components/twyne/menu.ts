import i18next from '../../i18n'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'
import goBack from './imgs/go-back.svg'
import { gsap } from 'gsap'

@customElement('twyne-menu')
export class TwyneMenu extends ThemeMixin(LitElement) {
  @property({ type: Boolean }) more = false
  @property({ type: String }) lang = i18next.language

  constructor() {
    super()
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      this.lang = savedLang
      i18next.changeLanguage(savedLang)
    }
  }

  toggleMore() {
    this.more = !this.more
  }

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

  changeLang() {
    const currentLang = i18next.language
    const newLang = currentLang === 'en' ? 'pt' : 'en'

    i18next.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)

    // Atualiza a propriedade lang
    this.lang = newLang
  }

  copyEmail() {
    const email = 'hello@pmjr.cc'
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.updateText(
          this.lang === 'en' ? 'Email copied!' : 'Email copiado!',
          0
        )
      })
      .catch((error) => {
        alert(`Failed to copy email: ${error}`)
      })
  }

  copyEmailReset() {
    this.updateText(this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail', 300)
  }

  updateText(text: string, delay: number) {
    const element = document.querySelector('mail-button span')
    if (element) {
      setTimeout(() => {
        element.textContent = text
      }, delay)
    }
  }

  firstUpdated() {
    // close menu on scroll
    window.addEventListener('scroll', () => {
      this.more = false
    })

    // remove outline on top using gsap and scrollTrigger
    gsap.to('header', {
      scrollTrigger: {
        trigger: 'header',
        start: 'bottom top',
        toggleActions: 'play none none reverse',
        scrub: 2,
      },
      outline: '1px solid hsla(0 0 100% / 0.075)',
      padding: '0 0 0 0',
    })
  }

  getPreviousPage() {
    window.location.href = '/'
  }

  render() {
    return html`
      <header
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 lg:fixed lg:block py-2"
      >
        <div class="container lg:grid flex items-center lg:grid-cols-4">
          <nav class="lg:hidden">
            <ul id="anchors" class="flex bg-zinc-950 overflow-hidden fixed inset-0 flex-col justify-center w-dvw *:transition-all duration-500 ${this.more ? 'h-dvh' : 'h-0 *:opacity-0'}">
              <li>
                <span class="text-[2rem] tracking-[-0.04em] h-20 px-5 flex items-center text-zinc-500">
                  Menu
                </span>
              </li>
              <li>
                <mobile-item
                  href="/"
                  label="Home"
                  index="01"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${i18next.t('links.github.url')}"
                  label="${i18next.t('links.github.label')}"
                  index="02"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${i18next.t('links.linkedin.url')}"
                  label="${i18next.t('links.linkedin.label')}"
                  index="03"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${i18next.t('links.email.url')}"
                  label="${i18next.t('links.email.label')}"
                  index="hello@pmjr.cc"
                ></mobile-item>
              </li>
              <div class="absolute bottom-4 right-4">
                <lang-button
                  @click=${() => this.changeLang()}
                  label=${this.lang === 'pt' ? `PT · BR` : `EN · US`}
                  title="${this.lang === 'en'
                    ? 'Mudar para português'
                    : 'Change to english'}"
                ></lang-button>
              </div>
            </ul>
          </nav>
          <div class="flex items-center">
          <button
              @click=${() => this.getPreviousPage()}
              class="flex size-10 p-3 cursor-pointer transition-all duration-[200ms] items-center justify-center opacity-50 hover:opacity-100 hover:bg-zinc-50/10 active:bg-zinc-50/20 rounded-full active:scale-95"
              title="Go back to homepage"
            >
              <img
                src="${goBack}"
                class="transition-all duration-[200ms]"
              />
            </button>
            <mail-button
              @click=${() => this.copyEmail()}
              @mouseleave=${() => this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail'}"
            ></mail-button>
          </div>
          <button
            class="menu-toggle lg:hidden ms-auto me-4 ${this.more ? 'menu-toggle--close' : ''}"
            @click=${() => this.toggleMore()}
          >
            <span class="uppercase text-[.75rem] font-semibold">
              Menu
            </span>
          </button>
          <nav class="col-span-2">
            <ul id="anchors" class="hidden lg:flex justify-center px-0">
              <li class="spy-link">
                <menu-item
                  href="#goal"
                  label="${i18next.t('twyne.menu.goal')}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#proposal"
                  label="${i18next.t('twyne.menu.proposal')}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#impact"
                  label="${i18next.t('twyne.menu.impact')}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#mobile"
                  label="${i18next.t('twyne.menu.mobile')}"
                ></menu-item>
              </li>
              <li class="spy-link">
                <menu-item
                  href="#conclusion"
                  label="${i18next.t('twyne.menu.final')}"
                ></menu-item>
              </li>
            </ul>
          </nav>
          <div class="hidden lg:flex items-center justify-end gap-2">
            <a class="cta-button pt-[6px] pb-[6px] px-4 text-[.875rem]" href="${i18next.t('links.projects.url')}">
              ${i18next.t('featured.button')}
            </a>
            <div class="flex h-12 items-center justify-center lg:h-12">
              <lang-button
                @click=${() => this.changeLang()}
                label=${this.lang === 'pt' ? `PT · BR` : `EN · US`}
                title="${this.lang === 'en'
                  ? 'Mudar para português'
                  : 'Change to english'}"
              ></lang-button>
            </div>
          </div>
        </div>
      </header>
    `
  }

  createRenderRoot() {
    return this
  }
}
