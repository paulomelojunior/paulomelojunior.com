import { LitElement } from 'lit'

class ThemeStore {
  private _dark = true
  private listeners: Set<LitElement> = new Set()

  get dark(): boolean {
    return this._dark
  }

  set dark(value: boolean) {
    this._dark = value
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
    this.notifyListeners()
  }

  toggle(): void {
    this.dark = !this.dark
  }

  subscribe(component: LitElement): void {
    this.listeners.add(component)
  }

  unsubscribe(component: LitElement): void {
    this.listeners.delete(component)
  }

  private notifyListeners(): void {
    this.listeners.forEach((component) => {
      component.requestUpdate()
    })
  }

  init(): void {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this._dark = savedTheme === 'dark'
    }
    document.documentElement.classList.toggle('dark', this._dark)
  }
}

export const themeStore = new ThemeStore()
