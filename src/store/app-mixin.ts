import { LitElement } from 'lit'
import i18next from './i18n'
import { themeStore } from './theme'

export interface AppComponent {
  dark: boolean
  lang: string
  t: typeof i18next.t
  toggleTheme(): void
  toggleLanguage(): void
}

export const AppMixin = <T extends new (...args: any[]) => LitElement>(
  superClass: T
) => {
  return class extends superClass implements AppComponent {
    dark: boolean = themeStore.dark
    lang: string = i18next.language

    get t() {
      return i18next.t.bind(i18next)
    }

    connectedCallback() {
      super.connectedCallback()
      themeStore.subscribe(this)
      i18next.on('languageChanged', this.handleLanguageChange)
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      themeStore.unsubscribe(this)
      i18next.off('languageChanged', this.handleLanguageChange)
    }

    private handleLanguageChange = () => {
      this.lang = i18next.language
      this.requestUpdate()
    }

    toggleTheme(): void {
      themeStore.toggle()
    }

    toggleLanguage(): void {
      const newLang = this.lang === 'en' ? 'pt' : 'en'
      i18next.changeLanguage(newLang)
    }
  }
}
