import i18next from '../../../i18n'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../../store/theme'
import goBack from './go-back.svg'
import gsap from 'gsap'

@customElement('projects-menu')
export class ProjectsMenu extends ThemeMixin(LitElement) {
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

  changeTheme() {
    this.toggleTheme()
  }

  copyEmail() {
    const email = 'hello@pmjr.cc'
    navigator.clipboard
      .writeText(email)
      .then(() => {
        this.updateText(this.lang === 'en' ? 'Copied!' : 'Copiado!', 0)
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
    // remove outline on top using gsap and scrollTrigge
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
        class="absolute inset-x-0 z-40 hidden w-full bg-linear-to-t from-zinc-950 backdrop-blur to-zinc-950/80 backdrop-saturate-200 lg:fixed lg:block py-2"
      >
        <div class="lg:container grid items-center lg:grid-cols-3">
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
          <nav>
            <ul id="anchors" class="flex justify-center">
              <li>
                <menu-item
                  href="#ifficient"
                  label="Ifficient"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#damus"
                  label="Damus"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#allugator"
                  label="Allugator"
                ></menu-item>
              </li>
              <li>
                <menu-item
                  href="#multiplayer"
                  label="Multiplayer"
                ></menu-item>
              </li>
            </ul>
            <div
              id="copy"
              class="absolute flex h-12 w-full items-center justify-center px-5 font-mono text-[.625rem] font-semibold uppercase lg:hidden bg-zinc-900"
            >
              <span> Copyright 2025 Paulo Melo Jr. </span>
            </div>
          </nav>
          <div class="flex justify-end">
            <div class="flex items-center justify-center gap-2">
              <a
                class="cta-button flex items-center gap-2 pt-[6px] pb-[6px] text-[.875rem]"
                href="/Paulo Melo Jr. - Currículo.pdf"
                target="_blank"
              >
                ${this.lang === 'en' ? 'Download resume' : 'Baixar currículo'}
              </a>
              <div class="flex h-12 items-center justify-center">
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
        </div>
      </header>
    `
  }

  createRenderRoot() {
    return this
  }
}
