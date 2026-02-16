import i18next from '../../i18n'
import { LitElement, PropertyValues, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ThemeMixin } from '../../store/theme'

@customElement('about-section')
export class AboutSection extends ThemeMixin(LitElement) {
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
    this.requestUpdate()
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
  }

  render() {
    return html`
      <section id="section-about">
        <div class="container">
          <div class="grid xl:grid-cols-3 px-5 xl:px-20 2xl:px-32 pt-16 xl:pt-24 2xl:pt-64 gap-y-8 items-baseline">
            <h2
              class="text-pretty text-[2.5rem] leading-none tracking-tight xl:text-[3rem] 2xl:text-[4rem] text-zinc-50"
            >
              ${i18next.t('about.title')}
            </h2>
            <div class="col-span-2 flex flex-col gap-8 leading-loose xl:text-[1.125rem]">
              <div>
                <h3 class="hidden font-mono text-brand-400 text-[.625rem] font-semibold uppercase tracking-widest mb-1">
                  Who I Am
                </h3>
                <p class="text-sm/loose lg:text-base/loose text-pretty mb-8">
                  ${i18next.t('about.p1')}
                </p>
                <p class="text-sm/loose lg:text-base/loose text-pretty">
                  ${i18next.t('about.p2')}
                </p>
              </div>
              <div class="pt-2">
                <h3 class="font-mono text-brand-400 text-[.625rem] font-semibold uppercase tracking-widest">
                  ${i18next.t('about.education')}
                </h3>
                <ul class="grid xl:grid-cols-3 gap-y-4">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Industrial Design
                    </h4>
                    <p class="text-[.625rem] font-semibold uppercase tracking-widest font-mono leading-none">
                      2012 <span class="text-zinc-500">&bull;</span> Escola de Design, UEMG
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Software Development
                    </h4>
                    <p class="text-[.625rem] font-semibold uppercase tracking-widest font-mono leading-none">
                      2026 <span class="text-zinc-500">&bull;</span> Univ. Católica de Brasília
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Digital Product Design
                    </h4>
                    <p class="text-[.625rem] font-semibold uppercase tracking-widest font-mono leading-none">
                      2025 <span class="text-zinc-500">&bull;</span> Tera <span class="text-zinc-500">&bull;</span>
                      <a
                        class="inline-flex hover:text-brand-400 transition-colors underline underline-offset-4 decoration-zinc-600"
                        href="https://credentials.somostera.com/3efd7eaa4fbb5ef1277b1236b0d9f43d">
                        ${i18next.t('about.link')}
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
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
