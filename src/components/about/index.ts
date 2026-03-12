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

  protected firstUpdated(_changedProperties: PropertyValues): void {}

  render() {
    return html`
      <section id="section-about">
        <div class="container">
          <div
            class="grid items-baseline gap-y-8 px-5 pt-16 xl:grid-cols-3 xl:px-20 xl:pt-24 2xl:px-32 2xl:pt-64"
          >
            <h2
              class="text-[2.5rem] leading-none tracking-tighter text-pretty text-zinc-50 xl:text-[3rem] 2xl:text-[4rem]"
            >
              ${i18next.t('about.title')}
            </h2>
            <div
              class="col-span-2 flex flex-col gap-8 leading-loose xl:text-[1.125rem]"
            >
              <div>
                <h3
                  class="text-brand-400 mb-1 hidden font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  Who I Am
                </h3>
                <p
                  class="mb-8 text-sm/loose text-pretty lg:text-xl/loose"
                >
                  ${i18next.t('about.p1')}
                </p>
                <p
                  class="mb-2 text-sm/loose text-pretty lg:text-xl/loose"
                >
                  ${i18next.t('about.p2')}
                </p>
              </div>
              <div>
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${i18next.t('about.education')}
                </h3>
                <ul class="grid gap-y-4 md:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Industrial Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2012 <span class="text-zinc-500">&bull;</span> Escola de
                      Design, UEMG
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Software Development
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2026 <span class="text-zinc-500">&bull;</span> Univ.
                      Católica de Brasília
                    </p>
                  </li>
                </ul>
              </div>
              <div class="pt-3">
                <h3
                  class="text-brand-400 font-mono text-[.625rem] font-semibold tracking-widest uppercase"
                >
                  ${i18next.t('about.courses')}
                </h3>
                <ul class="grid gap-y-4 md:grid-cols-3">
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      Digital Product Design
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2025 <span class="text-zinc-500">&bull;</span> Tera
                      <span class="text-zinc-500">&bull;</span>
                      <a
                        class="hover:text-brand-400 inline-flex underline decoration-zinc-600 underline-offset-4 transition-colors"
                        href="https://credentials.somostera.com/3efd7eaa4fbb5ef1277b1236b0d9f43d"
                      >
                        ${i18next.t('about.link')}
                      </a>
                    </p>
                  </li>
                  <li class="mt-3 grid gap-2">
                    <h4 class="text-[1.25rem] leading-none text-zinc-50">
                      ${i18next.t('about.iaBusiness')}
                    </h4>
                    <p
                      class="font-mono text-[.625rem] leading-none font-semibold tracking-widest uppercase"
                    >
                      2025 <span class="text-zinc-500">&bull;</span> Tera
                      <span class="text-zinc-500">&bull;</span>
                      <a
                        class="hover:text-brand-400 inline-flex underline decoration-zinc-600 underline-offset-4 transition-colors"
                        href="https://credentials.somostera.com/d938e0586c96cd80ff9daef38415fab1"
                      >
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
