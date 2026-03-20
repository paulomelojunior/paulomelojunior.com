import i18next from '../../store/i18n'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'
import home from './home.png'

@customElement('menu-container')
export class MenuContainer extends ThemeMixin(LitElement) {
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

  toggleLanguage() {
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

  render() {
    return html`
      <header
        class="absolute inset-x-0 z-40 w-full translate-y-px bg-linear-to-t from-zinc-950 to-zinc-950/80 backdrop-blur xl:fixed"
      >
        <div
          class="pointer-events-none fixed inset-x-0 bottom-12 h-40 bg-linear-to-t from-zinc-950"
        ></div>
        <div class="container flex items-center xl:grid xl:grid-cols-3">
          <nav class="xl:hidden">
            <div class="fixed inset-0 bg-zinc-950/50"></div>
            <ul
              id="anchors"
              class="${this.more
                ? 'h-dvh'
                : 'h-0'} fixed inset-0 flex w-dvw flex-col justify-center gap-4 overflow-hidden bg-zinc-950 transition-all duration-500"
            >
              <li>
                <mobile-item
                  href="${i18next.t('links.lastProject.url')}"
                  label="${i18next.t('links.lastProject.label')}"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${i18next.t('links.projects.url')}"
                  label="${i18next.t('links.projects.label')}"
                ></mobile-item>
              </li>
              <li>
                <mobile-item
                  href="${i18next.t('links.resume.url')}"
                  label="${i18next.t('links.resume.label')}"
                ></mobile-item>
              </li>
            </ul>
          </nav>
          <div
            class="transition-background size-12 cursor-pointer items-center justify-center p-3 duration-500 *:opacity-75 hover:bg-zinc-950 *:hover:opacity-100 xl:hidden"
          >
            <img
              src="${home}"
              class="transition-opacity duration-500"
              title="Back to homepage"
            />
          </div>
          <mail-button
            @click=${() => this.copyEmail()}
            @mouseleave=${() => this.copyEmailReset()}
            label="hello@pmjr.cc"
            class="hidden xl:flex"
            hover="${this.lang === 'en' ? 'Click to copy' : 'Copiar e-mail'}"
          ></mail-button>
          <button
            class="menu-toggle ${this.more
              ? 'menu-toggle--close'
              : ''} ms-auto me-4"
            @click=${() => this.toggleMore()}
          >
            <span class="uppercase"> Menu </span>
          </button>

          <nav>
            <ul id="anchors" class="hidden justify-end px-0 xl:flex xl:px-20">
              <li class="flex-1">
                <menu-item
                  href="#section-praxis"
                  label="${i18next.t('menu.praxis')}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-journey"
                  label="${i18next.t('menu.journey')}"
                ></menu-item>
              </li>
              <li class="flex-1">
                <menu-item
                  href="#section-connect"
                  label="${i18next.t('menu.connect')}"
                ></menu-item>
              </li>
              <li class="flex items-center pe-4 xl:hidden">
                <languages-button
                  @click=${() => this.toggleLanguage()}
                  label=${this.lang === 'pt' ? `BR` : `US`}
                  title="${this.lang === 'en'
                    ? 'Mudar para português'
                    : 'Change to english'}"
                ></languages-button>
              </li>
              <li class="flex items-center pe-4 xl:hidden">
                <button class="menu-toggle">
                  <span> menu </span>
                </button>
              </li>
            </ul>
          </nav>
          <div
            id="copy"
            class="grid-span-2 absolute flex h-12 w-full translate-y-full items-center justify-center gap-2 bg-zinc-950 px-5 font-mono text-[.625rem] font-semibold uppercase xl:hidden"
          >
            <span> [c] 2025 pmjr.cc </span>
            <span class="text-zinc-400"> / </span>
            <span> Made by a human being </span>
          </div>
          <div class="hidden items-center justify-end gap-2 xl:flex">
            <a
              class="cta-button px-4 py-1.5 text-[.75rem] font-semibold tracking-[0.05em] uppercase"
              href="${i18next.t('links.projects.url')}"
            >
              ${i18next.t('featured.button')}
            </a>
            <div class="flex h-12 items-center justify-center xl:h-12">
              <languages-button
                @click=${() => this.toggleLanguage()}
                label=${this.lang === 'pt' ? `PT · BR` : `EN · US`}
                title="${this.lang === 'en'
                  ? 'Mudar para português'
                  : 'Change to english'}"
              ></languages-button>
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
