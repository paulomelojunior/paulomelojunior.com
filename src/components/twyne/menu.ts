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
    gsap.from('header > *', {
      y: -64,
    })

    // close menu on scroll
    window.addEventListener('scroll', () => {
      this.more = false
    })

    // remove outline on top using gsap and scrollTrigge
    gsap.to('header', {
      scrollTrigger: {
        trigger: '.hero',
        start: '60 60',
        end: '60 0',
        toggleActions: 'play none none reverse',
        scrub: 1,
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
        class="fixed inset-x-0 z-40 w-full bg-linear-to-t from-zinc-950 to-zinc-950/80 backdrop-blur md:py-3 lg:fixed"
      >
        <div class="flex items-center lg:container lg:grid lg:grid-cols-4">
          <nav class="lg:hidden">
            <ul
              id="anchors"
              class="${this.more
                ? 'h-dvh'
                : 'h-0 *:opacity-0'} fixed inset-0 flex w-dvw flex-col justify-center overflow-hidden bg-zinc-950 duration-500 *:transition-all"
            >
              <li>
                <span
                  class="flex h-20 items-center px-5 text-[2rem] tracking-[-0.04em] text-zinc-500"
                >
                  Menu
                </span>
              </li>
              <li>
                <mobile-item href="/" label="Home" index="01"></mobile-item>
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
              <div class="absolute right-4 bottom-4">
                <button-lang
                  @click=${() => this.changeLang()}
                  label=${this.lang === 'pt' ? `PT · BR` : `EN · US`}
                  title="${this.lang === 'en'
                    ? 'Mudar para português'
                    : 'Change to english'}"
                ></button-lang>
              </div>
            </ul>
          </nav>
          <div class="flex items-center">
            <button
              @click=${() => this.getPreviousPage()}
              class="ms-2 flex size-8 cursor-pointer items-center justify-center rounded-full opacity-50 transition-all duration-[200ms] hover:bg-zinc-50/10 hover:opacity-100 active:scale-95 active:bg-zinc-50/20"
              title="Go back to homepage"
            >
              <img src="${goBack}" class="transition-all duration-[200ms]" />
            </button>
            <mail-button
              @click=${() => this.copyEmail()}
              @mouseleave=${() => this.copyEmailReset()}
              label="hello@pmjr.cc"
              hover="${this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail'}"
            ></mail-button>
          </div>
          <button
            class="menu-toggle ${this.more
              ? 'menu-toggle--close'
              : ''} ms-auto me-4 lg:hidden"
            @click=${() => this.toggleMore()}
          >
            <span class="text-[.75rem] font-semibold uppercase"> Menu </span>
          </button>
          <nav class="col-span-2">
            <ul id="anchors" class="hidden justify-center px-0 lg:flex">
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
          <div class="hidden items-center justify-end gap-1 lg:flex">
            <a
              class="cta-button px-3.5 pt-2 pb-2.5 text-[.875rem]"
              href="${i18next.t('links.projects.url')}"
            >
              ${i18next.t('featured.button')}
            </a>
            <languages-dropdown></languages-dropdown>
          </div>
        </div>
      </header>
    `
  }

  createRenderRoot() {
    return this
  }
}
